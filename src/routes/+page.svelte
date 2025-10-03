<script lang="ts">
	import { getHeroBackgroundStyle } from '$lib/config/heroImages';
</script>

<svelte:head>
	<title>APCNCS 2026 - Asia-Pacific Summer School and Conference on Networks and Complex Systems</title>
	<meta name="description" content="Asia-Pacific Summer School and Conference on Networks and Complex Systems - June 9-12, 2026 at Nanyang Technological University, Singapore">
</svelte:head>

<div class="min-h-screen">
	<section class="hero hero-bg hero-home" style={getHeroBackgroundStyle('home')}>
		<div class="hero-content text-center hero-content-overlay">
			<div class="max-w-5xl">
				<h1 class="text-4xl md:text-5xl font-bold hero-text mb-6">Asia-Pacific Summer School and Conference on Networks and Complex Systems</h1>
				<p class="text-xl md:text-2xl hero-text-secondary mb-8 flex items-center justify-center gap-2 flex-wrap">
					<span class="whitespace-nowrap flex items-center gap-2">
						<span class="line-through opacity-60">2-5 June, 2026</span>
						<span class="badge badge-error badge-md">NEW</span>
						<span class="font-bold">9-12 June, 2026</span>
						<span>|</span>
					</span>
					<span>Nanyang Technological University, Singapore</span>
				</p>
			</div>
		</div>
	</section>

	<section class="py-16 px-4">
		<div class="max-w-7xl mx-auto">
			<h2 class="text-4xl font-bold text-center mb-12">Key Dates</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				<div class="card bg-base-200 shadow-xl">
					<div class="card-body">
						<h3 class="card-title text-primary">Abstract Submission Deadline</h3>
						<p class="text-xl font-bold">TBA</p>
						<!-- <p>Submit your research abstracts for review</p> -->
					</div>
				</div>
				<div class="card bg-base-200 shadow-xl">
					<div class="card-body">
						<h3 class="card-title text-primary">Early Bird Registration</h3>
						<p class="text-xl font-bold">TBA</p>
						<!-- <p>Save on registration fees</p> -->
					</div>
				</div>
				<div class="card bg-base-200 shadow-xl">
					<div class="card-body">
						<h3 class="card-title text-primary">Summer School</h3>
						<p class="text-sm line-through opacity-60">2 June, 2026</p>
						<p class="text-xl font-bold flex items-center gap-2">9 June, 2026 <span class="badge badge-error badge-md">NEW</span></p>
						<!-- <p>One day of intensive learning</p> -->
					</div>
				</div>
				<div class="card bg-base-200 shadow-xl">
					<div class="card-body">
						<h3 class="card-title text-primary">Conference Dates</h3>
						<p class="text-sm line-through opacity-60">3-5 June, 2026</p>
						<p class="text-xl font-bold flex items-center gap-2">10-12 June, 2026 <span class="badge badge-error badge-md">NEW</span></p>
						<!-- <p>Three days of learning and networking</p> -->
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="py-16 px-4">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-4xl font-bold text-center mb-12">About the Conference</h2>
			<div class="prose prose-lg max-w-4xl mx-auto">
				<!-- <p>
					The Asia-Pacific Summer School and Conference on Networks and Complex Systems (APCNCS 2026) brings together researchers, practitioners, and students from around the world 
					to share cutting-edge research, exchange ideas, and foster collaborations. This interdisciplinary conference 
					focuses on networks and complex systems, featuring keynote presentations, workshops, and networking opportunities.
				</p>
				<p>
					Join us for three days of intellectual stimulation, professional development, and meaningful connections 
					with peers in your field. Whether you're presenting your research, attending sessions, or participating 
					in workshops, this conference offers valuable opportunities for academic and professional growth in the study of networks and complex systems.
				</p> -->
			</div>
		</div>
	</section>
</div>

