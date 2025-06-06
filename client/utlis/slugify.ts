// utils/slugify.ts

/**
 * Converts a given title into a URL-friendly slug.
 * Example: "Minimalist UI Design" → "minimalist-ui-design"
 *
 * @param title - The blog title or string to slugify
 * @returns A URL-friendly slug
 */
export const generateSlug = (title: string): string =>
  title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "") // Remove invalid characters
    .replace(/\s+/g, "-") // Replace whitespace with hyphens
    .replace(/-+/g, "-"); // Collapse multiple hyphens
