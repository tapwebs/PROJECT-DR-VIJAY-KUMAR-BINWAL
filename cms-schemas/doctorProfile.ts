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

export const doctorProfile = defineType({
  name: 'doctorProfile',
  title: 'Doctor Profile',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'designation', title: 'Designation', type: 'string' }),
    
    defineField({
      name: 'qualifications',
      title: 'Qualifications',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'degree', title: 'Degree', type: 'string' }),
            defineField({ name: 'institution', title: 'Institution', type: 'string' })
          ]
        }
      ]
    }),

    defineField({
      name: 'memberships',
      title: 'Professional Memberships',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Membership Name', type: 'string' }),
            defineField({ name: 'iconName', title: 'Lucide Icon Name', type: 'string' })
          ]
        }
      ]
    }),

    defineField({ name: 'experience', title: 'Experience', type: 'string' }),
    defineField({ name: 'registrationNumber', title: 'Registration Number', type: 'string' }),
    
    defineField({
      name: 'hospitalAffiliations',
      title: 'Hospital Affiliations',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Hospital Name', type: 'string' }),
            defineField({ name: 'role', title: 'Role', type: 'string' }),
            defineField({ name: 'address', title: 'Address', type: 'string' }),
            defineField({ name: 'hours', title: 'Hours', type: 'string' })
          ]
        }
      ]
    }),

    defineField({
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'iconName', title: 'Lucide Icon Name', type: 'string' }),
            defineField({ name: 'value', title: 'Value', type: 'string' }),
            defineField({ name: 'label', title: 'Label', type: 'string' })
          ]
        }
      ]
    }),

    defineField({ name: 'specializations', title: 'Specializations', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'profileImage', title: 'Profile Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'achievements', title: 'Achievements', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'publications', title: 'Publications', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'awards', title: 'Awards', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'bio', title: 'Bio', type: 'text' })
  ]
})
