<script lang="ts">
	import { onMount } from 'svelte';
	
	let currentDate = new Date().toISOString().split('T')[0];
</script>

<svelte:head>
	<title>Academic Conference 2025 - Home</title>
	<meta name="description" content="Join us for the Academic Conference 2025 - Advancing knowledge through collaboration">
</svelte:head>

<section class="hero min-h-[60vh] bg-gradient-to-br from-primary to-secondary">
	<div class="hero-content text-center">
		<div class="max-w-4xl">
			<h1 class="text-5xl font-bold text-white mb-6">Academic Conference 2025</h1>
			<p class="text-2xl text-white/90 mb-4">Advancing Knowledge Through Collaboration</p>
			<p class="text-xl text-white/80 mb-8">June 15-18, 2025 | University Campus</p>
			<div class="flex gap-4 justify-center flex-wrap">
				<a href="/registration" class="btn btn-accent btn-lg">Register Now</a>
				<a href="/call-for-abstracts" class="btn btn-ghost btn-lg text-white">Submit Abstract</a>
			</div>
		</div>
	</div>
</section>

<section class="py-16 px-4">
	<div class="max-w-7xl mx-auto">
		<h2 class="text-4xl font-bold text-center mb-12">Key Dates</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div class="card bg-base-200 shadow-xl">
				<div class="card-body">
					<h3 class="card-title text-primary">Abstract Submission Deadline</h3>
					<p class="text-2xl font-bold">March 15, 2025</p>
					<p>Submit your research abstracts for review</p>
				</div>
			</div>
			<div class="card bg-base-200 shadow-xl">
				<div class="card-body">
					<h3 class="card-title text-primary">Early Bird Registration</h3>
					<p class="text-2xl font-bold">April 30, 2025</p>
					<p>Save on registration fees</p>
				</div>
			</div>
			<div class="card bg-base-200 shadow-xl">
				<div class="card-body">
					<h3 class="card-title text-primary">Conference Dates</h3>
					<p class="text-2xl font-bold">June 15-18, 2025</p>
					<p>Four days of learning and networking</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="py-16 px-4 bg-base-200">
	<div class="max-w-7xl mx-auto">
		<h2 class="text-4xl font-bold text-center mb-12">Conference Highlights</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			<div class="stat bg-white rounded-lg shadow">
				<div class="stat-figure text-primary">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
					</svg>
				</div>
				<div class="stat-title">Keynote Speakers</div>
				<div class="stat-value text-primary">12+</div>
			</div>
			
			<div class="stat bg-white rounded-lg shadow">
				<div class="stat-figure text-secondary">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
					</svg>
				</div>
				<div class="stat-title">Participants</div>
				<div class="stat-value text-secondary">500+</div>
			</div>
			
			<div class="stat bg-white rounded-lg shadow">
				<div class="stat-figure text-accent">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
					</svg>
				</div>
				<div class="stat-title">Research Papers</div>
				<div class="stat-value text-accent">200+</div>
			</div>
			
			<div class="stat bg-white rounded-lg shadow">
				<div class="stat-figure text-info">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
					</svg>
				</div>
				<div class="stat-title">Workshops</div>
				<div class="stat-value text-info">15+</div>
			</div>
		</div>
	</div>
</section>

<section class="py-16 px-4">
	<div class="max-w-7xl mx-auto">
		<h2 class="text-4xl font-bold text-center mb-12">About the Conference</h2>
		<div class="prose prose-lg max-w-4xl mx-auto">
			<p>
				The Academic Conference 2025 brings together researchers, practitioners, and students from around the world 
				to share cutting-edge research, exchange ideas, and foster collaborations. This interdisciplinary conference 
				features keynote presentations, panel discussions, workshops, and networking opportunities.
			</p>
			<p>
				Join us for four days of intellectual stimulation, professional development, and meaningful connections 
				with peers in your field. Whether you're presenting your research, attending sessions, or participating 
				in workshops, this conference offers valuable opportunities for academic and professional growth.
			</p>
		</div>
	</div>
</section>

<section class="py-16 px-4 bg-primary text-white">
	<div class="max-w-4xl mx-auto text-center">
		<h2 class="text-4xl font-bold mb-6">Stay Updated</h2>
		<p class="text-xl mb-8">Subscribe to our newsletter for conference updates and announcements</p>
		<form class="flex gap-4 max-w-md mx-auto flex-col sm:flex-row">
			<input 
				type="email" 
				placeholder="Enter your email" 
				class="input input-bordered flex-1 text-black"
				required
			/>
			<button type="submit" class="btn btn-accent">Subscribe</button>
		</form>
	</div>
</section>