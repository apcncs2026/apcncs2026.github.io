<script lang="ts">
	import Email from '$lib/components/Email.svelte';
	import SponsorSection from '$lib/components/SponsorSection.svelte';
	import { getHeroBackgroundStyle } from '$lib/config/heroImages';
	import { sponsors } from '$lib/data/sponsors';

	const { institutionalSponsors, keySponsors, regularSponsors, technicalSponsors } = sponsors;

	// Create sections array with configuration
	const sections = [
		{
			title: 'Institutional Sponsor',
			sponsors: institutionalSponsors,
			logoHeight: 'max-h-28',
			gridCols: 'flex',
			titleSize: 'text-xl',
			showNames: false // Logo has the name
		},
		{
			title: 'Key Sponsors',
			sponsors: keySponsors,
			logoHeight: 'max-h-28',
			gridCols: 'flex',
			titleSize: 'text-xl',
			showNames: false // Logo has the name
		},
		{
			title: 'Sponsors',
			sponsors: regularSponsors,
			logoHeight: 'max-h-28',
			gridCols: 'flex',
			titleSize: 'text-xl',
			showNames: false
		},
		{
			title: 'Technical Sponsors',
			sponsors: technicalSponsors,
			logoHeight: 'max-h-28',
			gridCols: 'flex',
			titleSize: 'text-xl',
			showNames: false
		}
	].map((section, index) => ({
		...section,
		sectionBgClass: index % 2 === 0 ? '' : 'bg-base-200'
	}));
</script>

<svelte:head>
	<title>Sponsors - APCNCS 2026</title>
	<meta name="description" content="Conference sponsors and partnership opportunities">
</svelte:head>

<div class="min-h-screen">
	<section class="hero hero-bg hero-page" style={getHeroBackgroundStyle('sponsors')}>
		<div class="hero-content text-center hero-content-overlay">
			<div class="max-w-4xl">
				<h1 class="text-5xl font-bold hero-text mb-4">Sponsors</h1>
			</div>
		</div>
	</section>

	{#each sections as section}
		<SponsorSection
			title={section.title}
			sponsors={section.sponsors}
			logoHeight={section.logoHeight}
			gridCols={section.gridCols}
			titleSize={section.titleSize}
			sectionBgClass={section.sectionBgClass}
			showNames={section.showNames}
		/>
	{/each}

	<section class="py-16 px-4 bg-conf-primary text-white">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl font-bold mb-6">Interested in Sponsoring?</h2>
			<p class="text-xl mb-8">
				For any sponsorship options, please contact us at: <Email email="SPMS-APCNCS2026@ntu.edu.sg" class_="text-white underline" />
			</p>
		</div>
	</section>
</div>