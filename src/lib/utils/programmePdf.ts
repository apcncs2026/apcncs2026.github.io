import jsPDF from 'jspdf';
import { days, sessionTypeConfig, allSessionTypes, realToVirtual, GRID_VIRTUAL_END, type GridSession, type SessionType } from '$lib/data/programme';

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

export function generateProgrammePDF() {
	const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });

	// Page dimensions
	const pageW = 297;
	const pageH = 210;
	const margin = 5;

	// Layout Y positions
	let curY = margin;

	// ==================== Header ====================
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

	// ==================== Legend ====================
	doc.setFontSize(5);
	const legendTypes = allSessionTypes;
	const totalLegendW = legendTypes.reduce((sum, type) => {
		const label = sessionTypeConfig[type].label;
		return sum + doc.getTextWidth(label) + 5;
	}, 0);
	let legendX = (pageW - totalLegendW) / 2;

	for (const type of legendTypes) {
		const c = typeRgb[type];
		const label = sessionTypeConfig[type].label;
		doc.setFillColor(...c.border);
		doc.rect(legendX, curY, 2, 2, 'F');
		doc.setTextColor(107, 114, 128);
		doc.text(label, legendX + 2.8, curY + 1.6);
		legendX += doc.getTextWidth(label) + 5;
	}
	curY += 4;

	// ==================== Grid Layout ====================
	const timeAxisW = 13;
	const gridStartX = margin + timeAxisW;
	const gridW = pageW - margin * 2 - timeAxisW;
	const colW = gridW / 4;
	const dayHeaderH = 7;

	const dayHeaderY = curY;
	const gridTopPad = 2; // space above 08:00 label
	const gridStartY = dayHeaderY + dayHeaderH + gridTopPad;
	const footerY = pageH - margin - 3;
	const gridEndY = footerY - 3;
	const gridH = gridEndY - gridStartY - gridTopPad;

	const scale = gridH / GRID_VIRTUAL_END;
	const GAP = 0.3;
	const BORDER_W = 0.8;

	const minToY = (min: number) => gridStartY + realToVirtual(min) * scale;

	// ==================== Day Headers ====================
	doc.setFillColor(30, 64, 175);
	doc.rect(margin, dayHeaderY, pageW - margin * 2, dayHeaderH, 'F');

	doc.setTextColor(255, 255, 255);
	for (let i = 0; i < days.length; i++) {
		const day = days[i];
		const colX = gridStartX + i * colW;

		if (i > 0) {
			doc.setDrawColor(255, 255, 255);
			doc.setLineWidth(0.15);
			doc.line(colX, dayHeaderY, colX, dayHeaderY + dayHeaderH);
		}

		doc.setFontSize(7);
		doc.setFont('helvetica', 'bold');
		doc.text(`${day.label}, ${day.date}`, colX + colW / 2, dayHeaderY + 3, { align: 'center' });
		doc.setFontSize(5);
		doc.setFont('helvetica', 'normal');
		doc.text(day.subtitle, colX + colW / 2, dayHeaderY + 5.5, { align: 'center' });
	}

	// Time axis right border
	doc.setDrawColor(209, 213, 219);
	doc.setLineWidth(0.2);
	doc.line(gridStartX, gridStartY, gridStartX, gridEndY);

	// ==================== Grid Lines ====================
	const hourEntries = [
		...Array.from({ length: 11 }, (_, i) => ({ label: `${String(8 + i).padStart(2, '0')}:00`, realMin: i * 60 })),
		{ label: '19:00', realMin: 660 },
		{ label: '21:00', realMin: 780 }
	];
	const halfHourEntries = Array.from({ length: 10 }, (_, i) => ({
		label: `${String(8 + i).padStart(2, '0')}:30`, realMin: i * 60 + 30
	}));

	for (const hour of hourEntries) {
		const y = minToY(hour.realMin);
		doc.setDrawColor(170, 170, 170);
		doc.setLineWidth(0.25);
		doc.setLineDashPattern([], 0);
		doc.line(gridStartX, y, pageW - margin, y);

		doc.setFontSize(5);
		doc.setFont('helvetica', 'bold');
		doc.setTextColor(107, 114, 128);
		doc.text(hour.label, gridStartX - 1, y + 0.7, { align: 'right' });
	}

	for (const half of halfHourEntries) {
		const y = minToY(half.realMin);
		doc.setDrawColor(200, 200, 200);
		doc.setLineWidth(0.15);
		doc.setLineDashPattern([0.8, 0.8], 0);
		doc.line(gridStartX, y, pageW - margin, y);
		doc.setLineDashPattern([], 0);

		doc.setFontSize(4);
		doc.setFont('helvetica', 'normal');
		doc.setTextColor(156, 163, 175);
		doc.text(half.label, gridStartX - 1, y + 0.5, { align: 'right' });
	}

	// ==================== Sessions ====================
	for (let dayIdx = 0; dayIdx < days.length; dayIdx++) {
		const day = days[dayIdx];
		const colX = gridStartX + dayIdx * colW + 0.4;
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

			// Text clipping
			doc.setTextColor(...c.text);
			const textX = colX + BORDER_W + 1;
			const maxTextW = blockW - BORDER_W - 2;
			let textY = top;

			// Vertically center for small blocks
			if (height < 5) {
				textY = top + height / 2 - 0.3;
				doc.setFontSize(3.5);
				doc.setFont('helvetica', 'bold');
				const truncated = truncateText(doc, session.title, maxTextW);
				doc.text(truncated, textX, textY + 0.7);
				continue;
			}

			textY += 1.8;

			// Time label
			if (height >= 4) {
				doc.setFontSize(3.5);
				doc.setFont('helvetica', 'normal');
				doc.text(session.timeLabel, textX, textY);
				textY += 1.8;
			}

			// Title
			doc.setFontSize(4.5);
			doc.setFont('helvetica', 'bold');
			const titleLines = doc.splitTextToSize(session.title, maxTextW) as string[];
			const maxTitleLines = height >= 14 ? 2 : 1;
			for (let li = 0; li < Math.min(titleLines.length, maxTitleLines); li++) {
				if (textY > top + height - 0.5) break;
				doc.text(titleLines[li], textX, textY);
				textY += 2;
			}

			// Subtitle
			if (session.subtitle && height >= 6 && textY < top + height - 1) {
				doc.setFontSize(3.5);
				doc.setFont('helvetica', 'normal');
				const subLines = doc.splitTextToSize(session.subtitle, maxTextW) as string[];
				const maxSubLines = height >= 20 ? 3 : 1;
				for (let li = 0; li < Math.min(subLines.length, maxSubLines); li++) {
					if (textY > top + height - 0.5) break;
					doc.text(subLines[li], textX, textY);
					textY += 1.7;
				}
			}
		}
	}

	// ==================== Outer border ====================
	doc.setDrawColor(209, 213, 219);
	doc.setLineWidth(0.3);
	doc.setLineDashPattern([], 0);
	doc.rect(margin, dayHeaderY, pageW - margin * 2, gridEndY - dayHeaderY);

	// ==================== Footer ====================
	const actualFooterY = footerY + 1;

	doc.setFont('helvetica', 'italic');
	doc.setFontSize(4);
	doc.setTextColor(107, 114, 128);
	doc.text(
		'Programme is subject to change. Invited speaker names and parallel session details will be updated as they are confirmed.',
		pageW / 2, actualFooterY, { align: 'center' }
	);

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
