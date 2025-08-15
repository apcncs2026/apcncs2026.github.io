<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import Email from '$lib/components/Email.svelte';

	interface Sponsor {
		name: string;
		tier: 'institutional' | 'sponsors' | 'technical';
		logo?: string;
		description: string;
		website: string;
	}

	const sponsors: Sponsor[] = [
	];

	const institutionalSponsors = sponsors.filter(s => s.tier === 'institutional');
	const sponsorsSponsors = sponsors.filter(s => s.tier === 'sponsors');
	const technicalSponsors = sponsors.filter(s => s.tier === 'technical');
</script>

<svelte:head>
	<title>Sponsors - APSCONS 2026</title>
	<meta name="description" content="Conference sponsors and partnership opportunities">
</svelte:head>

<div class="min-h-screen">
	<section class="hero hero-gradient py-20">
		<div class="hero-content text-center">
			<div class="max-w-4xl">
				<h1 class="text-5xl font-bold hero-text mb-4">Sponsors</h1>
			</div>
		</div>
	</section>

	<section class="py-16 px-4">
		<div class="max-w-6xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-4xl font-bold mb-4">Institutional Sponsors</h2>
				<div class="divider max-w-xs mx-auto"></div>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
				{#each institutionalSponsors as sponsor}
					<div class="card bg-gradient-to-br from-gray-100 to-gray-200 shadow-xl border-2 border-gray-300">
						<div class="card-body items-center text-center">
							<div class="w-48 h-24 bg-gray-300 rounded-lg flex items-center justify-center mb-4">
								{#if sponsor.logo}
									<img src={sponsor.logo} alt={sponsor.name} class="max-w-full max-h-full object-contain" />
								{:else}
									<span class="text-2xl font-bold text-gray-600">{sponsor.name}</span>
								{/if}
							</div>
							<h3 class="card-title text-2xl">{sponsor.name}</h3>
							<p>{sponsor.description}</p>
							<a href={sponsor.website} target="_blank" class="btn btn-primary mt-4">Visit Website</a>
						</div>
					</div>
				{/each}
			</div>

			<div class="text-center mb-12">
				<h2 class="text-4xl font-bold mb-4">Sponsors</h2>
				<div class="divider max-w-xs mx-auto"></div>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
				{#each sponsorsSponsors as sponsor}
					<div class="card bg-base-200 shadow-lg">
						<div class="card-body items-center text-center">
							<div class="w-32 h-20 bg-gray-300 rounded-lg flex items-center justify-center mb-3">
								{#if sponsor.logo}
									<img src={sponsor.logo} alt={sponsor.name} class="max-w-full max-h-full object-contain" />
								{:else}
									<span class="text-lg font-bold text-gray-600">{sponsor.name}</span>
								{/if}
							</div>
							<h3 class="card-title">{sponsor.name}</h3>
							<p class="text-sm">{sponsor.description}</p>
						</div>
					</div>
				{/each}
			</div>

			<div class="text-center mb-12">
				<h2 class="text-4xl font-bold mb-4">Technical Sponsors</h2>
				<div class="divider max-w-xs mx-auto"></div>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
				{#each technicalSponsors as sponsor}
					<div class="card bg-base-200 shadow-lg">
						<div class="card-body items-center text-center">
							<div class="w-32 h-20 bg-gray-300 rounded-lg flex items-center justify-center mb-3">
								{#if sponsor.logo}
									<img src={sponsor.logo} alt={sponsor.name} class="max-w-full max-h-full object-contain" />
								{:else}
									<span class="text-lg font-bold text-gray-600">{sponsor.name}</span>
								{/if}
							</div>
							<h3 class="card-title">{sponsor.name}</h3>
							<p class="text-sm">{sponsor.description}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-16 px-4 bg-conf-primary text-white">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl font-bold mb-6">Interested in Sponsoring?</h2>
			<p class="text-xl mb-8">
				For any sponsorship options, please contact us at: <Email email="someone@example.com" class_="text-white underline" />
			</p>
		</div>
	</section>
</div>