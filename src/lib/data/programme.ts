export type SessionType = 'registration' | 'talk' | 'lecture' | 'break' | 'panel' | 'parallel' | 'social' | 'ceremony' | 'editor';

export interface GridSession {
	startMin: number; // minutes from 08:00
	endMin: number;
	title: string;
	subtitle?: string;
	type: SessionType;
	timeLabel: string;
}

export interface DayData {
	label: string;
	shortLabel: string;
	date: string;
	subtitle: string;
	gridSessions: GridSession[];
}

/** Time zone: a range of real minutes with a compression ratio */
export interface TimeZone {
	start: number; // real minutes from 08:00
	end: number;   // real minutes from 08:00
	ratio: number; // compression ratio (1 = full scale, 4 = 4x compressed)
}

export const timeZones: TimeZone[] = [
	{ start: 0,   end: 600, ratio: 1 }, // 08:00–18:00: normal
	{ start: 600, end: 660, ratio: 4 }, // 18:00–19:00: squeezed gap
	{ start: 660, end: 790, ratio: 4 }, // 19:00–21:10: evening (moderate)
];

// Precompute virtual offset at each zone boundary
const zoneOffsets: number[] = [];
{
	let offset = 0;
	for (const zone of timeZones) {
		zoneOffsets.push(offset);
		offset += (zone.end - zone.start) / zone.ratio;
	}
}

/** Convert real minutes (from 08:00) to virtual position units */
export function realToVirtual(min: number): number {
	for (let i = 0; i < timeZones.length; i++) {
		const zone = timeZones[i];
		if (min <= zone.end) {
			return zoneOffsets[i] + (min - zone.start) / zone.ratio;
		}
	}
	// Past all zones: extend last zone's ratio
	const last = timeZones.length - 1;
	return zoneOffsets[last] + (min - timeZones[last].start) / timeZones[last].ratio;
}

/** Total virtual units for the grid (derived from last zone end) */
export const GRID_VIRTUAL_END = realToVirtual(timeZones[timeZones.length - 1].end);


interface SessionTypeConfig {
	border: string;
	bg: string;
	text: string;
	badge: string;
	label: string;
}

export const sessionTypeConfig: Record<SessionType, SessionTypeConfig> = {
	registration: { border: 'border-green-500',  bg: 'bg-green-50',   text: 'text-green-900',  badge: 'bg-green-500',  label: 'Registration' },
	talk:         { border: 'border-amber-500',  bg: 'bg-amber-50',   text: 'text-amber-900',  badge: 'bg-amber-500',  label: 'Invited Talk' },
	lecture:      { border: 'border-blue-500',   bg: 'bg-blue-50',    text: 'text-blue-900',   badge: 'bg-blue-500',   label: 'Lecture' },
	break:        { border: 'border-gray-400',   bg: 'bg-gray-100',   text: 'text-gray-500',   badge: 'bg-gray-400',   label: 'Break' },
	panel:        { border: 'border-purple-500', bg: 'bg-purple-50',  text: 'text-purple-900', badge: 'bg-purple-500', label: 'Panel' },
	parallel:     { border: 'border-indigo-500', bg: 'bg-indigo-50',  text: 'text-indigo-900', badge: 'bg-indigo-500', label: 'Parallel Session' },
	social:       { border: 'border-cyan-500',   bg: 'bg-cyan-50',    text: 'text-cyan-900',   badge: 'bg-cyan-500',   label: 'Social Event' },
	ceremony:     { border: 'border-rose-500',   bg: 'bg-rose-50',    text: 'text-rose-900',   badge: 'bg-rose-500',   label: 'Ceremony' },
	editor:       { border: 'border-red-500',    bg: 'bg-red-50',     text: 'text-red-900',    badge: 'bg-red-500',    label: 'Meet the Editor' },
};

export const allSessionTypes = Object.keys(sessionTypeConfig) as SessionType[];

export function typeClasses(type: SessionType): string {
	const c = sessionTypeConfig[type];
	return `${c.border} ${c.bg} ${c.text}`;
}

