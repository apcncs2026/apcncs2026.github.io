
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

	<section class="py-16 px-4 bg-base-200">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-4xl font-bold text-center mb-12">Confirmed Speakers</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each invitedSpeakers as speaker}
					<SpeakerCard {speaker} cardBgClass="bg-white" />
				{/each}
			</div>
		</div>
	</section>

	<section class="py-16 px-4">
		<div class="max-w-6xl mx-auto">
			<!-- <h2 class="text-4xl font-bold text-center mb-12">Invited Speakers</h2> -->
			<div class="prose prose-lg max-w-4xl mx-auto">
				<h3 class="text-2xl font-bold mb-6">To Be Announced</h3>
				<p>Information about invited speakers will be updated soon.</p>
				<p>Please check back later for the list of distinguished speakers who will be presenting at APCNCS 2026.</p>
			</div>
		</div>
	</section>
</div>