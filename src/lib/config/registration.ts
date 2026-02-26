/**
 * Registration pricing constants (mirror of backend, for display only).
 * The backend always recalculates server-side — these are only for the form UI.
 */

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8787';

export const CURRENCY = 'SGD';

export const CATEGORIES = [
	{ value: 'student', label: 'PhD/UG Student' },
	{ value: 'postdoc', label: 'Postdoc' },
	{ value: 'academic', label: 'Academic' },
	{ value: 'industry', label: 'Government & Industry' }
] as const;

export const CATERING_OPTIONS = [
	{ value: 'no_preference', label: 'No Preference' },
	{ value: 'vegetarian', label: 'Vegetarian' },
	{ value: 'vegan', label: 'Vegan' },
	{ value: 'halal', label: 'Halal' },
	{ value: 'kosher', label: 'Kosher' },
	{ value: 'gluten_free', label: 'Gluten-Free' },
	{ value: 'other', label: 'Other' }
] as const;

/** Base fees in cents, keyed by category then tier */
export const BASE_FEES: Record<string, Record<string, number>> = {
	student: { early_bird: 15000, regular: 20000, on_site: 30000 },
	postdoc: { early_bird: 20000, regular: 30000, on_site: 50000 },
	academic: { early_bird: 30000, regular: 50000, on_site: 80000 },
	industry: { early_bird: 50000, regular: 70000, on_site: 100000 }
};

export const ADDON_SUMMER_SCHOOL = 5000; // S$50
export const ADDON_CONFERENCE_DINNER = 5000; // S$50
export const ADDON_HALL_PER_NIGHT = 8000; // S$80
export const MAX_HALL_NIGHTS = 5;

/** Determine current tier from today's date (for display estimate only). */
export function getCurrentTier(): string {
	const today = new Date();
	const earlyBirdEnd = new Date('2026-04-30');
	const regularEnd = new Date('2026-05-31');

	if (today <= earlyBirdEnd) return 'early_bird';
	if (today <= regularEnd) return 'regular';
	return 'on_site';
}

/** Format cents as SGD display string. */
export function formatPrice(cents: number): string {
	return `S$${(cents / 100).toFixed(0)}`;
}
