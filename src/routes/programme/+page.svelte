<script lang="ts">
	import { getHeroBackgroundStyle } from '$lib/config/heroImages';

	type SessionType = 'registration' | 'talk' | 'lecture' | 'break' | 'panel' | 'parallel' | 'social' | 'ceremony' | 'editor';

	interface GridSession {
		startMin: number; // minutes from 08:00
		endMin: number;
		title: string;
		subtitle?: string;
		type: SessionType;
		timeLabel: string;
	}

	interface DayData {
		label: string;
		shortLabel: string;
		date: string;
		subtitle: string;
		gridSessions: GridSession[];
		eveningEvent?: { title: string; subtitle?: string; timeLabel: string; type: SessionType };
	}

	const SCALE = 4; // px per minute
	const GRID_END = 610; // 08:00–18:10 (buffer past 18:00)
	const GRID_HEIGHT = GRID_END * SCALE;
	const gridHours = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
	const gridHalfHours = ['08:30', '09:30', '10:30', '11:30', '12:30', '13:30', '14:30', '15:30', '16:30', '17:30'];

	const days: DayData[] = [
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
				{ startMin: 420, endMin: 480, title: 'Writing, Publishing Strategies, Peer Review Insights', subtitle: 'Lecture 5', type: 'lecture', timeLabel: '15:00 – 16:00' },
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
				{ startMin: 480, endMin: 570, title: 'Parallel Session 4', type: 'parallel', timeLabel: '16:00 – 17:30' }
			],
			eveningEvent: { title: 'Conference Dinner', subtitle: 'Nanyang Lake Pavilion', timeLabel: '19:00', type: 'social' }
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

	let activeDay = $state(0);

	function typeColor(type: SessionType): string {
		switch (type) {
			case 'registration': return 'border-green-500 bg-green-50 text-green-900';
			case 'talk': return 'border-amber-500 bg-amber-50 text-amber-900';
			case 'lecture': return 'border-blue-500 bg-blue-50 text-blue-900';
			case 'break': return 'border-gray-400 bg-gray-100 text-gray-500';
			case 'panel': return 'border-purple-500 bg-purple-50 text-purple-900';
			case 'parallel': return 'border-indigo-500 bg-indigo-50 text-indigo-900';
			case 'social': return 'border-cyan-500 bg-cyan-50 text-cyan-900';
			case 'ceremony': return 'border-rose-500 bg-rose-50 text-rose-900';
			case 'editor': return 'border-red-500 bg-red-50 text-red-900';
		}
	}

	function typeBadgeColor(type: SessionType): string {
		switch (type) {
			case 'registration': return 'bg-green-500';
			case 'talk': return 'bg-amber-500';
			case 'lecture': return 'bg-blue-500';
			case 'break': return 'bg-gray-400';
			case 'panel': return 'bg-purple-500';
			case 'parallel': return 'bg-indigo-500';
			case 'social': return 'bg-cyan-500';
			case 'ceremony': return 'bg-rose-500';
			case 'editor': return 'bg-red-500';
		}
	}

	function typeLabel(type: SessionType): string {
		switch (type) {
			case 'registration': return 'Registration';
			case 'talk': return 'Invited Talk';
			case 'lecture': return 'Lecture';
			case 'break': return 'Break';
			case 'panel': return 'Panel';
			case 'parallel': return 'Parallel Session';
			case 'social': return 'Social Event';
			case 'ceremony': return 'Ceremony';
			case 'editor': return 'Meet the Editor';
		}
	}

	const allTypes: SessionType[] = ['ceremony', 'registration', 'lecture', 'talk', 'panel', 'editor', 'parallel', 'break', 'social'];

	const GAP = 4; // px gap between sessions
	const LINE = 2; // px grid line thickness

	function sessionTop(s: GridSession): number {
		return s.startMin * SCALE + GAP;
	}

	function sessionHeight(s: GridSession): number {
		return (s.endMin - s.startMin) * SCALE - GAP * 2;
	}
</script>

<svelte:head>
	<title>Programme - APCNCS 2026</title>
	<meta name="description" content="Conference programme and schedule for APCNCS 2026 - June 9-12, 2026">
</svelte:head>

