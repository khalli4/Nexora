/**
 * Central, typed access to public environment variables.
 * Only NEXT_PUBLIC_* values may be used here: they are exposed to the browser.
 * Never put secrets in the frontend.
 */
const DEFAULT_API_URL = "http://localhost:8000";
const DEFAULT_SITE_URL = "http://localhost:3000";

export const env = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL ?? DEFAULT_API_URL,
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL,
} as const;
