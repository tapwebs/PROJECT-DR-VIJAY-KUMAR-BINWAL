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

import { defineType, defineField } from 'sanity'

export const speciality = defineType({
  name: 'speciality',
  title: 'Speciality / Service',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'titleHi', title: 'Title (Hindi)', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'iconName', title: 'Lucide Icon Name', type: 'string', description: 'e.g., Activity, Droplets, Heart' }),
    defineField({ name: 'iconNameHi', title: 'Lucide Icon Name (Hindi)', type: 'string' }),
    defineField({ name: 'gradient', title: 'Background Gradient', type: 'string', description: 'e.g., from-[#0369A1] to-[#0EA5E9]' }),
    defineField({ name: 'gradientHi', title: 'Background Gradient (Hindi)', type: 'string' }),
    defineField({ name: 'heroImage', title: 'Hero Background Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'shortDescription', title: 'Short Description', type: 'text' }),
    defineField({ name: 'shortDescriptionHi', title: 'Short Description (Hindi)', type: 'text' }),
    defineField({ 
      name: 'fullDescription', 
      title: 'Full Description', 
      type: 'array', 
      of: [{ type: 'block' }] 
    }),
    defineField({ 
      name: 'fullDescriptionHi', 
      title: 'Full Description (Hindi)', 
      type: 'array', 
      of: [{ type: 'block' }] 
    }),
    defineField({ 
      name: 'benefits', 
      title: 'Benefits / Details', 
      type: 'array', 
      of: [{ type: 'string' }] 
    }),
    defineField({ 
      name: 'benefitsHi', 
      title: 'Benefits / Details (Hindi)', 
      type: 'array', 
      of: [{ type: 'string' }] 
    }),
    defineField({ 
      name: 'treatmentProcess', 
      title: 'Treatment Process', 
      type: 'array', 
      of: [{ type: 'string' }] 
    }),
    defineField({ 
      name: 'treatmentProcessHi', 
      title: 'Treatment Process (Hindi)', 
      type: 'array', 
      of: [{ type: 'string' }] 
    }),
    defineField({
      name: 'faqs',
      title: 'Service FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'object',
              fields: [
                defineField({ name: 'en', title: 'English', type: 'string' }),
                defineField({ name: 'hi', title: 'Hindi', type: 'string' })
              ]
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'object',
              fields: [
                defineField({ name: 'en', title: 'English', type: 'text' }),
                defineField({ name: 'hi', title: 'Hindi', type: 'text' })
              ]
            })
          ]
        }
      ]
    }),
    defineField({
      name: 'relatedIllnesses',
      title: 'Conditions Treated',
      description: 'Which illnesses/conditions does this service treat? Shown as "Conditions we treat" on the service page, and read in reverse to link from the matching illness page(s).',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'illness' }] }],
    }),
    defineField({ name: 'ctaTitle', title: 'CTA Title', type: 'string' }),
    defineField({ name: 'ctaTitleHi', title: 'CTA Title (Hindi)', type: 'string' }),
    defineField({ name: 'ctaDescription', title: 'CTA Description', type: 'text' }),
    defineField({ name: 'ctaDescriptionHi', title: 'CTA Description (Hindi)', type: 'text' }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
    defineField({ name: 'seoHi', title: 'SEO (Hindi)', type: 'seo' })
  ]
})
