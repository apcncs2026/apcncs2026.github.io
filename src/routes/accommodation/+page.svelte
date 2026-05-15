<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import Link from '$lib/components/Link.svelte';
	import { getHeroBackgroundStyle } from '$lib/config/heroImages';
</script>

<svelte:head>
	<title>Accommodation and Attractions - APCNCS 2026</title>
	<meta name="description" content="Hotel accommodations and local attractions for APCNCS 2026">
</svelte:head>

<div class="min-h-screen">
	<section class="hero hero-bg hero-page" style={getHeroBackgroundStyle('accommodation')}>
		<div class="hero-content text-center hero-content-overlay">
			<div class="max-w-4xl">
				<h1 class="text-5xl font-bold hero-text mb-4">Accommodation and Attractions</h1>
				<!-- <p class="text-xl hero-text-secondary">Make the most of your conference experience</p> -->
			</div>
		</div>
	</section>

	<section class="py-16 px-4">
		<div class="max-w-4xl mx-auto">
			<div class="prose prose-lg max-w-none">
				<h2 class="text-3xl font-bold mb-8">On-Campus Accommodation</h2>

				<div class="card bg-base-200 mb-8">
					<div class="card-body">
						<h3 class="card-title text-primary">Nanyang Executive Centre</h3>
						<p>
							On-campus accommodation will be available at the <Link href="https://www.ntu.edu.sg/life-at-ntu/accommodation/nanyang-executive-centre" text="Nanyang Executive Centre" />, which has 170 guestrooms and suites. It is currently undergoing renovation, but will be ready to host guests before the conference. We will be negotiating with it to obtain discounted room rates for conference participants.
						</p>
					</div>
				</div>

				<div class="card bg-base-200 mb-8">
					<div class="card-body">
						<h3 class="card-title text-primary">Dormitory Accommodation for Students and Postdocs</h3>
						<p>
							Because the conference falls within our university's summer vacation, we have also arranged for up to 150 student and postdoc participants to be hosted in single and twin-sharing rooms across multiple dormitories on campus. We hope the affordable daily rates within this arrangement will encourage more students and postdocs to participate in the conference.
						</p>
					</div>
				</div>

				<div class="alert alert-info">
					<Icon name="info" class_="stroke-current shrink-0 h-6 w-6" />
					<span>We will provide more updates as information becomes available.</span>
				</div>

				<h2 class="text-3xl font-bold mb-8 mt-12">Other Hotels Near NTU</h2>

				<p class="mb-8">
					Participants are also welcome to explore other hotels near to NTU. These are:
				</p>

				<div class="card bg-base-200 mb-6">
					<div class="card-body">
						<h3 class="card-title text-primary">Four Points by Sheraton Jurong (formerly Genting Hotel Jurong)</h3>
						<p class="text-sm opacity-80"><strong>Distance from NTU:</strong> ~6.5 km (15 mins by taxi / 30 mins by public transport)</p>
						<p>
							Conveniently located near the Jurong East MRT interchange and major shopping malls (JEM, Westgate, and IMM), offering a wide variety of dining and retail options.
						</p>
					</div>
				</div>

				<div class="card bg-base-200 mb-6">
					<div class="card-body">
						<h3 class="card-title text-primary">Park Avenue Rochester</h3>
						<p class="text-sm opacity-80"><strong>Distance from NTU:</strong> ~12.5 km (20 mins by taxi / 45 mins by MRT)</p>
						<p>
							Surrounded by the beautiful Rochester Park and the Star Vista mall. This area is known for its excellent selection of restaurants and cafes set in colonial bungalows.
						</p>
					</div>
				</div>

				<div class="card bg-base-200 mb-6">
					<div class="card-body">
						<h3 class="card-title text-primary">Citadines Connect Rochester Singapore</h3>
						<p class="text-sm opacity-80"><strong>Distance from NTU:</strong> ~12.5 km (20 mins by taxi / 45 mins by MRT)</p>
						<p>
							Offers "Recharge" rooms for early arrivals or late departures. It is highly integrated with the surrounding dining scene in the Buona Vista tech-corridor.
						</p>
					</div>
				</div>

				<div class="card bg-base-200 mb-6">
					<div class="card-body">
						<h3 class="card-title text-primary">The Quay Hotel West Coast</h3>
						<p class="text-sm opacity-80"><strong>Distance from NTU:</strong> ~11 km (15 mins by taxi / 40 mins by bus)</p>
						<p>
							Located near West Coast Park and the National University of Singapore (NUS). It is a quieter option for those looking for a more residential feel while remaining relatively close to NTU.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>