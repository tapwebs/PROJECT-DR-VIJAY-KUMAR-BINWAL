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

import { groq } from 'next-sanity'

export const ALL_POSTS_QUERY = groq`
  *[_type == "post"] | order(publishedAt desc) {
    title,
    titleHi,
    "slug": slug.current,
    "categories": categories[]->{ _id, title, titleHi },
    excerpt,
    excerptHi,
    publishedAt,
    readingTime,
    "image": mainImage.asset->url,
    featured,
    seo,
    seoHi
  }
`

export const POST_BY_SLUG_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    title,
    titleHi,
    "slug": slug.current,
    "categories": categories[]->{ _id, title, titleHi },
    excerpt,
    excerptHi,
    publishedAt,
    readingTime,
    "image": mainImage.asset->url,
    featured,
    body,
    bodyHi,
    faqs,
    seo,
    seoHi,
    relatedIllnesses[]->{
      title,
      titleHi,
      shortDescription,
      shortDescriptionHi,
      "slug": slug.current
    }
  }
`

export const ALL_SERVICES_QUERY = groq`
  *[_type == "speciality"] | order(_createdAt asc) {
    title,
    titleHi,
    "slug": slug.current,
    shortDescription,
    shortDescriptionHi,
    iconName,
    iconNameHi,
    "iconImage": iconImage.asset->url
  }
`

export const SERVICE_BY_SLUG_QUERY = groq`
  *[_type == "speciality" && slug.current == $slug][0] {
    title,
    titleHi,
    "slug": slug.current,
    shortDescription,
    shortDescriptionHi,
    fullDescription,
    fullDescriptionHi,
    benefits,
    benefitsHi,
    treatmentProcess,
    treatmentProcessHi,
    faqs,
    seo,
    seoHi,
    ctaTitle,
    ctaTitleHi,
    ctaDescription,
    ctaDescriptionHi,
    relatedIllnesses[]->{
      title,
      titleHi,
      shortDescription,
      shortDescriptionHi,
      "slug": slug.current
    }
  }
`

// Illness / Know Your Illness — added for sitemap + service cross-linking.
// (The illness detail page itself still uses its own inline GROQ for the
// content-block projection; this query is for lightweight listings.)
export const ALL_ILLNESSES_QUERY = groq`
  *[_type == "illness"] | order(displayOrder asc) {
    title,
    titleHi,
    "slug": slug.current,
    shortDescription,
    shortDescriptionHi,
    "updatedAt": _updatedAt
  }
`

// Fallback for when a post has no authored `relatedPosts` — same category,
// most recent 3. Used by RELATED_POSTS_QUERY below when the authored list
// is empty, rather than as the only related-content mechanism.
export const RELATED_POSTS_QUERY = groq`
  *[_type == "post" && $categoryId in categories[]._ref && slug.current != $slug] | order(publishedAt desc)[0...3] {
    title,
    titleHi,
    "slug": slug.current,
    "categories": categories[]->{ _id, title, titleHi },
    "image": mainImage.asset->url,
    publishedAt,
    readingTime
  }
`

// Prefer the editor-authored `relatedPosts[]` reference array (a genuine
// semantic relationship — e.g. "CKD symptoms" -> "CKD stages" -> "CKD diet")
// over the blind same-category/latest-3 fallback. Called once per post; the
// page falls back to RELATED_POSTS_QUERY only when this returns empty.
export const RELATED_POSTS_AUTHORED_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    "related": relatedPosts[]-> {
      title,
      titleHi,
      "slug": slug.current,
      "categories": categories[]->{ _id, title, titleHi },
      "image": mainImage.asset->url,
      publishedAt,
      readingTime
    }
  }.related
`

export const ALL_FAQS_QUERY = groq`
  *[_type == "faq"] | order(_createdAt asc) {
    _id,
    "questionEn": question.en,
    "answerEn": answer.en,
    "questionHi": question.hi,
    "answerHi": answer.hi,
    "category": category->slug.current,
    faqScope
  }
`

export const ALL_GALLERY_CATEGORIES_QUERY = groq`
  *[_type == "galleryCategory"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    description
  }
`

export const ALL_GALLERY_ITEMS_QUERY = groq`
  *[_type == "gallery"] | order(order asc) {
    _id,
    title,
    "category": category->slug.current,
    imageType,
    "src": image.asset->url,
    "alt": image.alt,
    videoUrl,
    featured
  }
`

export const ALL_BLOG_CATEGORIES_QUERY = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    titleHi,
    description
  }
`
