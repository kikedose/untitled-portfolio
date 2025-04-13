import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class names or conditional class names into a single string,
 * merging and deduplicating Tailwind classes using twMerge.
 *
 * @param {...ClassValue[]} inputs - Class names to be combined. Can include strings,
 *                                   objects with class names as keys and booleans as values,
 *                                   or arrays of class names.
 * @returns {string} A string of combined and deduplicated class names.
 */

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

/**
 * Parses the Accept-Language header string and returns a sorted list
 * of language tags based on their quality values (q-factor).
 *
 * @param {string | null | undefined} headerValue The value of the Accept-Language header.
 * @returns {string[]} A sorted array of language tags, highest preference first.
 */
export const parseAcceptLanguage = (
  headerValue: string | null | undefined
): string[] => {
  if (!headerValue) {
    return [];
  }

  // Define an interface for clarity
  interface LanguagePreference {
    tag: string;
    quality: number;
  }

  const languages: LanguagePreference[] = headerValue
    .split(',')
    .map((langEntry): LanguagePreference | null => {
      // Map potentially to null for invalid entries if needed (though currently filtering implicitly)
      const parts = langEntry.trim().split(';q=');
      const tag = parts[0]?.trim(); // Use optional chaining for safety

      // Ensure tag exists before proceeding
      if (!tag) {
        return null; // Skip invalid entries
      }

      // Default quality is 1 if not specified or parsing fails
      let quality = 1.0;
      if (parts[1]) {
        const parsedQuality = parseFloat(parts[1]);
        // Ensure quality is a valid number between 0 and 1
        quality =
          !isNaN(parsedQuality) && parsedQuality >= 0 && parsedQuality <= 1
            ? parsedQuality
            : 1.0; // Default to 1.0 if invalid q value
      }
      return { tag, quality };
    })
    .filter((lang): lang is LanguagePreference => lang !== null); // Filter out any null entries from invalid parts

  // Sort languages by quality in descending order
  languages.sort((a, b) => b.quality - a.quality);

  // Return just the tags in order of preference
  return languages.map((lang) => lang.tag);
};

/**
 * Finds the best matching locale from the supported locales based on
 * the user's preferred languages.
 *
 * Implements a simple matching strategy:
 * 1. Check for an exact match.
 * 2. Check if the base language (e.g., 'en' from 'en-US') matches a supported locale's base language.
 * 3. Check if the base language itself is directly supported.
 *
 * @param {string[]} preferredLanguages Sorted list of preferred language tags (from parseAcceptLanguage).
 * @param {string[]} supportedLocales List of locales your application supports.
 * @param {string} defaultLocale The default locale to return if no match is found.
 * @returns {string} The best matching supported locale or the default locale.
 */
export function findBestMatch(
  preferredLanguages: string[],
  supportedLocales: string[],
  defaultLocale: string
): string {
  // Use Set for efficient lookups (O(1) average time complexity)
  const supportedLocalesSet = new Set<string>(supportedLocales);

  for (const preferredLang of preferredLanguages) {
    // 1. Check for exact match (case-sensitive based on input)
    // BCP 47 tags are case-insensitive, but exact matching might be desired sometimes.
    // For case-insensitive exact match, convert both preferredLang and items in supportedLocalesSet to lower/upper case.
    if (supportedLocalesSet.has(preferredLang)) {
      return preferredLang;
    }

    // 2. Check for base language match
    // Extract base language (e.g., 'en' from 'en-US', 'fr' from 'fr-FR')
    // Language tags are generally case-insensitive, so normalize to lower case.
    const basePreferredLang = preferredLang.split('-')[0]?.toLowerCase();

    if (basePreferredLang) {
      // Check if any supported locale has the same base language
      for (const supportedLocale of supportedLocales) {
        const baseSupportedLocale = supportedLocale
          .split('-')[0]
          ?.toLowerCase();
        if (basePreferredLang === baseSupportedLocale) {
          // Return the *supported* locale that matches the base language
          return supportedLocale;
        }
      }

      // 3. Check if the base language itself is directly supported (e.g., 'en' is preferred and 'en' is supported)
      if (supportedLocalesSet.has(basePreferredLang)) {
        return basePreferredLang;
      }
    }
  }

  // If no match found after checking all preferences, return default
  return defaultLocale;
}
