import { describe, it, expect } from 'vitest';
import { dayDetails } from './programmeDetail';
import { days } from './programme';

/**
 * Guard test for the duplicated schedule data.
 *
 * The detailed day pages (`programmeDetail.ts`) and the at-a-glance grid + PDF
 * (`programme.ts`) keep separate copies of every invited talk. They are different
 * projections — the grid collapses parallel sessions, adds the Summer School day and
 * social events, and sometimes uses shorter labels — but the *invited-talk facts*
 * (speaker, time, title) are duplicated and must stay in sync. A title changed in one
 * file but not the other (which happened with Hsuan-Yi Chen) should fail here.
 *
 * Until the two files are merged into one source of truth, this is the safety net.
 * If you intentionally diverge a label, see the documented exclusions below.
 */

const norm = (s: string) => s.toLowerCase().replace(/\s+/g, ' ').trim();
/** Speaker without trailing "(affiliation, ...)" — the grid stores bare names. */
const speakerName = (s: string) => norm(s.replace(/\s*\(.*$/, ''));
/** First HH:MM of a time string, tolerant of dash/format differences. */
const startTime = (t: string) => t.match(/\d{1,2}:\d{2}/)?.[0] ?? norm(t);
/** Collapse a title to comparable letters/digits only. */
const titleKey = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '');

interface DetailTalk {
	day: string;
	speaker: string;
	title: string;
	time: string;
}

// Single-speaker invited talks from the detailed programme.
// Excluded: opening address & panels (no `title`); "Meet the Editor" sessions
// (the grid renders these as a separate `editor` block, not a talk).
const detailTalks: DetailTalk[] = [];
for (const day of dayDetails) {
	const dayKey = day.date.replace(' 2026', '');
	for (const item of day.items) {
		if (item.kind !== 'invited') continue;
		for (const t of item.talks) {
			if (!t.title || !t.speaker) continue;
			if (t.prefix === 'Meet the Editor Session') continue;
			detailTalks.push({ day: dayKey, speaker: t.speaker, title: t.title, time: t.time });
		}
	}
}

// Invited-talk blocks from the at-a-glance grid (type 'talk'), limited to days
// that also exist in the detailed programme (excludes the Summer School day).
const detailDayKeys = new Set(dayDetails.map((d) => d.date.replace(' 2026', '')));
const gridTalks = days
	.filter((d) => detailDayKeys.has(d.date))
	.flatMap((d) => d.gridSessions.filter((s) => s.type === 'talk').map((s) => ({ day: d.date, ...s })));

describe('programme grid ↔ detail invited-talk consistency', () => {
	it('finds invited talks to check (guards against the data failing to load)', () => {
		expect(detailTalks.length).toBeGreaterThan(0);
		expect(gridTalks.length).toBeGreaterThan(0);
	});

	// Every detailed invited talk has a grid block with the same speaker + start time,
	// and (when the grid shows a subtitle) the detail title appears within it. The grid
	// may legitimately prepend a prefix (e.g. "… Invited Lecture: <title>"), so we use
	// containment rather than equality. A reworded title that no longer matches fails.
	for (const dt of detailTalks) {
		const who = `${dt.speaker.split(' (')[0]} — ${dt.day} ${startTime(dt.time)}`;
		it(`grid has matching block: ${who}`, () => {
			const g = gridTalks.find(
				(g) =>
					g.day === dt.day &&
					speakerName(g.title) === speakerName(dt.speaker) &&
					startTime(g.timeLabel) === startTime(dt.time)
			);
			expect(g, `no grid 'talk' block for ${dt.speaker} at ${dt.day} ${dt.time}`).toBeTruthy();
			if (g?.subtitle && dt.title !== 'TBC') {
				expect(
					titleKey(g.subtitle).includes(titleKey(dt.title)),
					`title drift for ${dt.speaker} (${dt.day}):\n  detail: "${dt.title}"\n  grid:   "${g.subtitle}"`
				).toBe(true);
			}
		});
	}

	// Reverse: no grid invited-talk block is left without a detail counterpart
	// (e.g. a talk removed or retimed in the detail but not the grid).
	for (const g of gridTalks) {
		const who = `${g.title} — ${g.day} ${startTime(g.timeLabel)}`;
		it(`detail has matching talk: ${who}`, () => {
			const dt = detailTalks.find(
				(dt) =>
					dt.day === g.day &&
					speakerName(dt.speaker) === speakerName(g.title) &&
					startTime(dt.time) === startTime(g.timeLabel)
			);
			expect(
				dt,
				`grid 'talk' "${g.title}" at ${g.day} ${g.timeLabel} has no detail counterpart`
			).toBeTruthy();
		});
	}
});
