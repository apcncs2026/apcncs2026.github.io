import jsPDF from 'jspdf';
import { days, sessionTypeConfig, allSessionTypes, realToVirtual, GRID_VIRTUAL_END, type SessionType, type DayData } from '$lib/data/programme';

type RGB = [number, number, number];

const typeRgb: Record<SessionType, { border: RGB; bg: RGB; text: RGB }> = {
	registration: { border: [34, 197, 94],   bg: [240, 253, 244], text: [20, 83, 45] },
	talk:         { border: [245, 158, 11],  bg: [255, 251, 235], text: [120, 53, 15] },
	lecture:      { border: [59, 130, 246],  bg: [239, 246, 255], text: [30, 58, 138] },
	break:        { border: [156, 163, 175], bg: [243, 244, 246], text: [107, 114, 128] },
	panel:        { border: [168, 85, 247],  bg: [250, 245, 255], text: [88, 28, 135] },
	parallel:     { border: [99, 102, 241],  bg: [238, 242, 255], text: [49, 46, 129] },
	social:       { border: [6, 182, 212],   bg: [236, 254, 255], text: [22, 78, 99] },
	ceremony:     { border: [244, 63, 94],   bg: [255, 241, 242], text: [136, 19, 55] },
	editor:       { border: [239, 68, 68],   bg: [254, 242, 242], text: [127, 29, 29] },
};

const hourEntries = [
	...Array.from({ length: 11 }, (_, i) => ({ label: `${String(8 + i).padStart(2, '0')}:00`, realMin: i * 60 })),
	{ label: '19:00', realMin: 660 },
	{ label: '21:00', realMin: 780 }
];
const halfHourEntries = Array.from({ length: 10 }, (_, i) => ({
	label: `${String(8 + i).padStart(2, '0')}:30`, realMin: i * 60 + 30
}));

// ==================== Shared drawing helpers ====================

interface GridLayout {
	gridStartX: number;
	gridStartY: number;
	gridEndY: number;
	scale: number;
	colW: number;
	colStartX: number; // x offset for the first column on this page
	numCols: number;
	GAP: number;
	BORDER_W: number;
	fontSize: { time: number; title: number; subtitle: number; hourLabel: number; halfLabel: number };
	lineHeight: { time: number; title: number; subtitle: number };
}

function drawGridLines(doc: jsPDF, layout: GridLayout, pageW: number, margin: number) {
	const { gridStartX, gridStartY, gridEndY, scale } = layout;
	const minToY = (min: number) => gridStartY + realToVirtual(min) * scale;

	// Time axis border
	doc.setDrawColor(209, 213, 219);
	doc.setLineWidth(0.2);
	doc.line(gridStartX, gridStartY, gridStartX, gridEndY);

	for (const hour of hourEntries) {
		const y = minToY(hour.realMin);
		if (y > gridEndY + 1) continue;
		doc.setDrawColor(170, 170, 170);
		doc.setLineWidth(0.25);
		doc.setLineDashPattern([], 0);
		doc.line(gridStartX, y, pageW - margin, y);

		doc.setFontSize(layout.fontSize.hourLabel);
		doc.setFont('helvetica', 'bold');
		doc.setTextColor(107, 114, 128);
		doc.text(hour.label, gridStartX - 1, y + 0.7, { align: 'right' });
	}

	for (const half of halfHourEntries) {
		const y = minToY(half.realMin);
		if (y > gridEndY + 1) continue;
		doc.setDrawColor(200, 200, 200);
		doc.setLineWidth(0.15);
		doc.setLineDashPattern([0.8, 0.8], 0);
		doc.line(gridStartX, y, pageW - margin, y);
		doc.setLineDashPattern([], 0);

		doc.setFontSize(layout.fontSize.halfLabel);
		doc.setFont('helvetica', 'normal');
		doc.setTextColor(156, 163, 175);
		doc.text(half.label, gridStartX - 1, y + 0.5, { align: 'right' });
	}
}

