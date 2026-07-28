import type { Locale } from "../data/quest";

const configuredBase = import.meta.env.BASE_URL.replace(/\/+$/, "");

/** Add the configured deployment base to a site-internal path. */
export function withBase(path: string): string {
  if (/^[a-z][a-z\d+.-]*:/i.test(path) || path.startsWith("//")) return path;

  const normalized = path === "/" ? "/" : `/${path.replace(/^\/+/, "")}`;
  if (!configuredBase) return normalized;
  return normalized === "/" ? `${configuredBase}/` : `${configuredBase}${normalized}`;
}

/** Create a locale route without the deployment base, for metadata and route composition. */
export function localePath(locale: Locale, suffix = "/"): string {
  const cleanSuffix = suffix.replace(/^\/+|\/+$/g, "");
  return cleanSuffix ? `/${locale}/${cleanSuffix}/` : `/${locale}/`;
}
