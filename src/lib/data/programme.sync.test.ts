import { describe, it, expect } from 'vitest';
import { dayDetails, type Lecture } from './programmeDetail';
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

// Invited-talk blocks from the at-a-glance grid (type 'talk'). The Summer School
// day contributes nothing here — its grid sessions are type 'lecture', cross-checked
// in the separate describe block below.
const detailDayKeys = new Set(dayDetails.map((d) => d.date.replace(' 2026', '')));
const gridTalks = days
	.filter((d) => detailDayKeys.has(d.date))
	.flatMap((d) => d.gridSessions.filter((s) => s.type === 'talk').map((s) => ({ day: d.date, ...s })));

describe('programme grid ↔ detail invited-talk consistency', () => {
	it('finds invited talks to check (guards against the data failing to load)', () => {
		expect(detailTalks.length).toBeGreaterThan(0);
		expect(gridTalks.length).toBeGreaterThan(0);
	});

	// Every detailed invited talk has a grid block with the same speaker + start time.
	// When the detail has a real (non-TBC) title, the grid block must also carry it: it
	// needs a subtitle, and that subtitle must contain the title. The grid may legitimately
	// prepend a prefix (e.g. "… Invited Lecture: <title>"), so we use containment rather
	// than equality. A missing subtitle (Ginestra Bianconi's grid block had none while the
	// detail showed a title + abstract) or a reworded title fails.
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
			if (g && dt.title !== 'TBC') {
				expect(
					g.subtitle,
					`grid block for ${dt.speaker} (${dt.day} ${startTime(dt.time)}) has no subtitle, but the detail shows a title: "${dt.title}"`
				).toBeTruthy();
				expect(
					titleKey(g.subtitle ?? '').includes(titleKey(dt.title)),
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

// ===========================================================================
// Summer School (9 June) is a different projection: the detail page lists each
// `lecture` as its own item, while the grid stores them as `lecture` grid-sessions
// (type 'lecture', not 'talk'). The six numbered lectures are duplicated across
// both files and must agree on start time, speaker, and title — e.g. the coffee
// break / Lecture 5 retiming must land identically in both, or this fails.
// ===========================================================================

const SUMMER_DATE = '9 June';
const summerDetail = dayDetails.find((d) => d.date.replace(' 2026', '') === SUMMER_DATE);
const summerGrid = days.find((d) => d.date === SUMMER_DATE);

interface DetailLecture {
	time: string;
	label: string;
	speaker: string;
	title: string;
}

// Numbered lectures only (label "Lecture N…"): excludes opening/closing remarks and
// the panel, which the grid renders as separate ceremony/panel blocks.
const detailLectures: DetailLecture[] = (summerDetail?.items ?? [])
	.filter((i): i is Lecture => i.kind === 'lecture')
	.filter((l) => /^lecture\s*\d/i.test(l.label) && !!l.speaker)
	.map((l) => ({ time: l.time, label: l.label, speaker: l.speaker ?? '', title: l.title ?? '' }));

const gridLectures = (summerGrid?.gridSessions ?? []).filter((s) => s.type === 'lecture');

describe('Summer School (9 June) grid ↔ detail lecture consistency', () => {
	it('loads the Summer School day from both files with equal lecture counts', () => {
		expect(summerDetail, "no '9 June' day in programmeDetail.ts").toBeTruthy();
		expect(summerGrid, "no '9 June' day in programme.ts").toBeTruthy();
		expect(detailLectures.length).toBeGreaterThan(0);
		expect(
			gridLectures.length,
			`lecture count mismatch — detail: ${detailLectures.length}, grid: ${gridLectures.length}`
		).toBe(detailLectures.length);
	});

	// Forward: each detailed lecture has a grid lecture at the same start time,
	// carrying the same headline (speaker, or activity name for the workshop) and
	// an agreeing title.
	for (const dl of detailLectures) {
		it(`grid has matching lecture: ${dl.label} — ${startTime(dl.time)}`, () => {
			const g = gridLectures.find((s) => startTime(s.timeLabel) === startTime(dl.time));
			expect(g, `no grid 'lecture' at 9 June ${dl.time} for ${dl.label}`).toBeTruthy();
			if (g) {
				expect(
					speakerName(g.title),
					`speaker drift for ${dl.label} (9 June ${startTime(dl.time)}):\n  detail: "${dl.speaker}"\n  grid:   "${g.title}"`
				).toBe(speakerName(dl.speaker));
			}
			if (g?.subtitle && dl.title && dl.title !== 'TBC') {
				expect(
					titleKey(g.subtitle).includes(titleKey(dl.title)),
					`title drift for ${dl.label} (9 June):\n  detail: "${dl.title}"\n  grid:   "${g.subtitle}"`
				).toBe(true);
			}
		});
	}

	// Reverse: no grid lecture is left without a detail counterpart at the same start.
	for (const g of gridLectures) {
		it(`detail has matching lecture: ${g.title} — ${startTime(g.timeLabel)}`, () => {
			const dl = detailLectures.find((d) => startTime(d.time) === startTime(g.timeLabel));
			expect(
				dl,
				`grid 'lecture' "${g.title}" at 9 June ${g.timeLabel} has no detail counterpart`
			).toBeTruthy();
		});
	}
});