function drawSessions(doc: jsPDF, layout: GridLayout, pageDays: DayData[]) {
	const { gridStartY, scale, colW, colStartX, GAP, BORDER_W, fontSize, lineHeight } = layout;
	const minToY = (min: number) => gridStartY + realToVirtual(min) * scale;

	for (let dayIdx = 0; dayIdx < pageDays.length; dayIdx++) {
		const day = pageDays[dayIdx];
		const colX = colStartX + dayIdx * colW + 0.4;
		const blockW = colW - 0.8;

		for (const session of day.gridSessions) {
			const c = typeRgb[session.type];
			const top = minToY(session.startMin) + GAP;
			const height = (realToVirtual(session.endMin) - realToVirtual(session.startMin)) * scale - GAP * 2;

			// Background
			doc.setFillColor(...c.bg);
			doc.rect(colX + BORDER_W, top, blockW - BORDER_W, height, 'F');

			// Left accent border
			doc.setFillColor(...c.border);
			doc.rect(colX, top, BORDER_W, height, 'F');

			// Text
			doc.setTextColor(...c.text);
			const textX = colX + BORDER_W + 1;
			const maxTextW = blockW - BORDER_W - 2;
			let textY = top;

			// Vertically center for very small blocks
			if (height < 5) {
				textY = top + height / 2 - 0.3;
				doc.setFontSize(fontSize.title);
				doc.setFont('helvetica', 'bold');
				doc.text(truncateText(doc, session.title, maxTextW), textX, textY + 0.7);
				continue;
			}

			textY += 1.8;

			// Time label
			if (height >= 4) {
				doc.setFontSize(fontSize.time);
				doc.setFont('helvetica', 'normal');
				doc.text(session.timeLabel, textX, textY);
				textY += lineHeight.time;
			}

			// Title
			doc.setFontSize(fontSize.title);
			doc.setFont('helvetica', 'bold');
			const titleLines = doc.splitTextToSize(session.title, maxTextW) as string[];
			const maxTitleLines = height >= 14 ? 2 : 1;
			for (let li = 0; li < Math.min(titleLines.length, maxTitleLines); li++) {
				if (textY > top + height - 0.5) break;
				doc.text(titleLines[li], textX, textY);
				textY += lineHeight.title;
			}

			// Subtitle
			if (session.subtitle && height >= 6 && textY < top + height - 1) {
				doc.setFontSize(fontSize.subtitle);
				doc.setFont('helvetica', 'normal');
				const subLines = doc.splitTextToSize(session.subtitle, maxTextW) as string[];
				const maxSubLines = height >= 20 ? 3 : height >= 10 ? 2 : 1;
				for (let li = 0; li < Math.min(subLines.length, maxSubLines); li++) {
					if (textY > top + height - 0.5) break;
					doc.text(subLines[li], textX, textY);
					textY += lineHeight.subtitle;
				}
			}
		}
	}
}

function drawDayHeaders(doc: jsPDF, pageDays: DayData[], layout: GridLayout, dayHeaderY: number, dayHeaderH: number, margin: number, pageW: number) {
	doc.setFillColor(30, 64, 175);
	doc.rect(margin, dayHeaderY, pageW - margin * 2, dayHeaderH, 'F');

	doc.setTextColor(255, 255, 255);
	for (let i = 0; i < pageDays.length; i++) {
		const day = pageDays[i];
		const colX = layout.colStartX + i * layout.colW;

		if (i > 0) {
			doc.setDrawColor(255, 255, 255);
			doc.setLineWidth(0.15);
			doc.line(colX, dayHeaderY, colX, dayHeaderY + dayHeaderH);
		}

		doc.setFontSize(7);
		doc.setFont('helvetica', 'bold');
		doc.text(`${day.label}, ${day.date}`, colX + layout.colW / 2, dayHeaderY + 3, { align: 'center' });
		doc.setFontSize(5);
		doc.setFont('helvetica', 'normal');
		doc.text(day.subtitle, colX + layout.colW / 2, dayHeaderY + 5.5, { align: 'center' });
	}
}

function drawHeader(doc: jsPDF, pageW: number, margin: number): number {
	let curY = margin;

	doc.setFont('helvetica', 'bold');
	doc.setFontSize(10);
	doc.setTextColor(31, 41, 55);
	doc.text('APCNCS 2026', pageW / 2, curY + 3.5, { align: 'center' });

	doc.setFont('helvetica', 'normal');
	doc.setFontSize(7);
	doc.text('Asia-Pacific Summer School and Conference on Networks and Complex Systems', pageW / 2, curY + 7, { align: 'center' });

	doc.setFontSize(6);
	doc.setTextColor(107, 114, 128);
	doc.text('9 \u2013 12 June 2026  \u2022  Nanyang Technological University, Singapore', pageW / 2, curY + 10.5, { align: 'center' });
	curY += 13;

	return curY;
}

function drawLegend(doc: jsPDF, pageW: number, curY: number): number {
	doc.setFontSize(5);
	const totalW = allSessionTypes.reduce((sum, type) => {
		return sum + doc.getTextWidth(sessionTypeConfig[type].label) + 5;
	}, 0);
	let x = (pageW - totalW) / 2;

	for (const type of allSessionTypes) {
		const c = typeRgb[type];
		const label = sessionTypeConfig[type].label;
		doc.setFillColor(...c.border);
		doc.rect(x, curY, 2, 2, 'F');
		doc.setTextColor(107, 114, 128);
		doc.text(label, x + 2.8, curY + 1.6);
		x += doc.getTextWidth(label) + 5;
	}

	return curY + 4;
}

