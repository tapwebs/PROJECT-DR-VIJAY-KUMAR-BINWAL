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

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!apiKey || !placeId) {
    return NextResponse.json(
      { error: 'Not configured' },
      { status: 500 }
    )
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`
    const response = await fetch(url)
    const data = await response.json()
    
    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
      },
    })
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch' },
      { status: 500 }
    )
  }
}
