'use client'

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

import { memo, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ChevronRight } from 'lucide-react'
import { useI18n } from '@/frontend/lib/i18n/I18nProvider'
import { getLocalized } from '@/frontend/lib/i18n/localize'

function BlogHighlightsComponent({ recentBlogs }: { recentBlogs: any[] }) {
  const { t, locale } = useI18n()
  const isHi = locale === 'hi'

  const dateFormatter = useMemo(
    () =>
      new Intl.DateTimeFormat(locale === 'hi' ? 'hi-IN' : 'en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
    [locale]
  )

  return (
    <section className="py-16 md:py-24 bg-white" aria-labelledby="blog-heading">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-sm font-heading font-600 text-[#0369A1] uppercase tracking-widest mb-2">
              {t('blog.eyebrow')}
            </p>
            <h2
              id="blog-heading"
              className="font-heading font-700 text-3xl md:text-4xl text-[#0C4A6E]"
            >
              {t('blog.title')}
            </h2>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-1.5 text-[#0369A1] font-heading font-600 hover:gap-2.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1] rounded-lg"
          >
            {t('blog.viewAll')} <ChevronRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentBlogs.map((blog) => {
            const title = getLocalized(blog.title || blog.h1, blog.titleHi, locale)
            const excerpt = getLocalized(blog.excerpt, blog.excerptHi, locale)
            const hasCategory = blog.categories && blog.categories.length > 0
            const categoryName = hasCategory ? getLocalized(blog.categories[0].title, blog.categories[0].titleHi, locale) : (isHi ? 'विशेष' : 'Featured')
            const dateStr = blog.publishedAt || blog.date || ''

            return (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="group bg-[#F8FBFF] rounded-2xl border border-[#E0F2FE] overflow-hidden hover:border-[#0369A1] hover:shadow-[0_12px_40px_rgba(3,105,161,0.1)] transition-[border,box-shadow] duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1]"
              >
                <div className="relative h-44 bg-gradient-to-br from-[#F0F9FF] to-[#E0F2FE] overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={title}
                    fill
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-[#0369A1] text-xs font-heading font-600 px-2.5 py-1 rounded-lg">
                      {categoryName}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-600 text-[#0C4A6E] text-base leading-snug mb-2 group-hover:text-[#0369A1] transition-colors duration-200 line-clamp-2">
                    {title}
                  </h3>
                  <p className="text-[#475569] text-sm leading-relaxed line-clamp-2 mb-4">
                    {excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs text-[#475569]">
                      <Calendar size={12} aria-hidden="true" />
                      {dateStr ? dateFormatter.format(new Date(dateStr)) : ''}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-heading font-600 text-[#0369A1] group-hover:gap-1.5 transition-all duration-200">
                      {t('common.readMore')} <ChevronRight size={12} aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export const BlogHighlights = memo(BlogHighlightsComponent)
