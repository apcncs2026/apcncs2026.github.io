<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import Email from '$lib/components/Email.svelte';
	import { getHeroBackgroundStyle } from '$lib/config/heroImages';
	import { sponsors } from '$lib/data/sponsors';

	const { institutionalSponsors, keySponsors, regularSponsors, technicalSponsors } = sponsors;
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

	<section class="py-16 px-4">
		<div class="max-w-6xl mx-auto">
			{#if institutionalSponsors.length > 0}
				<div class="text-center mb-12">
					<h2 class="text-4xl font-bold mb-4">Institutional Sponsor</h2>
					<div class="divider max-w-xs mx-auto"></div>
				</div>
				<div class="flex justify-center mb-16">
					{#each institutionalSponsors as sponsor}
						<div class="flex flex-col items-center text-center">
							{#if sponsor.url}
								<a href={sponsor.url} target="_blank" rel="noopener noreferrer" class="block hover:opacity-80 transition-opacity">
									<img src={sponsor.logo} alt={sponsor.name} class="max-h-40 w-auto" />
								</a>
							{:else}
								<img src={sponsor.logo} alt={sponsor.name} class="max-h-40 w-auto" />
							{/if}
							<h3 class="text-2xl font-semibold mt-6">{sponsor.name}</h3>
						</div>
					{/each}
				</div>
			{/if}

			{#if keySponsors.length > 0}
				<div class="text-center mb-12">
					<h2 class="text-4xl font-bold mb-4">Key Sponsors</h2>
					<div class="divider max-w-xs mx-auto"></div>
				</div>
				<div class="flex justify-center gap-12 mb-16">
					{#each keySponsors as sponsor}
						<div class="flex flex-col items-center text-center">
							{#if sponsor.url}
								<a href={sponsor.url} target="_blank" rel="noopener noreferrer" class="block hover:opacity-80 transition-opacity">
									<img src={sponsor.logo} alt={sponsor.name} class="max-h-32 w-auto" />
								</a>
							{:else}
								<img src={sponsor.logo} alt={sponsor.name} class="max-h-32 w-auto" />
							{/if}
							<h3 class="text-xl font-semibold mt-4">{sponsor.name}</h3>
						</div>
					{/each}
				</div>
			{/if}

			{#if regularSponsors.length > 0}
				<div class="text-center mb-12">
					<h2 class="text-4xl font-bold mb-4">Sponsors</h2>
					<div class="divider max-w-xs mx-auto"></div>
				</div>
				<div class="grid grid-cols-2 md:grid-cols-3 gap-12 mb-16">
					{#each regularSponsors as sponsor}
						<div class="flex flex-col items-center text-center">
							{#if sponsor.url}
								<a href={sponsor.url} target="_blank" rel="noopener noreferrer" class="block hover:opacity-80 transition-opacity">
									<img src={sponsor.logo} alt={sponsor.name} class="max-h-20 w-auto" />
								</a>
							{:else}
								<img src={sponsor.logo} alt={sponsor.name} class="max-h-20 w-auto" />
							{/if}
							<h3 class="text-lg font-semibold mt-3">{sponsor.name}</h3>
						</div>
					{/each}
				</div>
			{/if}

			{#if technicalSponsors.length > 0}
				<div class="text-center mb-12">
					<h2 class="text-4xl font-bold mb-4">Technical Sponsors</h2>
					<div class="divider max-w-xs mx-auto"></div>
				</div>
				<div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
					{#each technicalSponsors as sponsor}
						<div class="flex flex-col items-center text-center">
							{#if sponsor.url}
								<a href={sponsor.url} target="_blank" rel="noopener noreferrer" class="block hover:opacity-80 transition-opacity">
									<img src={sponsor.logo} alt={sponsor.name} class="max-h-16 w-auto" />
								</a>
							{:else}
								<img src={sponsor.logo} alt={sponsor.name} class="max-h-16 w-auto" />
							{/if}
							<h3 class="text-sm font-semibold mt-2">{sponsor.name}</h3>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</section>

	<section class="py-16 px-4 bg-conf-primary text-white">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl font-bold mb-6">Interested in Sponsoring?</h2>
			<p class="text-xl mb-8">
				For any sponsorship options, please contact us at: <Email email="SPMS-APCNCS2026@ntu.edu.sg" class_="text-white underline" />
			</p>
		</div>
	</section>
</div>