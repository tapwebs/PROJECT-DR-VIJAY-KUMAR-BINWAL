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

import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your_project_id'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // false if you want to ensure fresh data always
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

/**
 * Server-side fetch wrapper with 5000ms timeout and detailed execution logging.
 * Prevents 504 Gateway Timeouts caused by hanging Sanity requests.
 */
export async function sanityFetch<T>(query: string, params: any = {}, route: string = 'Unknown'): Promise<T> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    console.error(`[SSR FETCH FAILED] Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable in production!`);
  }

  // Extract a readable query name (e.g. the first line of the GROQ query)
  const queryName = query.trim().split('\n')[0].substring(0, 40) + '...';
  
  console.log(`[SSR FETCH START] ${queryName} on route: ${route}`);
  const startTime = Date.now();

  try {
    const fetchPromise = client.fetch<T>(query, params);
    
    // Create a strict 5000ms timeout promise
    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => {
        reject(new Error(`[SSR FETCH TIMEOUT] Query hung for 5000ms: ${queryName} on route ${route}`));
      }, 5000);
    });

    const result = await Promise.race([fetchPromise, timeoutPromise]);
    
    const duration = Date.now() - startTime;
    console.log(`[SSR FETCH SUCCESS] ${queryName} (${duration}ms)`);
    return result;
  } catch (error: any) {
    const duration = Date.now() - startTime;
    console.error(`[SSR FETCH FAILED] ${queryName} on route ${route} (${duration}ms)`);
    console.error(error);
    throw error;
  }
}
