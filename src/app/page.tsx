/**
 * =====================================================================
 * MADE BY TAPWEBS (https://tapwebs.in | https://tapwebs.space)
 * ALL RIGHTS ARE OF TAPWEBS
 * 
 * Co-Owners: TAPWEBS & Dr. Vijay Kumar Binwal
 * Client Website: https://drvijaykumarbinwal.com (also https://drvijaybinwal.com)
 * Agency Website: https://tapwebs.in
 * Portfolio Showcase: https://tapwebs.space
 * =====================================================================
 */

import type { Metadata } from 'next'
import { HeroSection } from '@/frontend/components/sections/HeroSection'
import { TrustBar } from '@/frontend/components/sections/TrustBar'
import { ServicesGrid } from '@/frontend/components/sections/ServicesGrid'
import { AboutDoctorSection } from '@/frontend/components/sections/AboutDoctorSection'
import { KnowYourIllnessPromo } from '@/frontend/components/sections/KnowYourIllnessPromo'
import { BlogHighlights } from '@/frontend/components/sections/BlogHighlights'
import { SEOContentBlock } from '@/frontend/components/sections/SEOContentBlock'
import { FAQSection } from '@/frontend/components/sections/FAQSection'
import { ContactCTASection } from '@/frontend/components/sections/ContactCTASection'

export const metadata: Metadata = {
  title: 'Kidney Specialist Jaipur — Dr. Vijay Kumar Binwal',
  description:
    "Jaipur's trusted nephrologist Dr. Vijay Kumar Binwal offers expert kidney disease treatment, dialysis, transplant consultation and preventive care. Book via WhatsApp.",
  alternates: {
    canonical: 'https://drvijaykumarbinwal.com',
    languages: {
      'hi-IN': 'https://drvijaykumarbinwal.com',
      'en-IN': 'https://drvijaykumarbinwal.com',
      'x-default': 'https://drvijaykumarbinwal.com',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://drvijaykumarbinwal.com',
    title: 'Kidney Specialist Jaipur — Dr. Vijay Kumar Binwal',
    description:
      "Jaipur's trusted nephrologist Dr. Vijay Kumar Binwal offers expert kidney disease treatment, dialysis, transplant consultation and preventive care.",
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Vijay Kumar Binwal — Kidney Specialist Jaipur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kidney Specialist Jaipur — Dr. Vijay Kumar Binwal',
    description:
      "Jaipur's trusted nephrologist Dr. Vijay Kumar Binwal offers expert kidney disease treatment, dialysis, transplant consultation and preventive care.",
    images: ['/images/og-image.jpg'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalOrganization',
      '@id': 'https://drvijaykumarbinwal.com/#organization',
      name: 'Pinkcity Superspeciality Clinic',
      url: 'https://drvijaykumarbinwal.com',
      telephone: `+${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '910000000000'}`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'S36, New Sanganer Road, Near Indian Oil Petrol Pump, Mansarovar Sector 6, Mansarovar',
        addressLocality: 'Jaipur',
        addressRegion: 'Rajasthan',
        postalCode: '302020',
        addressCountry: 'IN',
      },
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '08:00', closes: '20:00' },
      ],
      medicalSpecialty: 'Nephrology',
      logo: 'https://drvijaykumarbinwal.com/images/dr-vijay-kumar-binwal-nephrologist-jaipur-logo.png',
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '248' },
    },
    {
      '@type': 'Physician',
      '@id': 'https://drvijaykumarbinwal.com/#doctor',
      name: 'Dr. Vijay Kumar Binwal',
      jobTitle: 'Senior Transplant & Dialysis Specialist',
      description: 'DM Nephrology specialist with 25+ years of experience in kidney disease treatment, dialysis, and transplant consultation in Jaipur.',
      worksFor: { '@id': 'https://drvijaykumarbinwal.com/#organization' },
      medicalSpecialty: 'Nephrology',
      alumniOf: [
        { '@type': 'EducationalOrganization', name: 'Sardar Patel Medical College, Bikaner' },
        { '@type': 'EducationalOrganization', name: 'RNT Medical College (Rabindranath Tagore Medical College)' },
        { '@type': 'EducationalOrganization', name: 'SMS Medical College, Jaipur' },
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://drvijaykumarbinwal.com/#localbusiness',
      name: 'Pinkcity Superspeciality Clinic — Dr. Vijay Kumar Binwal',
      image: 'https://drvijaykumarbinwal.com/images/doctor-profile.jpg',
      telephone: `+${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '910000000000'}`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'S36, New Sanganer Road, Near Indian Oil Petrol Pump, Mansarovar Sector 6, Mansarovar',
        addressLocality: 'Jaipur',
        addressRegion: 'Rajasthan',
        postalCode: '302020',
        addressCountry: 'IN',
      },
      geo: { '@type': 'GeoCoordinates', latitude: '26.9124', longitude: '75.7873' },
      priceRange: '₹₹',
    },
  ],
}

import { sanityFetch } from '@/frontend/lib/sanity'
import { ALL_FAQS_QUERY, ALL_POSTS_QUERY } from '@/frontend/lib/queries'

import { FAQ } from '@/frontend/shared/types'

export default async function HomePage() {
  const allFaqs = await sanityFetch<(FAQ & { faqScope?: string })[]>(ALL_FAQS_QUERY, {}, '/')
  const faqs = allFaqs.filter((f) => f.faqScope === 'homepage' || f.faqScope === 'general' || !f.faqScope)
  const recentBlogs = await sanityFetch<any[]>(ALL_POSTS_QUERY, {}, '/homepage-blogs').then(posts => posts.slice(0, 3))

  const faqJsonLd = faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.slice(0, 8).map((f) => ({
      '@type': 'Question',
      name: f.questionEn || f.questionHi,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answerEn || f.answerHi,
      },
    })),
  } : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. Services */}
      <ServicesGrid />

      {/* 4. About Doctor */}
      <AboutDoctorSection />

      {/* 5. Know Your Illness Promo */}
      <KnowYourIllnessPromo />

      {/* 6. Blog Highlights */}
      <BlogHighlights recentBlogs={recentBlogs} />

      {/* 7. SEO Content Block */}
      <SEOContentBlock />

      {/* 8. FAQ */}
      <FAQSection faqs={faqs} />

      {/* 9. Contact + CTA */}
      <ContactCTASection />
    </>
  )
}
