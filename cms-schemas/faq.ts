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

export const faq = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
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
    }),
    defineField({ name: 'category', title: 'Category', type: 'reference', to: [{ type: 'faqCategory' }] }),
    defineField({
      name: 'faqScope',
      title: 'FAQ Scope',
      type: 'string',
      options: {
        list: [
          { title: 'Homepage', value: 'homepage' },
          { title: 'Service', value: 'service' },
          { title: 'Treatment', value: 'treatment' },
          { title: 'General', value: 'general' }
        ],
        layout: 'dropdown'
      },
      initialValue: 'general'
    })
  ],
  preview: {
    select: {
      title: 'question.en',
      subtitle: 'category.title'
    }
  }
})
