import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { name, company, phone, email, subject, location, message } = await req.json();

    if (!name || !phone || !email || !message) {
      return Response.json({ error: 'Gerekli alanlar eksik' }, { status: 400 });
    }

    // Talebi database'e kaydet
    await base44.asServiceRole.entities.ContactForm.create({
      name,
      company,
      phone,
      email,
      subject,
      location,
      message,
      status: 'new'
    });

    // Kullanıcıdan gelen tüm alanları HTML-encode et (injection koruması)
    const escapeHtml = (str) =>
      String(str == null ? '' : str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');

    const safeName = escapeHtml(name);
    const safeCompany = escapeHtml(company);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeLocation = escapeHtml(location);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

    const resendApiKey = Deno.env.get('RESEND_API_KEY');

    if (!resendApiKey) {
      console.error('RESEND_API_KEY eksik');
      return Response.json({ success: true, message: 'Talep kaydedildi (email gönderilemedi)' });
    }

    const emailBody = `
<h2 style="color:#333;font-family:Arial,sans-serif;">Yeni Teklif Talebi</h2>
<table style="width:100%;border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;">
  <tr><td style="padding:8px 12px;font-weight:bold;background:#f5f5f5;width:140px;">Ad Soyad:</td><td style="padding:8px 12px;">${safeName}</td></tr>
  <tr><td style="padding:8px 12px;font-weight:bold;">Firma:</td><td style="padding:8px 12px;">${safeCompany || '-'}</td></tr>
  <tr><td style="padding:8px 12px;font-weight:bold;background:#f5f5f5;">Telefon:</td><td style="padding:8px 12px;">${safePhone}</td></tr>
  <tr><td style="padding:8px 12px;font-weight:bold;">E-posta:</td><td style="padding:8px 12px;">${safeEmail}</td></tr>
  <tr><td style="padding:8px 12px;font-weight:bold;background:#f5f5f5;">Talep Konusu:</td><td style="padding:8px 12px;">${safeSubject || '-'}</td></tr>
  <tr><td style="padding:8px 12px;font-weight:bold;">Lokasyon:</td><td style="padding:8px 12px;">${safeLocation || '-'}</td></tr>
  <tr><td style="padding:8px 12px;font-weight:bold;background:#f5f5f5;" valign="top">Mesaj:</td><td style="padding:8px 12px;">${safeMessage}</td></tr>
</table>
<p style="color:#888;font-size:12px;margin-top:16px;font-family:Arial,sans-serif;">Bu talep BİEM Teknoloji Elektronik web sitesinden gönderilmiştir.</p>
`;

    const subjectLine = `Yeni Teklif Talebi - ${safeName}${safeCompany ? ' (' + safeCompany + ')' : ''}`;

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'BİEM Web <onboarding@resend.dev>',
        to: ['mustafa@biemelektronik.com'],
        cc: ['proje@biemelektronik.com'],
        subject: subjectLine,
        html: emailBody,
        reply_to: email,
      }),
    });

    if (!resendRes.ok) {
      const errText = await resendRes.text();
      console.error('Resend hatası:', errText);
      return Response.json({ success: true, message: 'Talep kaydedildi (email gönderilemedi: ' + errText + ')' });
    }

    return Response.json({ success: true, message: 'Talep başarıyla kaydedildi ve bildirim gönderildi' });
  } catch (error) {
    console.error('Hata:', error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
});
