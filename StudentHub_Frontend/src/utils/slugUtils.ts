/**
 * Converts a string to a URL-friendly slug
 * @param text - The text to convert to a slug
 * @returns A URL-friendly slug
 */
export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    // Replace spaces and special characters with hyphens
    .replace(/[\s\W-]+/g, '-')
    // Remove leading and trailing hyphens
    .replace(/^-+|-+$/g, '')
    // Ensure it's not empty
    || 'untitled';
}

/**
 * Converts a slug back to a readable title
 * @param slug - The slug to convert back
 * @returns A readable title
 */
export function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Extracts the slug from a news article title
 * @param title - The article title
 * @returns A URL-friendly slug
 */
export function getNewsSlug(title: string): string {
  // Remove common words that might make URLs too long
  const commonWords = ['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by'];
  
  let slug = title
    .toLowerCase()
    .trim()
    // Replace spaces and special characters with hyphens
    .replace(/[\s\W-]+/g, '-')
    // Remove leading and trailing hyphens
    .replace(/^-+|-+$/g, '');
  
  // Optionally remove common words to make URLs shorter
  // Uncomment the lines below if you want shorter URLs
  // const words = slug.split('-');
  // const filteredWords = words.filter(word => !commonWords.includes(word));
  // slug = filteredWords.join('-');
  
  // Ensure it's not empty
  return slug || 'untitled';
}
