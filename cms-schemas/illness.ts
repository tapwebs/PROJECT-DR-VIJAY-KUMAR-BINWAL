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

import { defineField, defineType } from 'sanity'
import { Activity } from 'lucide-react'

export default defineType({
  name: 'illness',
  title: 'Illness',
  type: 'document',
  icon: Activity,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'titleHi',
      title: 'Title (Hindi)',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'badge',
      title: 'Badge (e.g. Most Common)',
      type: 'string',
    }),
    defineField({
      name: 'badgeHi',
      title: 'Badge (Hindi)',
      type: 'string',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      description: 'Appears on the landing page cards',
    }),
    defineField({
      name: 'shortDescriptionHi',
      title: 'Short Description (Hindi)',
      type: 'text',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      description: 'Used on the landing page cards. Can be the same as Hero Image.',
      options: { hotspot: true },
    }),
    defineField({
      name: 'icon',
      title: 'Icon (Lucide name)',
      type: 'string',
      description: 'e.g. Activity, Droplets, Heart',
    }),
    defineField({
      name: 'gradient',
      title: 'Gradient Classes',
      type: 'string',
      description: 'e.g. from-[#0369A1] to-[#0EA5E9]',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'contentBlocks',
      title: 'Content Blocks',
      type: 'array',
      of: [
        { type: 'richTextBlock' },
        { type: 'imageBlock' },
        { type: 'faqBlock' },
        { type: 'cardGridBlock' },
        { type: 'bulletListBlock' },
        { type: 'progressListBlock' },
        { type: 'warningBoxBlock' },
      ],
    }),
    defineField({
      name: 'relatedIllnesses',
      title: 'Related Illnesses',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'illness' }] }],
    }),
    defineField({
      name: 'relatedServices',
      title: 'Related Services',
      description: 'Which of Dr. Binwal\'s services treat this condition? Shown as "Treatment options" on the illness page, and used to reverse-link this illness from the matching service page(s).',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'speciality' }] }],
    }),
    defineField({
      name: 'relatedArticles',
      title: 'Related Blog Articles',
      description: 'Which blog posts discuss this condition in depth? Shown as "Related Articles" on the illness page, and used to reverse-link this illness from the matching post(s).',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'post' }] }],
    }),
    defineField({
      name: 'medicalSources',
      title: 'Medical Sources / Citations',
      description: 'Authoritative sources cited for this content (KDIGO, National Kidney Foundation, WHO, ICMR, peer-reviewed literature, etc.) — supports medical E-E-A-T. Add a citation only when the source genuinely supports a specific claim on this page; target roughly 2-5 strong sources per substantial illness page, not 10-20 for SEO volume.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'sourceName', title: 'Source Name', type: 'string', description: 'e.g. KDIGO, National Kidney Foundation, WHO, ICMR' }),
            defineField({
              name: 'sourceType',
              title: 'Source Type',
              type: 'string',
              description: 'Helps distinguish guideline-level authority from a single research paper.',
              options: {
                list: [
                  { title: 'Guideline', value: 'guideline' },
                  { title: 'Government', value: 'government' },
                  { title: 'Medical Organization', value: 'medical-organization' },
                  { title: 'Peer-Reviewed Research', value: 'peer-reviewed-research' },
                  { title: 'Professional Society', value: 'professional-society' },
                  { title: 'Patient Education', value: 'patient-education' },
                ],
              },
            }),
            defineField({ name: 'sourceUrl', title: 'Source URL', type: 'url' }),
            defineField({ name: 'title', title: 'Publication / Guideline Title', type: 'string' }),
            defineField({ name: 'publicationDate', title: 'Publication Date', type: 'date' }),
            defineField({
              name: 'authors',
              title: 'Authors (optional)',
              type: 'string',
              description: 'Only for peer-reviewed research citations, e.g. "Smith J, et al."',
            }),
          ],
          preview: {
            select: { title: 'sourceName', subtitle: 'title' },
          },
        },
      ],
    }),
    defineField({
      name: 'reviewedBy',
      title: 'Medically Reviewed By',
      type: 'string',
      description: 'Defaults to Dr. Vijay Kumar Binwal if left blank.',
      initialValue: 'Dr. Vijay Kumar Binwal',
    }),
    defineField({
      name: 'reviewedDate',
      title: 'Last Medically Reviewed',
      type: 'date',
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail',
    },
  },
})
