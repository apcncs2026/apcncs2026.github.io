
<script lang="ts">
	import { getHeroBackgroundStyle } from '$lib/config/heroImages';
	import { invitedSpeakers } from '$lib/data/speakers';
	import SpeakerCard from '$lib/components/SpeakerCard.svelte';
</script>

<svelte:head>
	<title>Invited Speakers - APCNCS 2026</title>
	<meta name="description" content="Invited speakers for Asia-Pacific Summer School and Conference on Networks and Complex Systems">
</svelte:head>

<div class="min-h-screen">
	<section class="hero hero-bg hero-page" style={getHeroBackgroundStyle('speakers')}>
		<div class="hero-content text-center hero-content-overlay">
			<div class="max-w-4xl">
				<h1 class="text-5xl font-bold hero-text mb-4">Invited Speakers</h1>
				<p class="text-xl hero-text-secondary">APCNCS 2026 Speaker Information</p>
			</div>
		</div>
	</section>

	{#each [1, 2, 3] as tier, index}
		{@const tierSpeakers = invitedSpeakers.filter(s => s.tier === tier)}
		{@const lgRem = tierSpeakers.length % 3}
		{@const lgFirstOfLastRow = tierSpeakers.length - lgRem}
		{@const mdRem = tierSpeakers.length % 2}
		{@const mdFirstOfLastRow = tierSpeakers.length - mdRem}
		<section class="py-16 px-4 {index % 2 === 0 ? 'bg-base-200' : ''}">
			<div class="max-w-6xl mx-auto">
				{#if index === 0}
					<h2 class="text-4xl font-bold text-center mb-12">Confirmed Speakers</h2>
				{/if}
				<div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8">
					{#each tierSpeakers as speaker, i}
						{@const needsMdStart = mdRem === 1 && i === mdFirstOfLastRow}
						{@const needsLgStart = lgRem !== 0 && i === lgFirstOfLastRow}
						{@const mdStartClass = needsMdStart ? 'md:col-start-2' : ''}
						{@const lgStartClass = needsLgStart
							? (lgRem === 1 ? 'lg:col-start-3' : 'lg:col-start-2')
							: (needsMdStart ? 'lg:col-start-auto' : '')}
						<div class="h-full md:col-span-2 {mdStartClass} {lgStartClass}">
							<SpeakerCard {speaker} cardBgClass="{index % 2 === 0 ? 'bg-white' : 'bg-base-200'}" />
						</div>
					{/each}
				</div>
			</div>
		</section>
	{/each}

	<!-- <section class="py-16 px-4">
		<div class="max-w-6xl mx-auto">
			<div class="prose prose-lg max-w-4xl mx-auto">
				<h3 class="text-2xl font-bold mb-6">To Be Announced</h3>
				<p>Information about invited speakers will be updated soon.</p>
				<p>Please check back later for the list of distinguished speakers who will be presenting at APCNCS 2026.</p>
			</div>
		</div>
	</section> -->
</div>