<div class="min-h-screen">
	<section class="hero hero-bg hero-page" style={getHeroBackgroundStyle('programme')}>
		<div class="hero-content text-center hero-content-overlay">
			<div class="max-w-4xl">
				<h1 class="text-5xl font-bold hero-text mb-4">Programme</h1>
				<p class="text-xl hero-text-secondary">9 – 12 June 2026</p>
			</div>
		</div>
	</section>

	<!-- Legend -->
	<section class="py-5 px-4 bg-base-200">
		<div class="max-w-7xl mx-auto">
			<div class="flex flex-wrap gap-x-4 gap-y-2 justify-center">
				{#each allTypes as type}
					<div class="flex items-center gap-1.5">
						<span class="w-3 h-3 rounded-sm shrink-0 {typeBadgeColor(type)}"></span>
						<span class="text-sm text-base-content/70">{typeLabel(type)}</span>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- ==================== DESKTOP: Proportional Grid ==================== -->
	<section class="hidden lg:block py-8 px-4">
		<div class="max-w-7xl mx-auto">
			<!-- Day Headers -->
			<div class="flex">
				<div class="w-[60px] shrink-0"></div>
				<div class="flex-1 grid grid-cols-4 gap-3">
					{#each days as day}
						<div class="text-center py-3 px-2 bg-primary text-primary-content rounded-t-xl">
							<div class="font-bold">{day.label}, {day.date}</div>
							<div class="text-sm opacity-85">{day.subtitle}</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Grid Body -->
			<div class="flex">
				<!-- Time Axis -->
				<div class="w-[60px] shrink-0 relative" style="height: {GRID_HEIGHT}px">
					<!-- Hour labels -->
					{#each gridHours as hour, i}
						<span
							class="absolute right-3 text-xs font-mono text-base-content/60 font-bold -translate-y-1/2"
							style="top: {i * 60 * SCALE}px"
						>{hour}</span>
					{/each}
					<!-- Half-hour labels -->
					{#each gridHalfHours as half, i}
						<span
							class="absolute right-3 text-[10px] font-mono text-base-content/30 -translate-y-1/2"
							style="top: {(i * 60 + 30) * SCALE}px"
						>{half}</span>
					{/each}
				</div>

				<!-- Session Grid -->
				<div class="flex-1 relative" style="height: {GRID_HEIGHT}px">
					<!-- Hour Grid Lines (solid, strong) -->
					{#each gridHours as _, i}
						<div
							class="absolute left-0 right-0 border-base-content/50"
							style="top: {i * 60 * SCALE - LINE / 2}px; height: {LINE}px; border-top-width: {LINE}px"
						></div>
					{/each}

					<!-- Half-hour Lines (dashed) -->
					{#each gridHalfHours as _, i}
						<div
							class="absolute left-0 right-0 border-dashed border-base-content/50"
							style="top: {(i * 60 + 30) * SCALE - LINE / 2}px; height: {LINE}px; border-top-width: {LINE}px"
						></div>
					{/each}

					<!-- Day Columns -->
					<div class="grid grid-cols-4 gap-3 absolute inset-0">
						{#each days as day}
							<div class="relative">
								{#each day.gridSessions as session, si}
									{@const h = sessionHeight(session)}
									<div
										class="absolute left-0 right-0 border-l-4 rounded-r overflow-hidden {typeColor(session.type)}"
										style="top: {sessionTop(session)}px; height: {h}px; z-index: {si + 1};"
									>
										<div class="px-2 py-0.5 h-full flex flex-col justify-center" style="font-size: {h < 30 ? '9px' : h < 50 ? '10px' : '11px'}">
											<div class="font-mono leading-tight opacity-50">{session.timeLabel}</div>
											<div class="font-semibold leading-tight">{session.title}</div>
											{#if session.subtitle}
												<div class="leading-tight opacity-60 line-clamp-{h >= 110 ? 3 : h >= 60 ? 2 : 1}">{session.subtitle}</div>
											{/if}
										</div>
									</div>
								{/each}
							</div>
						{/each}
					</div>
				</div>
			</div>

			<!-- Evening Events -->
			{#if days.some(d => d.eveningEvent)}
				<div class="flex mt-4">
					<div class="w-[60px] shrink-0"></div>
					<div class="flex-1 grid grid-cols-4 gap-3">
						{#each days as day}
							<div>
								{#if day.eveningEvent}
									<div class="border-l-4 rounded-r p-3 {typeColor(day.eveningEvent.type)}">
										<div class="font-mono text-[10px] opacity-50">{day.eveningEvent.timeLabel}</div>
										<div class="font-semibold text-sm">{day.eveningEvent.title}</div>
										{#if day.eveningEvent.subtitle}
											<div class="text-xs opacity-60 mt-0.5">{day.eveningEvent.subtitle}</div>
										{/if}
									</div>
								{/if}
							</div>
						{/each}
					</div>
				</div>
			{/if}

			<!-- Info -->
			<div class="mt-8">
				<div class="alert alert-info">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
					<div>
						<p class="font-semibold">Programme is subject to change.</p>
						<p class="text-sm">Invited speaker names and parallel session details will be updated as they are confirmed.</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- ==================== MOBILE: Tabbed List ==================== -->
	<section class="lg:hidden">
		<div class="py-4 px-4 bg-base-200 sticky top-0 z-30 shadow-sm">
			<div class="flex gap-1.5 justify-center">
				{#each days as day, i}
					<button
						class="btn btn-sm {activeDay === i ? 'btn-primary' : 'btn-ghost bg-base-100'} flex-col h-auto py-2 px-4"
						onclick={() => activeDay = i}
					>
						<span class="text-[10px] opacity-70 uppercase tracking-wider">{day.date}</span>
						<span class="font-bold text-xs">{day.shortLabel}</span>
					</button>
				{/each}
			</div>
		</div>

		<div class="py-6 px-4">
			<div class="max-w-2xl mx-auto">
				{#each days as day, dayIndex}
					{#if activeDay === dayIndex}
						<div class="mb-6">
							<h2 class="text-2xl font-bold">{day.label}, {day.date}</h2>
							<p class="text-base-content/60">{day.subtitle}</p>
						</div>

						<div class="flex flex-col gap-2">
							{#each day.gridSessions as session}
								<div class="border-l-4 rounded-r-lg px-4 py-3 {typeColor(session.type)}">
									<div class="font-mono text-xs opacity-60">{session.timeLabel}</div>
									<div class="font-semibold leading-tight mt-0.5">{session.title}</div>
									{#if session.subtitle}
										<p class="text-sm opacity-75 mt-1">{session.subtitle}</p>
									{/if}
								</div>
							{/each}

							{#if day.eveningEvent}
								<div class="border-l-4 rounded-r-lg px-4 py-3 mt-2 {typeColor(day.eveningEvent.type)}">
									<div class="font-mono text-xs opacity-60">{day.eveningEvent.timeLabel}</div>
									<div class="font-semibold leading-tight mt-0.5">{day.eveningEvent.title}</div>
									{#if day.eveningEvent.subtitle}
										<p class="text-sm opacity-75 mt-1">{day.eveningEvent.subtitle}</p>
									{/if}
								</div>
							{/if}
						</div>

						<div class="mt-6">
							<div class="alert alert-info text-sm">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
								<span>Programme is subject to change.</span>
							</div>
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</section>
</div>
