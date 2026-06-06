import { jsPDF } from 'jspdf';
import QRCode from 'qrcode';
import { PRIMARY, SECONDARY, type RGB } from '$lib/config/brandColors';
import {
	dayDetails,
	abstractUrl,
	type AbstractRef,
	type DayDetail,
	type Talk
} from '$lib/data/programmeDetail';

// Full "programme details" booklet — a flowing, paginated A5 document that mirrors
// the /programme/<day> detail pages (DayProgrammeView.svelte). Distinct from the
// at-a-glance grid in programmePdf.ts. Each talk that has a downloadable abstract
// gets a small QR code linking to the hosted file, so the booklet stays printable
// while abstracts (binary .docx/.pdf) remain online.

// PRIMARY (invited sessions / lectures) and SECONDARY (parallel sessions) come from
// src/lib/config/brandColors.ts — edit there to recolour. Neutrals stay local.
const INK: RGB = [31, 41, 55]; // base-content (gray-800)
const MUTED: RGB = [107, 114, 128]; // gray-500
const FAINT: RGB = [156, 163, 175]; // gray-400
const LINE: RGB = [209, 213, 219]; // gray-300
const BLOCK_BG: RGB = [243, 244, 246]; // base-200 (gray-100)
const WHITE: RGB = [255, 255, 255];

// A5 portrait, in mm.
const PAGE_W = 148;
const PAGE_H = 210;
const MARGIN = 10;
const CONTENT_X = MARGIN;
const CONTENT_W = PAGE_W - MARGIN * 2;
const TOP = MARGIN;
const BOTTOM = PAGE_H - 9; // leave room for the footer

const QR_SIZE = 13; // mm

// Printed QR codes must resolve to the live site, so we hardcode the production
// origin — that way the booklet is correct even when generated from localhost or a
// preview build. This is the GitHub Pages site origin (where static/abstract/* is
// served); it is NOT the registration backend (VITE_API_BASE_URL). Update only if
// the site moves to a custom domain. Set to '' to fall back to window.location.origin.
const SITE_BASE_URL = 'https://apcncs2026.github.io';

function siteOrigin(): string {
	if (SITE_BASE_URL) return SITE_BASE_URL.replace(/\/+$/, '');
	if (typeof window !== 'undefined') return window.location.origin;
	return '';
}

// pt -> mm, and a comfortable line height for a given point size.
const ptToMm = (pt: number) => pt * 0.352777;
const lh = (size: number) => ptToMm(size) * 1.18;

// ==================== QR pre-generation ====================
// jsPDF draws synchronously but QR generation is async, so build every data URL
// up front, then render in one synchronous pass.

function collectAbstractRefs(): AbstractRef[] {
	const refs: AbstractRef[] = [];
	for (const day of dayDetails) {
		for (const item of day.items) {
			if (item.kind === 'invited') {
				for (const t of item.talks) if (t.abstract) refs.push(t.abstract);
			} else if (item.kind === 'parallel') {
				for (const tr of item.tracks) for (const t of tr.talks) if (t.abstract) refs.push(t.abstract);
			} else if (item.kind === 'lecture') {
				if (item.abstract) refs.push(item.abstract);
			}
		}
	}
	return refs;
}

async function buildQrMap(origin: string): Promise<Map<string, string>> {
	const map = new Map<string, string>();
	const urls = new Set(collectAbstractRefs().map((ref) => origin + abstractUrl(ref)));
	await Promise.all(
		[...urls].map(async (url) => {
			map.set(url, await QRCode.toDataURL(url, { margin: 0, width: 160, errorCorrectionLevel: 'M' }));
		})
	);
	return map;
}

// ==================== Renderer ====================

interface Seg {
	txt: string;
	font: 'normal' | 'bold' | 'italic';
	size: number;
	color: RGB;
	gap: number; // extra mm after this segment
}