export const days: DayData[] = [
	{
		label: 'Tuesday',
		shortLabel: 'Tue',
		date: '9 June',
		subtitle: 'Summer School',
		gridSessions: [
			{ startMin: 45, endMin: 60, title: 'Registration', type: 'registration', timeLabel: '08:45 – 09:00' },
			{ startMin: 60, endMin: 70, title: 'Opening Remarks', type: 'ceremony', timeLabel: '09:00 – 09:10' },
			{ startMin: 70, endMin: 130, title: 'Marton Karsai', subtitle: 'Lecture 1', type: 'lecture', timeLabel: '09:10 – 10:10' },
			{ startMin: 130, endMin: 150, title: 'Coffee Break', type: 'break', timeLabel: '10:10 – 10:30' },
			{ startMin: 150, endMin: 210, title: 'Chew Lock Yue', subtitle: 'Lecture 2', type: 'lecture', timeLabel: '10:30 – 11:30' },
			{ startMin: 210, endMin: 270, title: 'Misako Takayasu', subtitle: 'Money-flow network among about 1 million business firms in Japan', type: 'lecture', timeLabel: '11:30 – 12:30' },
			{ startMin: 270, endMin: 360, title: 'Lunch Break', type: 'break', timeLabel: '12:30 – 14:00' },
			{ startMin: 360, endMin: 420, title: 'Anirban Chakraborti', subtitle: 'Complex Systems Studies using Machine Learning', type: 'lecture', timeLabel: '14:00 – 15:00' },
			{ startMin: 420, endMin: 480, title: 'Lecture 5', subtitle: 'Writing, Publishing Strategies, Peer Review Insights', type: 'lecture', timeLabel: '15:00 – 16:00' },
			{ startMin: 480, endMin: 500, title: 'Coffee Break', type: 'break', timeLabel: '16:00 – 16:20' },
			{ startMin: 500, endMin: 560, title: 'Jose Fernando Mendes', subtitle: 'Lecture 6', type: 'lecture', timeLabel: '16:20 – 17:20' },
			{ startMin: 560, endMin: 585, title: 'Research Directions, Careers, and Interdisciplinary Work', subtitle: 'Panel Discussion + Closing Remarks', type: 'panel', timeLabel: '17:20 – 17:45' }
		]
	},
	{
		label: 'Wednesday',
		shortLabel: 'Wed',
		date: '10 June',
		subtitle: 'Conference Day 1',
		gridSessions: [
			{ startMin: 0, endMin: 35, title: 'Registration', type: 'registration', timeLabel: '08:00 – 08:35' },
			{ startMin: 35, endMin: 45, title: 'Opening Address', type: 'ceremony', timeLabel: '08:35 – 08:45' },
			{ startMin: 45, endMin: 85, title: 'Invited Speaker 1', type: 'talk', timeLabel: '08:45 – 09:25' },
			{ startMin: 85, endMin: 125, title: 'Invited Speaker 2', type: 'talk', timeLabel: '09:25 – 10:05' },
			{ startMin: 125, endMin: 150, title: 'How to Do Impactful Research', subtitle: 'Panel Discussion', type: 'panel', timeLabel: '10:05 – 10:30' },
			{ startMin: 150, endMin: 180, title: 'Coffee Break', type: 'break', timeLabel: '10:30 – 11:00' },
			{ startMin: 180, endMin: 270, title: 'Parallel Session 1', type: 'parallel', timeLabel: '11:00 – 12:30' },
			{ startMin: 270, endMin: 330, title: 'Lunch', type: 'break', timeLabel: '12:30 – 13:30' },
			{ startMin: 330, endMin: 360, title: 'Invited Speaker 3', type: 'talk', timeLabel: '13:30 – 14:00' },
			{ startMin: 360, endMin: 390, title: 'Invited Speaker 4', type: 'talk', timeLabel: '14:00 – 14:30' },
			{ startMin: 390, endMin: 420, title: 'Invited Speaker 5', type: 'talk', timeLabel: '14:30 – 15:00' },
			{ startMin: 420, endMin: 450, title: 'Marton Karsai', subtitle: 'EiC, Advances in Complex Systems', type: 'editor', timeLabel: '15:00 – 15:30' },
			{ startMin: 450, endMin: 480, title: 'Coffee Break', type: 'break', timeLabel: '15:30 – 16:00' },
			{ startMin: 480, endMin: 570, title: 'Parallel Session 2', type: 'parallel', timeLabel: '16:00 – 17:30' }
		]
	},
	{
		label: 'Thursday',
		shortLabel: 'Thu',
		date: '11 June',
		subtitle: 'Conference Day 2',
		gridSessions: [
			{ startMin: 0, endMin: 45, title: 'Registration', type: 'registration', timeLabel: '08:00 – 08:45' },
			{ startMin: 45, endMin: 85, title: 'Invited Speaker 6', type: 'talk', timeLabel: '08:45 – 09:25' },
			{ startMin: 85, endMin: 125, title: 'Invited Speaker 7', type: 'talk', timeLabel: '09:25 – 10:05' },
			{ startMin: 125, endMin: 150, title: 'Forging International Collaborations', subtitle: 'Panel Discussion', type: 'panel', timeLabel: '10:05 – 10:30' },
			{ startMin: 150, endMin: 180, title: 'Coffee Break', type: 'break', timeLabel: '10:30 – 11:00' },
			{ startMin: 180, endMin: 270, title: 'Parallel Session 3', type: 'parallel', timeLabel: '11:00 – 12:30' },
			{ startMin: 270, endMin: 330, title: 'Lunch', type: 'break', timeLabel: '12:30 – 13:30' },
			{ startMin: 330, endMin: 360, title: 'Invited Speaker 8', type: 'talk', timeLabel: '13:30 – 14:00' },
			{ startMin: 360, endMin: 390, title: 'Invited Speaker 9', type: 'talk', timeLabel: '14:00 – 14:30' },
			{ startMin: 390, endMin: 420, title: 'Invited Speaker 10', type: 'talk', timeLabel: '14:30 – 15:00' },
			{ startMin: 420, endMin: 450, title: 'Jose Fernando Mendes', subtitle: 'MDPI Entropy / Complexities', type: 'editor', timeLabel: '15:00 – 15:30' },
			{ startMin: 450, endMin: 480, title: 'Coffee Break', type: 'break', timeLabel: '15:30 – 16:00' },
			{ startMin: 480, endMin: 570, title: 'Parallel Session 4', type: 'parallel', timeLabel: '16:00 – 17:30' },
			{ startMin: 660, endMin: 780, title: 'Conference Dinner', subtitle: 'Nanyang Lake Pavilion', type: 'social', timeLabel: '19:00 – 21:30' }
		]
	},
	{
		label: 'Friday',
		shortLabel: 'Fri',
		date: '12 June',
		subtitle: 'Conference Day 3',
		gridSessions: [
			{ startMin: 0, endMin: 45, title: 'Registration', type: 'registration', timeLabel: '08:00 – 08:45' },
			{ startMin: 45, endMin: 85, title: 'Invited Speaker 11', type: 'talk', timeLabel: '08:45 – 09:25' },
			{ startMin: 85, endMin: 125, title: 'Invited Speaker 12', type: 'talk', timeLabel: '09:25 – 10:05' },
			{ startMin: 125, endMin: 150, title: 'Invited Speaker 13', type: 'talk', timeLabel: '10:05 – 10:30' },
			{ startMin: 150, endMin: 180, title: 'Coffee Break', type: 'break', timeLabel: '10:30 – 11:00' },
			{ startMin: 180, endMin: 270, title: 'Parallel Session 5', type: 'parallel', timeLabel: '11:00 – 12:30' },
			{ startMin: 270, endMin: 285, title: 'Closing Address', type: 'ceremony', timeLabel: '12:30 – 12:45' },
			{ startMin: 300, endMin: 585, title: 'Social Visit to Gardens by the Bay', subtitle: 'Bus trip \u2022 Late lunch \u2022 Flower Dome \u2022 Cloud Forest \u2022 Light show at 19:45 (optional) \u2022 Dinner at Lau Pa Sat \u2022 Bus back to NEC', type: 'social', timeLabel: '13:00 – Evening' }
		]
	}
];
