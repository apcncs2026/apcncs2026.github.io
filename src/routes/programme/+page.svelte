<script lang="ts">
	import { getHeroBackgroundStyle } from '$lib/config/heroImages';
	import { days, allSessionTypes, sessionTypeConfig, typeClasses, type GridSession } from '$lib/data/programme';

	const SCALE = 4; // px per minute
	const GRID_END = 610; // 08:00–18:10 (buffer past 18:00)
	const GRID_HEIGHT = GRID_END * SCALE;
	const gridHours = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
	const gridHalfHours = ['08:30', '09:30', '10:30', '11:30', '12:30', '13:30', '14:30', '15:30', '16:30', '17:30'];

	let activeDay = $state(0);

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
				{#each allSessionTypes as type}
					<div class="flex items-center gap-1.5">
						<span class="w-3 h-3 rounded-sm shrink-0 {sessionTypeConfig[type].badge}"></span>
						<span class="text-sm text-base-content/70">{sessionTypeConfig[type].label}</span>
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
					{#each gridHours as hour, i}
						<span
							class="absolute right-3 text-xs font-mono text-base-content/60 font-bold -translate-y-1/2"
							style="top: {i * 60 * SCALE}px"
						>{hour}</span>
					{/each}
					{#each gridHalfHours as half, i}
						<span
							class="absolute right-3 text-[10px] font-mono text-base-content/30 -translate-y-1/2"
							style="top: {(i * 60 + 30) * SCALE}px"
						>{half}</span>
					{/each}
				</div>

				<!-- Session Grid -->
				<div class="flex-1 relative" style="height: {GRID_HEIGHT}px">
					<!-- Hour Grid Lines -->
					{#each gridHours as _, i}
						<div
							class="absolute left-0 right-0 border-base-content/50"
							style="top: {i * 60 * SCALE - LINE / 2}px; height: {LINE}px; border-top-width: {LINE}px"
						></div>
					{/each}

					<!-- Half-hour Lines -->
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
										class="absolute left-0 right-0 border-l-4 rounded-r overflow-hidden {typeClasses(session.type)}"
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
									<div class="border-l-4 rounded-r p-3 {typeClasses(day.eveningEvent.type)}">
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
								<div class="border-l-4 rounded-r-lg px-4 py-3 {typeClasses(session.type)}">
									<div class="font-mono text-xs opacity-60">{session.timeLabel}</div>
									<div class="font-semibold leading-tight mt-0.5">{session.title}</div>
									{#if session.subtitle}
										<p class="text-sm opacity-75 mt-1">{session.subtitle}</p>
									{/if}
								</div>
							{/each}

							{#if day.eveningEvent}
								<div class="border-l-4 rounded-r-lg px-4 py-3 mt-2 {typeClasses(day.eveningEvent.type)}">
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