export async function buildProgrammeBookletDoc(): Promise<jsPDF> {
	const origin = siteOrigin();
	const qrMap = await buildQrMap(origin);
	const coverQr = await QRCode.toDataURL(origin + '/programme', {
		margin: 0,
		width: 200,
		errorCorrectionLevel: 'M'
	});

	// compress: deflate content/image streams — without it the ~75 QR PNGs balloon
	// the file to several MB (jsPDF stores bitmaps uncompressed otherwise).
	const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a5', compress: true });
	let y = TOP;

	// When a session card spills onto a new page, redraw a small "(cont.)" header
	// so a stranded talk still has context.
	let continuation: (() => void) | null = null;

	const newPage = () => {
		doc.addPage();
		y = TOP;
		if (continuation) continuation();
	};
	const ensure = (h: number) => {
		if (y + h > BOTTOM) newPage();
	};

	// ---- generic text block with optional left stripe and right-hand QR ----
	function drawSegBlock(segs: Seg[], accent: RGB, stripe: boolean, qrUrl?: string) {
		const qr = qrUrl ? qrMap.get(qrUrl) : undefined;
		const padL = stripe ? 4 : 2;
		const textX = CONTENT_X + padL;
		const textRight = CONTENT_X + CONTENT_W - 1 - (qr ? QR_SIZE + 2 : 0);
		const textW = textRight - textX;

		// Measure (wrapping depends on the active font size).
		const wrapped: { lines: string[]; size: number; font: Seg['font']; color: RGB; gap: number }[] = [];
		let textH = 0;
		for (const s of segs) {
			doc.setFont('helvetica', s.font);
			doc.setFontSize(s.size);
			const lines = doc.splitTextToSize(s.txt, textW) as string[];
			wrapped.push({ lines, size: s.size, font: s.font, color: s.color, gap: s.gap });
			textH += lines.length * lh(s.size) + s.gap;
		}
		const qrH = qr ? QR_SIZE + 2.5 : 0;
		const blockH = Math.max(textH, qrH) + 3;

		ensure(blockH);
		const top = y;

		if (stripe) {
			doc.setFillColor(...accent);
			doc.rect(CONTENT_X + 1, top + 0.5, 1.2, blockH - 1, 'F');
		}

		let ty = top + ptToMm(wrapped[0]?.size ?? 8) + 1;
		for (const w of wrapped) {
			doc.setFont('helvetica', w.font);
			doc.setFontSize(w.size);
			doc.setTextColor(...w.color);
			for (const ln of w.lines) {
				doc.text(ln, textX, ty);
				ty += lh(w.size);
			}
			ty += w.gap;
		}

		if (qr) {
			const qx = CONTENT_X + CONTENT_W - QR_SIZE - 1;
			doc.addImage(qr, 'PNG', qx, top + 1, QR_SIZE, QR_SIZE);
			doc.setFont('helvetica', 'normal');
			doc.setFontSize(5);
			doc.setTextColor(...MUTED);
			doc.text('Abstract', qx + QR_SIZE / 2, top + 1 + QR_SIZE + 2, { align: 'center' });
		}

		y = top + blockH;
	}

	// ---- talk (invited list item or parallel-track list item) ----
	function drawTalk(t: Talk, opts: { stripe: boolean; accent: RGB }) {
		const segs: Seg[] = [{ txt: t.time, font: 'normal', size: 6.5, color: MUTED, gap: 0.6 }];
		const header = t.prefix ? t.prefix + (t.panelTitle ? `: ${t.panelTitle}` : '') : (t.panelTitle ?? '');
		if (header) segs.push({ txt: header, font: 'bold', size: 7.5, color: opts.accent, gap: 0.6 });

		if (t.panelists) {
			for (const p of t.panelists)
				segs.push({
					txt: `•  ${p.name}${p.note ? ` (${p.note})` : ''}`,
					font: 'normal',
					size: 7.5,
					color: INK,
					gap: 0.4
				});
			if (t.moderator)
				segs.push({ txt: `Moderator: ${t.moderator}`, font: 'normal', size: 7.5, color: MUTED, gap: 0 });
		} else {
			if (t.speaker) segs.push({ txt: t.speaker, font: 'bold', size: 8, color: INK, gap: 0.4 });
			if (t.title) segs.push({ txt: t.title, font: 'normal', size: 7.5, color: INK, gap: 0 });
		}

		const qrUrl = t.abstract ? origin + abstractUrl(t.abstract) : undefined;
		drawSegBlock(segs, opts.accent, opts.stripe, qrUrl);
	}

	// ---- coloured session header bar ----
	function drawSessionHeader(title: string, time: string, meta: string[], accent: RGB) {
		const barH = meta.length ? 11 : 8;
		ensure(barH + 10); // keep the header with at least the start of its first talk
		doc.setFillColor(...accent);
		doc.roundedRect(CONTENT_X, y, CONTENT_W, barH, 1.2, 1.2, 'F');
		doc.setTextColor(...WHITE);
		doc.setFont('helvetica', 'bold');
		doc.setFontSize(9.5);
		doc.text(title, CONTENT_X + 3, y + 5);
		doc.setFont('helvetica', 'normal');
		doc.setFontSize(7.5);
		doc.text(time, CONTENT_X + CONTENT_W - 3, y + 5, { align: 'right' });
		if (meta.length) {
			doc.setFontSize(6.8);
			doc.text(meta.join('     '), CONTENT_X + 3, y + 9);
		}
		y += barH + 2;
		const headerTitle = title;
		const headerAccent = accent;
		continuation = () => {
			doc.setFillColor(...headerAccent);
			doc.roundedRect(CONTENT_X, y, CONTENT_W, 6, 1, 1, 'F');
			doc.setTextColor(...WHITE);
			doc.setFont('helvetica', 'bold');
			doc.setFontSize(7.5);
			doc.text(`${headerTitle} (cont.)`, CONTENT_X + 3, y + 4);
			y += 8;
		};
	}

	function drawTrackHeader(name: string, meta: string[]) {
		ensure(11);
		doc.setFont('helvetica', 'bold');
		doc.setFontSize(8.5);
		doc.setTextColor(...SECONDARY);
		const lines = doc.splitTextToSize(name, CONTENT_W - 4) as string[];
		let ty = y + ptToMm(8.5) + 0.5;
		for (const ln of lines) {
			doc.text(ln, CONTENT_X + 2, ty);
			ty += lh(8.5);
		}
		y = ty - lh(8.5) + 1.5;
		if (meta.length) {
			doc.setFont('helvetica', 'normal');
			doc.setFontSize(6.8);
			doc.setTextColor(...MUTED);
			doc.text(meta.join('     '), CONTENT_X + 2, y + 2.5);
			y += 4;
		}
		doc.setDrawColor(...LINE);
		doc.setLineWidth(0.2);
		doc.line(CONTENT_X + 2, y + 1, CONTENT_X + CONTENT_W - 2, y + 1);
		y += 2.5;
	}

	function drawBlock(time: string, title: string, location?: string) {
		const h = 7;
		ensure(h + 2);
		doc.setFillColor(...BLOCK_BG);
		doc.roundedRect(CONTENT_X, y, CONTENT_W, h, 1, 1, 'F');
		doc.setFont('helvetica', 'normal');
		doc.setFontSize(7);
		doc.setTextColor(...MUTED);
		doc.text(time, CONTENT_X + 3, y + 4.4);
		doc.setFont('helvetica', 'bold');
		doc.setFontSize(8);
		doc.setTextColor(...INK);
		doc.text(title, CONTENT_X + 30, y + 4.4);
		if (location) {
			doc.setFont('helvetica', 'normal');
			doc.setFontSize(6.8);
			doc.setTextColor(...MUTED);
			doc.text(location, CONTENT_X + CONTENT_W - 3, y + 4.4, { align: 'right' });
		}
		y += h + 2.5;
	}

	function drawDayHeader(day: DayDetail) {
		const h = 13;
		doc.setFillColor(...PRIMARY);
		doc.roundedRect(CONTENT_X, y, CONTENT_W, h, 1.5, 1.5, 'F');
		doc.setTextColor(...WHITE);
		doc.setFont('helvetica', 'bold');
		doc.setFontSize(12);
		doc.text(`${day.label}, ${day.date}`, CONTENT_X + 4, y + 6);
		doc.setFont('helvetica', 'normal');
		doc.setFontSize(8.5);
		doc.text(day.subtitle, CONTENT_X + 4, y + 10.5);
		y += h + 3.5;
	}

	// ---- cover ----
	doc.setTextColor(...PRIMARY);
	doc.setFont('helvetica', 'bold');
	doc.setFontSize(26);
	doc.text('APCNCS 2026', PAGE_W / 2, 48, { align: 'center' });

	doc.setTextColor(...INK);
	doc.setFont('helvetica', 'normal');
	doc.setFontSize(11);
	const fullName = doc.splitTextToSize(
		'Asia-Pacific Summer School and Conference on Networks and Complex Systems',
		CONTENT_W - 6
	) as string[];
	let cy = 62;
	for (const ln of fullName) {
		doc.text(ln, PAGE_W / 2, cy, { align: 'center' });
		cy += 6;
	}

	doc.setFont('helvetica', 'bold');
	doc.setFontSize(13);
	doc.setTextColor(...SECONDARY);
	doc.text('Programme', PAGE_W / 2, cy + 6, { align: 'center' });

	doc.setFont('helvetica', 'normal');
	doc.setFontSize(10);
	doc.setTextColor(...MUTED);
	doc.text('9 – 12 June 2026', PAGE_W / 2, cy + 16, { align: 'center' });
	doc.text('Nanyang Technological University, Singapore', PAGE_W / 2, cy + 22, { align: 'center' });

	const coverQrSize = 30;
	doc.addImage(coverQr, 'PNG', (PAGE_W - coverQrSize) / 2, cy + 34, coverQrSize, coverQrSize);
	doc.setFontSize(7);
	doc.setTextColor(...MUTED);
	doc.text('Scan for the online programme', PAGE_W / 2, cy + 34 + coverQrSize + 4, {
		align: 'center'
	});

	// ---- days ----
	for (const day of dayDetails) {
		doc.addPage();
		y = TOP;
		continuation = null;
		drawDayHeader(day);

		for (const item of day.items) {
			if (item.kind === 'registration' || item.kind === 'break' || item.kind === 'note') {
				continuation = null;
				drawBlock(item.time, item.title, item.location);
			} else if (item.kind === 'invited') {
				const meta = [`Room: ${item.location}`];
				if (item.chair) meta.push(`Chair: ${item.chair}`);
				drawSessionHeader(`Invited Session ${item.number}`, item.time, meta, PRIMARY);
				for (const t of item.talks) drawTalk(t, { stripe: true, accent: PRIMARY });
				y += 2;
				continuation = null;
			} else if (item.kind === 'parallel') {
				const title = item.title ?? `Parallel Session ${item.number}`;
				drawSessionHeader(title, item.time, item.note ? [item.note] : [], SECONDARY);
				for (const track of item.tracks) {
					const meta = [`Room: ${track.location}`];
					if (track.chair) meta.push(`Chair: ${track.chair}`);
					drawTrackHeader(track.name, meta);
					if (track.tba) {
						doc.setFont('helvetica', 'italic');
						doc.setFontSize(7.5);
						doc.setTextColor(...MUTED);
						doc.text('Programme to be announced.', CONTENT_X + 2, y + 3);
						y += 6;
					} else {
						for (const t of track.talks) drawTalk(t, { stripe: false, accent: SECONDARY });
					}
					y += 1.5;
				}
				y += 2;
				continuation = null;
			} else if (item.kind === 'lecture') {
				const segs: Seg[] = [{ txt: item.time, font: 'normal', size: 6.5, color: MUTED, gap: 0.6 }];
				segs.push({ txt: item.label, font: 'bold', size: 8.5, color: PRIMARY, gap: 0.5 });
				if (item.speaker) segs.push({ txt: item.speaker, font: 'bold', size: 8, color: INK, gap: 0.4 });
				if (item.title) segs.push({ txt: item.title, font: 'normal', size: 7.5, color: INK, gap: 0.4 });
				if (item.tutors)
					segs.push({ txt: `Tutors: ${item.tutors}`, font: 'normal', size: 7, color: MUTED, gap: 0.3 });
				if (item.note)
					segs.push({ txt: item.note, font: 'normal', size: 7, color: MUTED, gap: 0 });
				const qrUrl = item.abstract ? origin + abstractUrl(item.abstract) : undefined;
				continuation = null;
				drawSegBlock(segs, PRIMARY, true, qrUrl);
				y += 1.5;
			}
		}
	}

	// ---- footers + page numbers (cover excluded) ----
	const pages = doc.getNumberOfPages();
	for (let i = 2; i <= pages; i++) {
		doc.setPage(i);
		doc.setDrawColor(...LINE);
		doc.setLineWidth(0.2);
		doc.line(CONTENT_X, PAGE_H - 7, CONTENT_X + CONTENT_W, PAGE_H - 7);
		doc.setFont('helvetica', 'italic');
		doc.setFontSize(6);
		doc.setTextColor(...FAINT);
		doc.text('APCNCS 2026  •  Programme is subject to change.', CONTENT_X, PAGE_H - 4);
		doc.text(`${i - 1}`, CONTENT_X + CONTENT_W, PAGE_H - 4, { align: 'right' });
	}

	return doc;
}

export async function generateProgrammeBookletPDF() {
	const doc = await buildProgrammeBookletDoc();
	doc.save('APCNCS-2026-Programme-Booklet.pdf');
}
