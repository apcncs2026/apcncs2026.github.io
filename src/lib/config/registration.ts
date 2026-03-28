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
	{ value: 'halal', label: 'Halal' },
	{ value: 'allergy', label: 'Allergy' },
	{ value: 'other', label: 'Other' }
] as const;

/** Base fees in cents, keyed by category then tier */
export const BASE_FEES: Record<string, Record<string, number>> = {
	student: { early_bird: 15000, regular: 20000, on_site: 30000 },
	postdoc: { early_bird: 20000, regular: 30000, on_site: 50000 },
	academic: { early_bird: 30000, regular: 50000, on_site: 80000 },
	industry: { early_bird: 50000, regular: 70000, on_site: 100000 }
};

export const ADDON_SUMMER_SCHOOL = 5000; // SGD$50
export const ADDON_CONFERENCE_DINNER = 5000; // SGD$50

export const ROOM_TYPES = [
	{ value: 'none', label: 'No accommodation needed', price: '', dailyCents: 0 },
	{ value: 'single_no_aircon', label: 'Single (Non-Aircon)', price: 'SGD$60/day', dailyCents: 6000 },
	{ value: 'single_aircon', label: 'Single (Aircon)', price: 'SGD$75/day', dailyCents: 7500 },
	{ value: 'twin_no_aircon', label: 'Twin Sharing (Non-Aircon)', price: 'SGD$40/day', dailyCents: 4000 },
	{ value: 'twin_aircon', label: 'Twin Sharing (Aircon)', price: 'SGD$55/day', dailyCents: 5500 }
] as const;

/** Calculate number of nights between two date strings (YYYY-MM-DD). */
export function calculateNights(arrival: string, departure: string): number {
	if (!arrival || !departure) return 0;
	const a = new Date(arrival);
	const d = new Date(departure);
	const diff = Math.round((d.getTime() - a.getTime()) / (1000 * 60 * 60 * 24));
	return Math.max(0, diff);
}

export const GENDER_OPTIONS = [
	{ value: 'male', label: 'Male' },
	{ value: 'female', label: 'Female' }
] as const;

/** Determine current tier from today's date (for display estimate only). */
export function getCurrentTier(): string {
	// Use Singapore time (UTC+8) for tier calculation
	const now = new Date();
	const sgtString = now.toLocaleDateString('en-CA', { timeZone: 'Asia/Singapore' });
	const today = new Date(sgtString);

	const earlyBirdEnd = new Date('2026-04-30');
	const regularEnd = new Date('2026-05-31');

	if (today <= earlyBirdEnd) return 'early_bird';
	if (today <= regularEnd) return 'regular';
	return 'on_site';
}

/** Format cents as SGD display string. */
export function formatPrice(cents: number): string {
	return `SGD$${(cents / 100).toFixed(0)}`;
}
