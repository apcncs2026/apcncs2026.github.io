<script lang="ts">
	interface Sponsor {
		name: string;
		tier: 'platinum' | 'gold' | 'silver' | 'bronze';
		logo?: string;
		description: string;
		website: string;
	}

	interface SponsorshipTier {
		name: string;
		price: string;
		benefits: string[];
		available: boolean;
	}

	const sponsors: Sponsor[] = [
		{
			name: "TechCorp Industries",
			tier: "platinum",
			description: "Leading technology solutions provider",
			website: "https://example.com"
		},
		{
			name: "Research Foundation International",
			tier: "platinum",
			description: "Supporting scientific research worldwide",
			website: "https://example.com"
		},
		{
			name: "Innovation Labs",
			tier: "gold",
			description: "Advancing AI and machine learning research",
			website: "https://example.com"
		},
		{
			name: "Global Science Publishers",
			tier: "gold",
			description: "Academic publishing and knowledge dissemination",
			website: "https://example.com"
		},
		{
			name: "DataTech Solutions",
			tier: "silver",
			description: "Big data analytics and cloud computing",
			website: "https://example.com"
		},
		{
			name: "BioMed Instruments",
			tier: "silver",
			description: "Cutting-edge biomedical research equipment",
			website: "https://example.com"
		},
		{
			name: "Academic Software Co.",
			tier: "bronze",
			description: "Educational software and learning platforms",
			website: "https://example.com"
		},
		{
			name: "Science Equipment Ltd.",
			tier: "bronze",
			description: "Laboratory equipment and supplies",
			website: "https://example.com"
		}
	];

	const sponsorshipTiers: SponsorshipTier[] = [
		{
			name: "Platinum Sponsor",
			price: "$25,000+",
			benefits: [
				"Premium logo placement on all conference materials",
				"Keynote speaking opportunity",
				"Exhibition booth in prime location",
				"10 complimentary registrations",
				"Full-page ad in conference proceedings",
				"Logo on conference website homepage"
			],
			available: false
		},
		{
			name: "Gold Sponsor",
			price: "$15,000",
			benefits: [
				"Logo on conference materials",
				"Workshop hosting opportunity",
				"Exhibition booth",
				"5 complimentary registrations",
				"Half-page ad in conference proceedings",
				"Logo on sponsors page"
			],
			available: true
		},
		{
			name: "Silver Sponsor",
			price: "$10,000",
			benefits: [
				"Logo on select conference materials",
				"Exhibition table",
				"3 complimentary registrations",
				"Quarter-page ad in proceedings",
				"Logo on sponsors page"
			],
			available: true
		},
		{
			name: "Bronze Sponsor",
			price: "$5,000",
			benefits: [
				"Logo on sponsors page",
				"2 complimentary registrations",
				"Conference materials in delegate bags",
				"Recognition during opening ceremony"
			],
			available: true
		}
	];

	const platinumSponsors = sponsors.filter(s => s.tier === 'platinum');
	const goldSponsors = sponsors.filter(s => s.tier === 'gold');
	const silverSponsors = sponsors.filter(s => s.tier === 'silver');
	const bronzeSponsors = sponsors.filter(s => s.tier === 'bronze');
</script>

<svelte:head>
	<title>Sponsors - Academic Conference 2025</title>
	<meta name="description" content="Conference sponsors and partnership opportunities">
</svelte:head>

