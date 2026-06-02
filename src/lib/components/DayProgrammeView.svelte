<script lang="ts">
	import { getHeroBackgroundStyle } from '$lib/config/heroImages';
	import Icon from '$lib/components/Icon.svelte';
	import { dayDetails, abstractUrl, type DayDetail, type DayItem, type Talk } from '$lib/data/programmeDetail';

	interface Props {
		day: DayDetail;
	}
	let { day }: Props = $props();

	function isInvited(item: DayItem): item is Extract<DayItem, { kind: 'invited' }> {
		return item.kind === 'invited';
	}
	function isParallel(item: DayItem): item is Extract<DayItem, { kind: 'parallel' }> {
		return item.kind === 'parallel';
	}
	function isBlock(item: DayItem): item is Extract<DayItem, { kind: 'registration' | 'break' | 'note' }> {
		return item.kind === 'registration' || item.kind === 'break' || item.kind === 'note';
	}

	function isPanel(t: Talk): boolean {
		return !!t.panelists;
	}
</script>

<svelte:head>
	<title>Detailed Programme — {day.label}, {day.date} | APCNCS 2026</title>
	<meta name="description" content="Detailed conference programme for {day.label}, {day.date}." />
</svelte:head>

{#snippet abstractLink(t: Talk)}
	{#if t.abstract}
		<a
			href={abstractUrl(t.abstract)}
			download
			class="inline-flex items-center gap-1 mt-1 text-sm text-primary hover:underline"
		>
			<Icon name="file-text" class_="w-4 h-4" />
			Download abstract
		</a>
	{/if}
{/snippet}

<div class="min-h-screen">
	<section class="hero hero-bg hero-page" style={getHeroBackgroundStyle('programme')}>
		<div class="hero-content text-center hero-content-overlay">
			<div class="max-w-4xl">
				<h1 class="text-4xl md:text-5xl font-bold hero-text mb-3">Detailed Programme</h1>
				<p class="text-2xl md:text-3xl hero-text-secondary font-semibold">{day.label}, {day.date}</p>
				<p class="text-lg hero-text-secondary opacity-80 mt-1">{day.subtitle}</p>
			</div>
		</div>
	</section>

	<!-- Day navigation -->
	<section class="py-4 px-4 bg-base-200 sticky top-0 z-30 shadow-sm">
		<div class="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-2">
			<a href="/programme" class="btn btn-sm btn-ghost gap-1">
				<Icon name="grid" class_="w-4 h-4" />
				At a glance
			</a>
			<span class="text-base-content/40">|</span>
			{#each dayDetails as d}
				<a
					href="/programme/{d.slug}"
					class="btn btn-sm gap-1.5 {d.slug === day.slug ? 'btn-primary' : 'btn-ghost bg-base-100'}"
				>
					<Icon name="calendar" class_="w-4 h-4" />
					{d.shortLabel} {d.date.replace(' 2026', '')}
				</a>
			{/each}
		</div>
	</section>

	<section class="py-10 px-4">
		<div class="max-w-5xl mx-auto flex flex-col gap-6">
			{#each day.items as item}
				{#if isBlock(item)}
					<!-- Block: registration / break -->
					<div class="flex flex-wrap items-center gap-3 px-4 py-3 rounded-lg bg-base-200 border border-base-300">
						<span class="font-mono text-sm text-base-content/70 min-w-[7rem]">{item.time}</span>
						<span class="font-semibold">{item.title}</span>
						{#if item.location}
							<span class="text-sm text-base-content/60 flex items-center gap-1">
								<Icon name="map-pin" class_="w-4 h-4" />
								{item.location}
							</span>
						{/if}
					</div>
				{:else if isInvited(item)}
					<!-- Invited session -->
					<div class="card bg-base-100 shadow-md border border-base-300">
						<div class="card-body p-0">
							<div class="bg-primary text-primary-content px-5 py-3 rounded-t-2xl">
								<div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
									<h2 class="text-xl font-bold">Invited Session {item.number}</h2>
									<div class="text-sm font-mono opacity-90">{item.time}</div>
								</div>
								<div class="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-sm opacity-90">
									<span class="flex items-center gap-1">
										<Icon name="map-pin" class_="w-4 h-4" />
										{item.location}
									</span>
									{#if item.chair}
										<span><span class="opacity-80">Chair:</span> {item.chair}</span>
									{/if}
								</div>
							</div>
							<div class="px-5 py-4 flex flex-col gap-4">
								{#each item.talks as t}
									<div class="border-l-4 border-primary/40 pl-4">
										<div class="font-mono text-xs text-base-content/60">{t.time}</div>
										{#if t.prefix}
											<div class="text-sm font-semibold text-primary mt-0.5">{t.prefix}{t.panelTitle ? `: ${t.panelTitle}` : ''}</div>
										{:else if t.panelTitle}
											<div class="text-sm font-semibold text-primary mt-0.5">{t.panelTitle}</div>
										{/if}
										{#if isPanel(t)}
											<ul class="mt-2 space-y-1 text-sm">
												{#each t.panelists ?? [] as p}
													<li>
														<span class="text-base-content/40">•</span>
														{p.name}{#if p.note}: <span class="opacity-70">{p.note}</span>{/if}
													</li>
												{/each}
												{#if t.moderator}
													<li class="pt-1">
														<span class="text-base-content/60">Moderator:</span> {t.moderator}
													</li>
												{/if}
											</ul>
										{:else}
											{#if t.speaker}
												<div class="font-semibold mt-0.5">{t.speaker}</div>
											{/if}
											{#if t.title}
												<div class="text-base-content/80">{t.title}</div>
											{/if}
											{@render abstractLink(t)}
										{/if}
									</div>
								{/each}
							</div>
						</div>
					</div>
				{:else if isParallel(item)}
					<!-- Parallel session -->
					<div class="card bg-base-100 shadow-md border border-base-300">
						<div class="card-body p-0">
							<div class="bg-secondary text-secondary-content px-5 py-3 rounded-t-2xl">
								<div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
									<h2 class="text-xl font-bold">Parallel Session {item.number}</h2>
									<div class="text-sm font-mono opacity-90">{item.time}</div>
								</div>
							</div>
							<div class="px-5 py-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
								{#each item.tracks as track}
									<div class="rounded-lg border border-base-300 bg-base-100 p-4">
										<div class="border-b border-base-300 pb-2 mb-3">
											<h3 class="font-bold text-base text-secondary">{track.name}</h3>
											<div class="flex flex-wrap gap-x-3 gap-y-0.5 mt-1 text-xs text-base-content/60">
												<span class="flex items-center gap-1">
													<Icon name="map-pin" class_="w-3.5 h-3.5" />
													{track.location}
												</span>
												{#if track.chair}
													<span>Chair: {track.chair}</span>
												{/if}
											</div>
										</div>
										{#if track.tba}
											<p class="text-sm italic text-base-content/60">Programme to be announced.</p>
										{:else}
											<ul class="flex flex-col gap-2.5">
												{#each track.talks as t}
													<li class="text-sm">
														<div class="font-mono text-xs text-base-content/60">{t.time}</div>
														{#if t.speaker}
															<div class="font-semibold leading-snug">{t.speaker}</div>
														{/if}
														{#if t.title}
															<div class="text-base-content/80 leading-snug">{t.title}</div>
														{/if}
														{@render abstractLink(t)}
													</li>
												{/each}
											</ul>
										{/if}
									</div>
								{/each}
							</div>
						</div>
					</div>
				{/if}
			{/each}

			<div class="alert alert-info mt-4">
				<Icon name="info" class_="stroke-current shrink-0 w-5 h-5" />
				<span class="text-sm">Programme is subject to change. Talk titles marked “TBC” will be updated as they are confirmed.</span>
			</div>
		</div>
	</section>
</div>
