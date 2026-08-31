import React, { useEffect, useState, useCallback } from "react";
import { Navigate } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSEO from "@/components/shared/BreadcrumbSEO";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from "recharts";
import { Users, Eye, TrendingUp, Loader2, AlertCircle, Globe, ShieldCheck } from "lucide-react";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";

function formatDate(yyyymmdd) {
  if (!yyyymmdd || yyyymmdd.length !== 8) return yyyymmdd;
  return `${yyyymmdd.slice(6, 8)}.${yyyymmdd.slice(4, 6)}.${yyyymmdd.slice(0, 4)}`;
}

function SummaryCard({ icon, label, value, accent }) {
  const isAccent = accent === "accent";
  return (
    <div className="bg-card border border-border rounded-lg p-5">
      <div className="flex items-center gap-3 mb-3">
        <div className={`flex h-9 w-9 items-center justify-center rounded-md ${isAccent ? "bg-accent/15 text-accent" : "bg-primary/15 text-primary"}`}>
          {icon}
        </div>
        <span className="text-sm text-muted-foreground">{label}</span>
      </div>
      <p className="text-2xl font-bold text-foreground">{value.toLocaleString("tr-TR")}</p>
    </div>
  );
}

export default function AnalyticsDashboard() {
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [days, setDays] = useState(7);
  const [propertyId, setPropertyId] = useState("");

  const fetchData = useCallback(async (d, pid) => {
    setLoading(true);
    setError(null);
    try {
      const res = await base44.functions.invoke("getAnalyticsData", {
        days: d,
        propertyId: pid || undefined,
      });
      setData(res.data);
      if (res.data?.selectedProperty && !pid) {
        setPropertyId(res.data.selectedProperty.id);
      }
    } catch (e) {
      setError(e?.response?.data?.error || e?.message || "Veri alınamadı");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const me = await base44.auth.me();
        setUser(me);
        if (!me || me.role !== "admin") {
          setAuthChecked(true);
          return;
        }
        await fetchData(days, propertyId);
      } catch (e) {
        setError(e?.message || "Kimlik doğrulanamadı");
      } finally {
        setAuthChecked(true);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDaysChange = (value) => {
    setDays(Number(value));
    fetchData(Number(value), propertyId);
  };

  const handlePropertyChange = (value) => {
    setPropertyId(value);
    fetchData(days, value);
  };

  if (!authChecked) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user || user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  const chartData = (data?.dailyVisitors || []).map((r) => ({
    name: formatDate(r.date),
    Ziyaretci: r.activeUsers,
    Sayfa: r.pageViews,
  }));

  return (
    <>
      <SEOHead
        title="Analitik Paneli"
        description="Google Analytics trafik verileri ve ziyaretçi istatistikleri"
        canonical="/analitik-paneli"
        noindex
      />
      <BreadcrumbSEO
        items={[
          { name: "Ana Sayfa", url: "https://www.biemelektronik.com/" },
          { name: "Analitik Paneli", url: "https://www.biemelektronik.com/analitik-paneli" }
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-10">
        <div className="flex items-center gap-2 text-primary mb-3">
          <ShieldCheck className="h-5 w-5" />
          <span className="text-xs font-mono tracking-wider uppercase">Yönetim Paneli</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Google Analytics Paneli</h1>
        <p className="text-muted-foreground mb-8">
          Günlük ziyaretçi sayıları ve en çok görüntülenen sayfaların canlı takibi.
        </p>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex flex-col gap-1.5">
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Mülk</span>
            <Select value={propertyId} onValueChange={handlePropertyChange} disabled={loading}>
              <SelectTrigger className="w-[260px] h-10">
                <SelectValue placeholder="Mülk seçin" />
              </SelectTrigger>
              <SelectContent>
                {(data?.properties || []).map((p) => (
                  <SelectItem key={p.id} value={p.id}>
                    {p.displayName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Periyot</span>
            <Select value={String(days)} onValueChange={handleDaysChange} disabled={loading}>
              <SelectTrigger className="w-[150px] h-10">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">Son 7 gün</SelectItem>
                <SelectItem value="14">Son 14 gün</SelectItem>
                <SelectItem value="30">Son 30 gün</SelectItem>
                <SelectItem value="90">Son 90 gün</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {error && (
          <div className="flex items-center gap-3 p-4 rounded-lg border border-destructive/30 bg-destructive/5 text-destructive mb-6">
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
            <span className="text-sm">{error}</span>
          </div>
        )}

        {loading ? (
          <div className="flex items-center justify-center py-24">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : !data || data.message ? (
          <div className="py-24 text-center text-muted-foreground">
            <p>{data?.message || "Görüntülenecek veri bulunamadı."}</p>
          </div>
        ) : (
          <>
            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <SummaryCard
                icon={<Users className="h-5 w-5" />}
                label="Toplam Ziyaretçi"
                value={data.totals?.activeUsers ?? 0}
                accent="primary"
              />
              <SummaryCard
                icon={<Eye className="h-5 w-5" />}
                label="Toplam Sayfa Görüntüleme"
                value={data.totals?.pageViews ?? 0}
                accent="accent"
              />
              <SummaryCard
                icon={<TrendingUp className="h-5 w-5" />}
                label="Günlük Ort. Ziyaretçi"
                value={data.dailyVisitors?.length
                  ? Math.round((data.totals?.activeUsers ?? 0) / data.dailyVisitors.length)
                  : 0}
                accent="primary"
              />
            </div>

            {/* Daily visitors chart */}
            <div className="bg-card border border-border rounded-lg p-5 mb-8">
              <h2 className="text-lg font-semibold mb-4 text-foreground">
                Günlük Ziyaretçi & Sayfa Görüntüleme
              </h2>
              {chartData.length === 0 ? (
                <p className="text-muted-foreground text-sm py-10 text-center">
                  Bu dönemde veri bulunamadı.
                </p>
              ) : (
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="cVis" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="hsl(186 100% 50%)" stopOpacity={0.5} />
                          <stop offset="100%" stopColor="hsl(186 100% 50%)" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="cPv" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="hsl(40 100% 50%)" stopOpacity={0.4} />
                          <stop offset="100%" stopColor="hsl(40 100% 50%)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(222 20% 25%)" vertical={false} />
                      <XAxis dataKey="name" stroke="hsl(215 20% 65%)" fontSize={11} tickLine={false} axisLine={false} />
                      <YAxis stroke="hsl(215 20% 65%)" fontSize={11} tickLine={false} axisLine={false} width={40} />
                      <Tooltip
                        contentStyle={{
                          background: "hsl(222 35% 15%)",
                          border: "1px solid hsl(222 20% 25%)",
                          borderRadius: 8,
                          color: "hsl(210 40% 98%)",
                        }}
                      />
                      <Legend wrapperStyle={{ fontSize: 12 }} />
                      <Area type="monotone" dataKey="Sayfa" stroke="hsl(40 100% 50%)" strokeWidth={2} fill="url(#cPv)" />
                      <Area type="monotone" dataKey="Ziyaretci" stroke="hsl(186 100% 50%)" strokeWidth={2} fill="url(#cVis)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              )}
            </div>

            {/* Top pages */}
            <div className="bg-card border border-border rounded-lg p-5">
              <h2 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                En Çok Görüntülenen Sayfalar
              </h2>
              {data.topPages?.length === 0 ? (
                <p className="text-muted-foreground text-sm py-6 text-center">
                  Bu dönemde sayfa verisi bulunamadı.
                </p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-muted-foreground border-b border-border">
                        <th className="py-2 pr-4 font-medium w-10">#</th>
                        <th className="py-2 pr-4 font-medium">Sayfa</th>
                        <th className="py-2 pr-4 font-medium text-right">Görüntüleme</th>
                        <th className="py-2 font-medium text-right">Ziyaretçi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(data.topPages || []).map((p, i) => (
                        <tr key={i} className="border-b border-border/50 hover:bg-secondary/30">
                          <td className="py-2.5 pr-4 text-muted-foreground font-mono">{i + 1}</td>
                          <td className="py-2.5 pr-4">
                            <a
                              href={`https://${p.host}${p.path}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline break-all"
                            >
                              {p.host}{p.path}
                            </a>
                          </td>
                          <td className="py-2.5 pr-4 text-right font-mono">
                            {p.pageViews.toLocaleString("tr-TR")}
                          </td>
                          <td className="py-2.5 text-right font-mono text-muted-foreground">
                            {p.activeUsers.toLocaleString("tr-TR")}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}
