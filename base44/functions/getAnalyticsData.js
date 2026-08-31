import { createClientFromRequest } from 'npm:@base44/sdk@0.8.38';

const ADMIN_API = 'https://analyticsadmin.googleapis.com/v1beta';
const DATA_API = 'https://analyticsdata.googleapis.com/v1beta';

const fmt = (d) => d.toISOString().slice(0, 10);

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });
    if (user.role !== 'admin') return Response.json({ error: 'Forbidden' }, { status: 403 });

    const { accessToken } = await base44.asServiceRole.connectors.getConnection('google_analytics');
    if (!accessToken) return Response.json({ error: 'Google Analytics hesabı bağlı değil' }, { status: 500 });

    let body = {};
    try { body = await req.json(); } catch { /* optional */ }
    const days = Number(body.days) > 0 && Number(body.days) <= 365 ? Number(body.days) : 7;
    const requestedPropertyId = body.propertyId;

    // 1) List GA accounts first (properties.list requires a parent filter)
    const accountsRes = await fetch(`${ADMIN_API}/accounts?pageSize=200`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    if (!accountsRes.ok) {
      const errText = await accountsRes.text();
      return Response.json({ error: `GA Admin API (accounts) hatası: ${errText}` }, { status: 502 });
    }
    const accountsData = await accountsRes.json();
    const accountNames = (accountsData.accounts || []).map((a) => a.name);

    // 2) List GA4 properties under each account in parallel
    const propsResults = await Promise.all(
      accountNames.map((accountName) =>
        fetch(
          `${ADMIN_API}/properties?pageSize=200&showDeleted=false&filter=parent:${accountName}`,
          { headers: { Authorization: `Bearer ${accessToken}` } }
        ).then((r) => r.json())
      )
    );
    const properties = [];
    for (const pd of propsResults) {
      if (pd && Array.isArray(pd.properties)) {
        for (const p of pd.properties) {
          properties.push({
            id: p.name,
            displayName: p.displayName,
            websiteUrl: p.websiteUrl || ''
          });
        }
      }
    }
    properties.sort((a, b) => a.displayName.localeCompare(b.displayName));

    if (properties.length === 0) {
      const message = accountNames.length === 0
        ? 'Bağlı Google Analytics hesabında erişilebilir hiçbir hesap bulunamadı. Analytics ile izlenen bir hesabın sahibi/yöneticisi olduğunuzdan emin olun.'
        : 'Bağlı hesaptaki GA hesaplarında GA4 mülkü bulunamadı. Google Analytics üzerinde bir UA/GA4 mülkü oluşturun veya bağlı hesabı kontrol edin.';
      return Response.json({
        properties: [],
        selectedProperty: null,
        dateRange: null,
        dailyVisitors: [],
        topPages: [],
        totals: { activeUsers: 0, pageViews: 0 },
        message
      });
    }

    const selectedProperty =
      (requestedPropertyId && properties.find((p) => p.id === requestedPropertyId)) ||
      properties[0];

    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - (days - 1));
    const startDateStr = fmt(startDate);
    const endDateStr = fmt(endDate);

    // 2) Run daily visitors + top pages reports in parallel
    const [dailyRes, pagesRes] = await Promise.all([
      fetch(`${DATA_API}/${selectedProperty.id}:runReport`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          dateRanges: [{ startDate: startDateStr, endDate: endDateStr }],
          dimensions: [{ name: 'date' }],
          metrics: [{ name: 'activeUsers' }, { name: 'screenPageViews' }],
          orderBys: [{ dimension: { orderType: 'ALPHABETICAL', dimension: { name: 'date' } } }],
          keepEmptyRows: false
        })
      }),
      fetch(`${DATA_API}/${selectedProperty.id}:runReport`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          dateRanges: [{ startDate: startDateStr, endDate: endDateStr }],
          dimensions: [{ name: 'pagePath' }, { name: 'hostName' }],
          metrics: [{ name: 'screenPageViews' }, { name: 'activeUsers' }],
          orderBys: [{ metric: { metric: { name: 'screenPageViews' } }, desc: true }],
          limit: 15
        })
      })
    ]);

    if (!dailyRes.ok || !pagesRes.ok) {
      const bad = !dailyRes.ok ? dailyRes : pagesRes;
      const errText = await bad.text();
      return Response.json({ error: `GA Data API hatası: ${errText}` }, { status: 502 });
    }

    const dailyData = await dailyRes.json();
    const pagesData = await pagesRes.json();

    const dailyVisitors = (dailyData.rows || []).map((row) => ({
      date: row.dimensionValues[0].value,
      activeUsers: Number(row.metricValues[0].value),
      pageViews: Number(row.metricValues[1].value)
    }));

    const topPages = (pagesData.rows || []).map((row) => ({
      path: row.dimensionValues[0].value,
      host: row.dimensionValues[1].value,
      pageViews: Number(row.metricValues[0].value),
      activeUsers: Number(row.metricValues[1].value)
    }));

    const totals = {
      activeUsers: dailyData.totals?.[0]?.metricValues?.[0]?.value
        ? Number(dailyData.totals[0].metricValues[0].value)
        : dailyVisitors.reduce((s, r) => s + r.activeUsers, 0),
      pageViews: dailyData.totals?.[0]?.metricValues?.[1]?.value
        ? Number(dailyData.totals[0].metricValues[1].value)
        : dailyVisitors.reduce((s, r) => s + r.pageViews, 0)
    };

    return Response.json({
      properties,
      selectedProperty,
      dateRange: { startDate: startDateStr, endDate: endDateStr },
      dailyVisitors,
      topPages,
      totals
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});