function drawFooter(doc: jsPDF, pageW: number, footerY: number) {
	doc.setFont('helvetica', 'italic');
	doc.setFontSize(4);
	doc.setTextColor(107, 114, 128);
	doc.text(
		'Programme is subject to change. Invited speaker names and parallel session details will be updated as they are confirmed.',
		pageW / 2, footerY, { align: 'center' }
	);
}

// ==================== Landscape: 1 page, 4 columns ====================

export function generateProgrammePDF() {
	const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
	const pageW = 297, pageH = 210, margin = 5;

	let curY = drawHeader(doc, pageW, margin);
	curY = drawLegend(doc, pageW, curY);

	const timeAxisW = 13;
	const gridStartX = margin + timeAxisW;
	const colW = (pageW - margin * 2 - timeAxisW) / 4;
	const dayHeaderH = 7;
	const dayHeaderY = curY;
	const gridTopPad = 2;
	const gridStartY = dayHeaderY + dayHeaderH + gridTopPad;
	const footerY = pageH - margin - 3;
	const gridEndY = footerY - 3;
	const gridH = gridEndY - gridStartY - gridTopPad;

	const layout: GridLayout = {
		gridStartX, gridStartY, gridEndY,
		scale: gridH / GRID_VIRTUAL_END,
		colW, colStartX: gridStartX, numCols: 4,
		GAP: 0.3, BORDER_W: 0.8,
		fontSize: { time: 3.5, title: 4.5, subtitle: 6, hourLabel: 5, halfLabel: 4 },
		lineHeight: { time: 1.8, title: 2, subtitle: 2.5 }
	};

	drawDayHeaders(doc, days, layout, dayHeaderY, dayHeaderH, margin, pageW);
	drawGridLines(doc, layout, pageW, margin);
	drawSessions(doc, layout, days);

	// Outer border
	doc.setDrawColor(209, 213, 219);
	doc.setLineWidth(0.3);
	doc.setLineDashPattern([], 0);
	doc.rect(margin, dayHeaderY, pageW - margin * 2, gridEndY - dayHeaderY);

	drawFooter(doc, pageW, footerY + 1);
	doc.save('APCNCS-2026-Programme.pdf');
}

// ==================== Portrait: 2 pages, 2 columns each ====================

export function generateProgrammePDFPortrait() {
	const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
	const pageW = 210, pageH = 297, margin = 8;
	const dayPairs = [[days[0], days[1]], [days[2], days[3]]];

	for (let pageIdx = 0; pageIdx < dayPairs.length; pageIdx++) {
		if (pageIdx > 0) doc.addPage();

		const pageDays = dayPairs[pageIdx];
		let curY = drawHeader(doc, pageW, margin);
		curY = drawLegend(doc, pageW, curY);

		const timeAxisW = 14;
		const gridStartX = margin + timeAxisW;
		const colW = (pageW - margin * 2 - timeAxisW) / 2;
		const dayHeaderH = 8;
		const dayHeaderY = curY;
		const gridTopPad = 3;
		const gridStartY = dayHeaderY + dayHeaderH + gridTopPad;
		const footerY = pageH - margin - 4;
		const gridEndY = footerY - 3;
		const gridH = gridEndY - gridStartY - gridTopPad;

		const layout: GridLayout = {
			gridStartX, gridStartY, gridEndY,
			scale: gridH / GRID_VIRTUAL_END,
			colW, colStartX: gridStartX, numCols: 2,
			GAP: 0.4, BORDER_W: 1,
			fontSize: { time: 5, title: 6.5, subtitle: 8.5, hourLabel: 6, halfLabel: 5 },
			lineHeight: { time: 2.5, title: 3, subtitle: 3.5 }
		};

		drawDayHeaders(doc, pageDays, layout, dayHeaderY, dayHeaderH, margin, pageW);
		drawGridLines(doc, layout, pageW, margin);
		drawSessions(doc, layout, pageDays);

		// Outer border
		doc.setDrawColor(209, 213, 219);
		doc.setLineWidth(0.3);
		doc.setLineDashPattern([], 0);
		doc.rect(margin, dayHeaderY, pageW - margin * 2, gridEndY - dayHeaderY);

		drawFooter(doc, pageW, footerY + 1);
	}

	doc.save('APCNCS-2026-Programme.pdf');
}

function truncateText(doc: jsPDF, text: string, maxW: number): string {
	if (doc.getTextWidth(text) <= maxW) return text;
	let t = text;
	while (t.length > 0 && doc.getTextWidth(t + '\u2026') > maxW) {
		t = t.slice(0, -1);
	}
	return t + '\u2026';
}
