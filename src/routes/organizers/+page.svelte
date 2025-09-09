<script lang="ts">
	import { organizers } from '$lib/data/organizers';
	import CommitteeSection from '$lib/components/CommitteeSection.svelte';
	import PersonCard from '$lib/components/PersonCard.svelte';
	import { getHeroBackgroundStyle } from '$lib/config/heroImages';

	// International Advisory Committee section (no title since it's in hero)
	const advisorySection = {
		title: '', // Empty title since hero section shows the title
		members: organizers.advisoryCommittee,
		sectionBgClass: '',
		cardBgClass: 'bg-base-200'
	};

	const sections = [
		{ 
			title: 'Conference Chairs', 
			members: organizers.conferenceChairs
		},
		{ 
			title: 'Programme Chairs', 
			members: organizers.programmeChairs
		},
		{ 
			title: 'Focused Sections Chairs', 
			members: organizers.focusSectionChairs
		},
		{ 
			title: 'Summer School Chairs', 
			members: organizers.summerSchoolChairs
		},
		{ 
			title: 'Sponsorship Chairs', 
			members: organizers.sponsorshipChairs
		},
		{ 
			title: 'Publicity Chairs', 
			members: organizers.socialMediaChairs
		}
	].map((section, index) => ({
		...section,
		sectionBgClass: index % 2 === 0 ? 'bg-base-200' : '',
		cardBgClass: index % 2 === 0 ? 'bg-white' : 'bg-base-200'
	}));
</script>

<svelte:head>
	<title>Organizers - APCNCS 2026</title>
	<meta name="description" content="Meet the organizing committee of Asia-Pacific Summer School and Conference on Networks and Complex Systems">
</svelte:head>

<div class="min-h-screen">
	<!-- International Advisory Committee Hero -->
	<section class="hero hero-bg hero-page" style={getHeroBackgroundStyle('international')}>
		<div class="hero-content text-center hero-content-overlay">
			<div class="max-w-4xl">
				<h1 class="text-5xl font-bold hero-text mb-4">International Advisory Committee</h1>
			</div>
		</div>
	</section>

	<!-- International Advisory Committee Content -->
	<CommitteeSection 
		title={advisorySection.title} 
		members={advisorySection.members}
		sectionBgClass={advisorySection.sectionBgClass}
		cardBgClass={advisorySection.cardBgClass}
	/>

	<!-- Organizers Hero -->
	<section class="hero hero-bg hero-page" style={getHeroBackgroundStyle('organizers')}>
		<div class="hero-content text-center hero-content-overlay">
			<div class="max-w-4xl">
				<h1 class="text-5xl font-bold hero-text mb-4">Organizers</h1>
			</div>
		</div>
	</section>

	<!-- Organizing Committee Sections -->
	{#each sections as section}
		<CommitteeSection 
			title={section.title} 
			members={section.members}
			sectionBgClass={section.sectionBgClass}
			cardBgClass={section.cardBgClass}
		/>
	{/each}

	<!-- Steering Committee with different grid layout -->
	{#if organizers.steeringCommittee.length > 0}
		<section class="py-16 px-4 bg-base-200">
			<div class="max-w-6xl mx-auto">
				<h2 class="text-4xl font-bold text-center mb-12">Steering Committee</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{#each organizers.steeringCommittee as member}
						<div class="card bg-white shadow-lg">
							<div class="card-body text-center p-6">
								<h3 class="font-bold text-lg">{member.name}</h3>
								{#if member.isPresident}
									<p class="text-sm font-semibold text-accent">President</p>
								{/if}
								<p class="text-sm text-gray-600">{member.affiliation}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</section>
	{/if}

	<!-- Programme Committee -->
	<!-- {#if organizers.programmeCommittee.length > 0}
		<section class="py-16 px-4">
			<div class="max-w-6xl mx-auto">
				<h2 class="text-4xl font-bold text-center mb-12">Programme Committee</h2>
				<div class="bg-base-200 rounded-lg p-8">
					<p class="text-lg leading-relaxed text-center">
						{organizers.programmeCommittee.map(member => `${member.name}`).join(', ')}
					</p>
				</div>
			</div>
		</section>
	{/if} -->
</div>