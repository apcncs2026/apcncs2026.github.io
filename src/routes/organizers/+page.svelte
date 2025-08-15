<script lang="ts">
	import { organizers, type CommitteeChair, type Person } from '$lib/data/organizers';
</script>

<svelte:head>
	<title>Organizers - APSCONS 2026</title>
	<meta name="description" content="Meet the organizing committee of Asia-Pacific Summer School and Conference on Networks and Complex Systems">
</svelte:head>

<div class="min-h-screen">
	<section class="hero hero-gradient py-20">
		<div class="hero-content text-center">
			<div class="max-w-4xl">
				<h1 class="text-5xl font-bold hero-text mb-4">Organizers</h1>
			</div>
		</div>
	</section>

	<!-- Conference Chairs -->
	<section class="py-16 px-4">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-4xl font-bold text-center mb-12">Conference Chairs</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each organizers.conferenceChairs as chair}
					<div class="card bg-base-200 shadow-xl">
						<figure class="px-10 pt-10">
							<div class="avatar">
								{#if chair.avatar}
									<div class="w-32 h-32 rounded-full">
										<img src={chair.avatar} alt={chair.name} class="rounded-full w-full h-full object-cover" />
									</div>
								{:else}
									<div class="placeholder">
										<div class="bg-neutral text-neutral-content rounded-full w-32 h-32 flex items-center justify-center">
											<span class="text-3xl">{chair.name.split(' ').map(n => n[0]).join('')}</span>
										</div>
									</div>
								{/if}
							</div>
						</figure>
						<div class="card-body items-center text-center">
							<h3 class="card-title text-primary">{chair.title ? chair.title + ' ' : ''}{chair.name}</h3>
							<p class="text-sm font-semibold text-accent">{chair.role}</p>
							<p class="text-sm text-gray-600">{chair.affiliation}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Programme Chairs -->
	<section class="py-16 px-4 bg-base-200">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-4xl font-bold text-center mb-12">Programme Chairs</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each organizers.programmeChairs as chair}
					<div class="card bg-white shadow-xl">
						<figure class="px-10 pt-10">
							<div class="avatar">
								{#if chair.avatar}
									<div class="w-32 h-32 rounded-full">
										<img src={chair.avatar} alt={chair.name} class="rounded-full w-full h-full object-cover" />
									</div>
								{:else}
									<div class="placeholder">
										<div class="bg-neutral text-neutral-content rounded-full w-32 h-32 flex items-center justify-center">
											<span class="text-3xl">{chair.name.split(' ').map(n => n[0]).join('')}</span>
										</div>
									</div>
								{/if}
							</div>
						</figure>
						<div class="card-body items-center text-center">
							<h3 class="card-title text-primary">{chair.title ? chair.title + ' ' : ''}{chair.name}</h3>
							<p class="text-sm font-semibold text-accent">{chair.role}</p>
							<p class="text-sm text-gray-600">{chair.affiliation}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Social Media Chairs -->
	<section class="py-16 px-4">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-4xl font-bold text-center mb-12">Social Media Chairs</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each organizers.socialMediaChairs as chair}
					<div class="card bg-base-200 shadow-xl">
						<figure class="px-10 pt-10">
							<div class="avatar">
								{#if chair.avatar}
									<div class="w-32 h-32 rounded-full">
										<img src={chair.avatar} alt={chair.name} class="rounded-full w-full h-full object-cover" />
									</div>
								{:else}
									<div class="placeholder">
										<div class="bg-neutral text-neutral-content rounded-full w-32 h-32 flex items-center justify-center">
											<span class="text-3xl">{chair.name.split(' ').map(n => n[0]).join('')}</span>
										</div>
									</div>
								{/if}
							</div>
						</figure>
						<div class="card-body items-center text-center">
							<h3 class="card-title text-primary">{chair.title ? chair.title + ' ' : ''}{chair.name}</h3>
							<p class="text-sm font-semibold text-accent">{chair.role}</p>
							<p class="text-sm text-gray-600">{chair.affiliation}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Steering Committee -->
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

	<!-- Programme Committee -->
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
</div>