<div class="min-h-screen">
	<section class="hero bg-gradient-to-r from-primary to-secondary text-white py-20">
		<div class="hero-content text-center">
			<div class="max-w-4xl">
				<h1 class="text-5xl font-bold mb-4">Our Sponsors</h1>
				<p class="text-xl">Thank you to our generous sponsors who make this conference possible</p>
			</div>
		</div>
	</section>

	<section class="py-16 px-4">
		<div class="max-w-6xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-4xl font-bold mb-4">Platinum Sponsors</h2>
				<div class="divider max-w-xs mx-auto"></div>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
				{#each platinumSponsors as sponsor}
					<div class="card bg-gradient-to-br from-gray-100 to-gray-200 shadow-xl border-2 border-gray-300">
						<div class="card-body items-center text-center">
							<div class="w-48 h-24 bg-gray-300 rounded-lg flex items-center justify-center mb-4">
								<span class="text-2xl font-bold text-gray-600">{sponsor.name}</span>
							</div>
							<h3 class="card-title text-2xl">{sponsor.name}</h3>
							<p>{sponsor.description}</p>
							<a href={sponsor.website} target="_blank" class="btn btn-primary mt-4">Visit Website</a>
						</div>
					</div>
				{/each}
			</div>

			<div class="text-center mb-12">
				<h2 class="text-3xl font-bold mb-4">Gold Sponsors</h2>
				<div class="divider max-w-xs mx-auto"></div>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
				{#each goldSponsors as sponsor}
					<div class="card bg-base-200 shadow-lg">
						<div class="card-body items-center text-center">
							<div class="w-32 h-20 bg-gray-300 rounded-lg flex items-center justify-center mb-3">
								<span class="text-lg font-bold text-gray-600">{sponsor.name}</span>
							</div>
							<h3 class="card-title">{sponsor.name}</h3>
							<p class="text-sm">{sponsor.description}</p>
						</div>
					</div>
				{/each}
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
				<div>
					<h2 class="text-2xl font-bold mb-6 text-center">Silver Sponsors</h2>
					<div class="space-y-4">
						{#each silverSponsors as sponsor}
							<div class="card card-compact bg-base-200 shadow">
								<div class="card-body">
									<h3 class="font-bold">{sponsor.name}</h3>
									<p class="text-sm">{sponsor.description}</p>
								</div>
							</div>
						{/each}
					</div>
				</div>

				<div>
					<h2 class="text-2xl font-bold mb-6 text-center">Bronze Sponsors</h2>
					<div class="space-y-4">
						{#each bronzeSponsors as sponsor}
							<div class="card card-compact bg-base-200 shadow">
								<div class="card-body">
									<h3 class="font-bold">{sponsor.name}</h3>
									<p class="text-sm">{sponsor.description}</p>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="py-16 px-4 bg-base-200">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-4xl font-bold text-center mb-12">Become a Sponsor</h2>
			<p class="text-center text-lg mb-12 max-w-3xl mx-auto">
				Join us in supporting the advancement of academic research and innovation. 
				Sponsorship opportunities are still available for Academic Conference 2025.
			</p>
			
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{#each sponsorshipTiers as tier}
					<div class="card bg-white shadow-xl {!tier.available ? 'opacity-75' : ''}">
						<div class="card-body">
							<h3 class="card-title text-xl">{tier.name}</h3>
							<p class="text-2xl font-bold text-primary mb-4">{tier.price}</p>
							{#if !tier.available}
								<div class="badge badge-error mb-2">SOLD OUT</div>
							{/if}
							<ul class="space-y-2">
								{#each tier.benefits as benefit}
									<li class="flex items-start gap-2">
										<svg class="w-4 h-4 text-success mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
										</svg>
										<span class="text-sm">{benefit}</span>
									</li>
								{/each}
							</ul>
							{#if tier.available}
								<div class="card-actions justify-end mt-4">
									<button class="btn btn-primary btn-sm">Inquire</button>
								</div>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-16 px-4">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl font-bold mb-8">Why Sponsor?</h2>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div>
					<div class="text-5xl mb-4">🎯</div>
					<h3 class="text-xl font-bold mb-2">Targeted Exposure</h3>
					<p>Reach 500+ academics, researchers, and industry professionals in your field</p>
				</div>
				<div>
					<div class="text-5xl mb-4">🤝</div>
					<h3 class="text-xl font-bold mb-2">Network & Recruit</h3>
					<p>Connect with top talent and potential collaborators from leading institutions</p>
				</div>
				<div>
					<div class="text-5xl mb-4">💡</div>
					<h3 class="text-xl font-bold mb-2">Innovation Access</h3>
					<p>Get early insights into cutting-edge research and emerging technologies</p>
				</div>
			</div>
		</div>
	</section>

	<section class="py-16 px-4 bg-primary text-white">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl font-bold mb-6">Interested in Sponsoring?</h2>
			<p class="text-xl mb-8">
				Contact our sponsorship team to discuss how we can create a package that meets your objectives
			</p>
			<a href="/contact" class="btn btn-accent btn-lg">Contact Sponsorship Team</a>
		</div>
	</section>
</div>