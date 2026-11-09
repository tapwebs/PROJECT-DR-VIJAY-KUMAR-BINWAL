import type { Metadata, Viewport } from 'next'
import { Figtree, Noto_Sans_Devanagari } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/frontend/components/layout/Navbar'
import { Footer } from '@/frontend/components/layout/Footer'
import { ChatbotLoader } from '@/frontend/components/chatbot/ChatbotLoader'
import { GoogleAnalytics } from '@/frontend/components/analytics/GoogleAnalytics'
import { I18nProvider } from '@/frontend/lib/i18n/I18nProvider'
import { getDoctorSameAs } from '@/frontend/lib/doctor-entity'

// Single Latin display+body font. Figtree handles both heading and body —
// removing Noto_Sans saved a font file and ~30 KB of preload.
const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // dropped 500 — only three weights actually used
  variable: '--font-heading',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
  adjustFontFallback: true,
})

// Devanagari font is Hindi-only. Loaded but NOT preloaded — Next.js still
// applies it via CSS variable; users only download it if their viewport
// renders Devanagari content.
const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  weight: ['400', '600', '700'],
  variable: '--font-devanagari',
  display: 'swap',
  preload: false,
  fallback: ['system-ui', 'sans-serif'],
})

export const viewport: Viewport = {
  themeColor: '#0369A1',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://drvijaykumarbinwal.com'

export const metadata: Metadata = {
  title: {
    default: 'Dr. Vijay Kumar Binwal — Kidney Specialist Jaipur',
    template: '%s | Dr. Vijay Kumar Binwal',
  },
  description:
    'Expert nephrology care by Dr. Vijay Kumar Binwal — DM Nephrology. Kidney disease treatment, dialysis, transplant consultation in Jaipur. Book appointment via WhatsApp.',
  keywords: [
    'kidney specialist Jaipur',
    'nephrologist Jaipur',
    'kidney disease treatment Jaipur',
    'dialysis Jaipur',
    'Dr Vijay Kumar Binwal',
    'किडनी विशेषज्ञ जयपुर',
    'नेफ्रोलॉजिस्ट जयपुर',
  ],
  authors: [{ name: 'Dr. Vijay Kumar Binwal' }],
  creator: 'Dr. Vijay Kumar Binwal',
  metadataBase: new URL(SITE),
  alternates: {
    canonical: SITE,
    // Multilingual SEO — both languages served at the same URL,
    // language is selected client-side. We declare both via x-default
    // so search engines understand the site is bilingual.
    languages: {
      'hi-IN': SITE,
      'en-IN': SITE,
      'x-default': SITE,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'hi_IN',
    alternateLocale: ['en_IN'],
    url: SITE,
    siteName: 'Dr. Vijay Kumar Binwal',
    title: 'Dr. Vijay Kumar Binwal — Kidney Specialist Jaipur',
    description:
      'Expert nephrology care in Jaipur. Kidney disease, dialysis, transplant consultation by Dr. Vijay Kumar Binwal — DM Nephrology.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Vijay Kumar Binwal — Nephrologist & Kidney Specialist Jaipur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Vijay Kumar Binwal — Kidney Specialist Jaipur',
    description: 'Expert nephrology care in Jaipur by Dr. Vijay Kumar Binwal.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

// Sitewide entity graph — previously the only structured data was page-level
// (Physician on /about, MedicalProcedure on /services/[slug], etc.) with no
// Organization/WebSite schema tying the whole domain together. This
// @graph block gives Google one consistent entity for the clinic, the
// doctor, and the website, referenced by @id from every page-level schema.
const DOCTOR_SAME_AS = getDoctorSameAs()

const SITE_ENTITY_JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalOrganization',
      '@id': `${SITE}/#organization`,
      name: 'Pinkcity Superspeciality Clinic',
      url: SITE,
      logo: `${SITE}/images/dr-vijay-kumar-binwal-nephrologist-jaipur-logo.png`,
      telephone: '+91-9521874874',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'S36, New Sanganer Road, Near Indian Oil Petrol Pump, Mansarovar Sector 6',
        addressLocality: 'Jaipur',
        addressRegion: 'Rajasthan',
        postalCode: '302020',
        addressCountry: 'IN',
      },
      medicalSpecialty: 'Nephrology',
      employee: { '@id': `${SITE}/#doctor` },
    },
    {
      '@type': 'Physician',
      '@id': `${SITE}/#doctor`,
      name: 'Dr. Vijay Kumar Binwal',
      url: `${SITE}/about`,
      jobTitle: 'Senior Transplant & Dialysis Specialist',
      medicalSpecialty: 'Nephrology',
      worksFor: { '@id': `${SITE}/#organization` },
      alumniOf: [
        { '@type': 'EducationalOrganization', name: 'Sardar Patel Medical College, Bikaner' },
        { '@type': 'EducationalOrganization', name: 'RNT Medical College' },
        { '@type': 'EducationalOrganization', name: 'SMS Medical College, Jaipur' },
      ],
      // Only genuinely verified same-entity profile URLs go here — see
      // lib/doctor-entity.ts. getDoctorSameAs() returns an empty array
      // until real profile URLs are confirmed and marked verified: true,
      // so `sameAs` is simply omitted (never rendered as an empty array)
      // until then.
      ...(DOCTOR_SAME_AS.length > 0 ? { sameAs: DOCTOR_SAME_AS } : {}),
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE}/#website`,
      url: SITE,
      name: 'Dr. Vijay Kumar Binwal',
      inLanguage: ['hi-IN', 'en-IN'],
      publisher: { '@id': `${SITE}/#organization` },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Hindi is the default — `lang="hi"` so screen readers, search engines, and
  // language detection get it right on first paint. The I18nProvider keeps
  // this in sync if the user explicitly chooses English.
  return (
    <html
      lang="hi"
      data-scroll-behavior="smooth"
      className={`${figtree.variable} ${notoSansDevanagari.variable}`}
    >
      <head>
        {/* Preconnect to the only third-party origin we hit on first paint */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SITE_ENTITY_JSON_LD) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && window.PerformanceObserverEntryList) {
                const p = window.PerformanceObserverEntryList.prototype;
                const patch = (method) => {
                  const orig = p[method];
                  if (orig) {
                    p[method] = function() {
                      const res = orig.apply(this, arguments);
                      return res ? res.filter(Boolean) : res;
                    };
                  }
                };
                patch('getEntries');
                patch('getEntriesByType');
                patch('getEntriesByName');
              }
            `
          }}
        />
      </head>
      <body className="font-body antialiased bg-[#F0F9FF] text-[#0C4A6E]">
        <I18nProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
          <ChatbotLoader />
        </I18nProvider>
        <GoogleAnalytics />
      </body>
    </html>
  )
}
