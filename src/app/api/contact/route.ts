/**
 * =====================================================================
 * MADE BY TAPWEBS (https://tapwebs.in | https://tapwebs.space)
 * ALL RIGHTS ARE OF TAPWEBS
 * 
 * Co-Owners: TAPWEBS & Dr. Vijay Kumar Binwal
 * Client Website: https://drvijaykumarbinwal.com
 * Agency Website: https://tapwebs.in
 * Portfolio Showcase: https://tapwebs.space
 * =====================================================================
 */

import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Basic Rate Limiting
const rateLimitMap = new Map<string, { count: number, resetTime: number }>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_REQUESTS = 5

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || record.resetTime < now) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (record.count >= MAX_REQUESTS) {
    return false
  }

  record.count += 1
  return true
}

const INDIAN_MOBILE = /^[6-9]\d{9}$/

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function buildEnquiryHtml(data: Record<string, string>): string {
  const { name, phone, email, service, language, query } = data
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #0369A1; color: #fff; padding: 20px; border-radius: 12px 12px 0 0;">
        <h2 style="margin: 0;">New Appointment Enquiry</h2>
        <p style="margin: 4px 0 0; opacity: 0.85;">drvijaykumarbinwal.com — Contact Form</p>
      </div>
      <div style="border: 1px solid #E0F2FE; border-top: none; padding: 24px; border-radius: 0 0 12px 12px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #475569; width: 140px;">Name</td><td style="padding: 8px 0; color: #0C4A6E; font-weight: 600;">${escapeHtml(name)}</td></tr>
          <tr><td style="padding: 8px 0; color: #475569;">Phone / WhatsApp</td><td style="padding: 8px 0; color: #0C4A6E; font-weight: 600;">${escapeHtml(phone)}</td></tr>
          ${email ? `<tr><td style="padding: 8px 0; color: #475569;">Email</td><td style="padding: 8px 0; color: #0C4A6E;">${escapeHtml(email)}</td></tr>` : ''}
          ${service ? `<tr><td style="padding: 8px 0; color: #475569;">Service Needed</td><td style="padding: 8px 0; color: #0C4A6E;">${escapeHtml(service)}</td></tr>` : ''}
          ${language ? `<tr><td style="padding: 8px 0; color: #475569;">Language</td><td style="padding: 8px 0; color: #0C4A6E;">${escapeHtml(language)}</td></tr>` : ''}
        </table>
        <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #E0F2FE;">
          <p style="color: #475569; margin: 0 0 6px;">Message / Symptoms:</p>
          <p style="color: #0C4A6E; line-height: 1.6; margin: 0; white-space: pre-wrap;">${escapeHtml(query)}</p>
        </div>
      </div>
    </div>
  `
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for') || 'unknown'
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in a minute.' },
        { status: 429 }
      )
    }

    const body = await req.json()
    
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
    }

    const data = {
      name: String(body.name ?? '').trim(),
      phone: String(body.phone ?? '').trim(),
      email: String(body.email ?? '').trim(),
      service: String(body.service ?? '').trim(),
      language: String(body.language ?? '').trim(),
      query: String(body.query ?? '').trim(),
    }

    if (!data.name || !data.phone || !data.query) {
      return NextResponse.json({ error: 'Name, phone, and query are required.' }, { status: 400 })
    }
    
    if (!INDIAN_MOBILE.test(data.phone.replace(/\s/g, ''))) {
      return NextResponse.json({ error: 'Please enter a valid 10-digit Indian mobile number.' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_TO_EMAIL || 'clinic@example.com'
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'notifications@example.com'

    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact us via WhatsApp.' },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)

    const { error } = await resend.emails.send({
      from: `Dr. Vijay Kumar Binwal Website <${fromEmail}>`,
      to: [toEmail],
      replyTo: data.email || undefined,
      subject: `New Enquiry from ${data.name}${data.service ? ` — ${data.service}` : ''}`,
      html: buildEnquiryHtml(data),
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Could not send your message. Please try WhatsApp.' },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true }, { status: 200 })

  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try WhatsApp.' },
      { status: 500 }
    )
  }
}
