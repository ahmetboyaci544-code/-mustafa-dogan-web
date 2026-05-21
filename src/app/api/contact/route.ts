import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const TO_EMAIL = 'doganyapitasarim@outlook.com.tr'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, company, phone, email, product, message } = body

    if (!name?.trim() || !phone?.trim()) {
      return NextResponse.json({ error: 'Ad Soyad ve Telefon zorunludur.' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Doğan Yapı Market <onboarding@resend.dev>',
      to: [TO_EMAIL],
      subject: `Yeni Teklif Talebi – ${name.trim()}${company ? ` / ${company}` : ''}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;padding:32px;background:#f7f6f3;border-radius:8px;">
          <h2 style="color:#14305c;margin-bottom:24px;font-size:22px;">Yeni Teklif Talebi</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr style="border-bottom:1px solid #e5e5e5;">
              <td style="padding:10px 0;font-weight:bold;color:#444;width:140px;">Ad Soyad</td>
              <td style="padding:10px 0;color:#111;">${name.trim()}</td>
            </tr>
            <tr style="border-bottom:1px solid #e5e5e5;">
              <td style="padding:10px 0;font-weight:bold;color:#444;">Firma</td>
              <td style="padding:10px 0;color:#111;">${company?.trim() || '—'}</td>
            </tr>
            <tr style="border-bottom:1px solid #e5e5e5;">
              <td style="padding:10px 0;font-weight:bold;color:#444;">Telefon</td>
              <td style="padding:10px 0;color:#111;">${phone.trim()}</td>
            </tr>
            <tr style="border-bottom:1px solid #e5e5e5;">
              <td style="padding:10px 0;font-weight:bold;color:#444;">E-Posta</td>
              <td style="padding:10px 0;color:#111;">${email?.trim() || '—'}</td>
            </tr>
            <tr style="border-bottom:1px solid #e5e5e5;">
              <td style="padding:10px 0;font-weight:bold;color:#444;">Ürün Kategorisi</td>
              <td style="padding:10px 0;color:#111;">${product || '—'}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;font-weight:bold;color:#444;vertical-align:top;">Mesaj</td>
              <td style="padding:10px 0;color:#111;white-space:pre-line;">${message?.trim() || '—'}</td>
            </tr>
          </table>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'E-posta gönderilemedi, lütfen tekrar deneyin.' }, { status: 500 })
  }
}
