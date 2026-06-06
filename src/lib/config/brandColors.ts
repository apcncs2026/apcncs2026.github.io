// Brand colours for the generated PDFs. jsPDF needs numeric RGB (it can't read CSS
// variables), and the PDFs are generated at build time in Node where no DOM exists —
// so these live here as plain constants rather than being read from CSS at runtime.
//
// These mirror the colours the WEBSITE actually renders: the DaisyUI v5 "light" theme
// (converted from its oklch() values to sRGB). Note that the --p/--s/--a overrides in
// src/app.css are DaisyUI v4 syntax and are ignored by v5, so the site falls back to
// these defaults — the booklet is matched to them so print and web stay consistent.
// To recolour, change these values (and define a real DaisyUI v5 theme if you also
// want the website to change).

export type RGB = [number, number, number];

export const PRIMARY: RGB = [66, 42, 213]; // #422ad5 blue-purple — DaisyUI primary (invited sessions / lectures)
export const SECONDARY: RGB = [244, 48, 152]; // #f43098 pink      — DaisyUI secondary (parallel sessions)
export const ACCENT: RGB = [0, 211, 187]; // #00d3bb teal          — DaisyUI accent
