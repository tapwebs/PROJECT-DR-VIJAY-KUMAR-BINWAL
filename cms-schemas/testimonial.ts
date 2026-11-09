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

import { defineType, defineField } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'patientName', title: 'Patient Name', type: 'string' }),
    defineField({ name: 'review', title: 'Review', type: 'text' }),
    defineField({ name: 'rating', title: 'Rating', type: 'number', validation: Rule => Rule.min(1).max(5) }),
    defineField({ name: 'image', title: 'Image', type: 'image' }),
    defineField({ name: 'videoUrl', title: 'Video URL', type: 'url' }),
    defineField({ name: 'googleReviewLink', title: 'Google Review Link', type: 'url' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean', initialValue: false })
  ]
})
