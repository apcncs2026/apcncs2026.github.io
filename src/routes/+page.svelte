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
						<h3 class="card-title text-primary">Abstract Submission</h3>
						<p class="text-xl font-bold">1 Dec 2025 - 28 Feb 2026</p>
					</div>
				</div>
				<div class="card bg-base-200 shadow-xl">
					<div class="card-body">
						<h3 class="card-title text-primary">Acceptance Notification</h3>
						<p class="text-xl font-bold">15 Mar 2026</p>
					</div>
				</div>
				<div class="card bg-base-200 shadow-xl">
					<div class="card-body">
						<h3 class="card-title text-primary">Early Bird Registration</h3>
						<p class="text-xl font-bold">16 Mar - 30 Apr 2026</p>
					</div>
				</div>
				<div class="card bg-base-200 shadow-xl">
					<div class="card-body">
						<h3 class="card-title text-primary">Conference Dates</h3>
						<p class="text-sm line-through opacity-60">3-5 June, 2026</p>
						<p class="text-xl font-bold flex items-center gap-2">10-12 June, 2026 <span class="badge badge-error badge-md">NEW</span></p>
						<p class="text-sm mt-2">Summer School: 9 June</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="py-16 px-4">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-4xl font-bold text-center mb-12">About the Conference</h2>
			<div class="prose prose-lg max-w-none">
				<p>
					The number of scientists working on networks and complex systems in the Asia-Pacific region is increasing, but high-level conferences in these areas remain limited to NetSci, NetSciX, the International Conference on Computational Science (ICCS), and Conference on Complex Systems (CCS). Asia-Pacific scientists, especially postdocs and PhD students in these areas therefore have limited opportunities to attend these conferences. This leads to a lack of exposure of Asia-Pacific scientists to good work done elsewhere in the world, and of scientists from other parts of the world to good work done in Asia-Pacific, and seriously hampers the academic growths of Asia-Pacific scientists. Recently, we have been encouraged by the strong turnout of Indian scientists at all levels at the NetSciX 2025 conference in Indore, India. We can sense that the younger scientists treasured this opportunity to share their work. Unfortunately, it is impossible to bring these flagship conferences to Asia-Pacific every year. At best, we can host one such conference in Asia once every three to four years.
				</p>
				<p>
					This prompted us to start an Asia-Pacific Conference on Networks and Complex Systems beginning next year (2-5 Jun 2026 in Singapore) to cater to these unmet demands. With this conference, we would always have a platform to present our recent work and meet up with colleagues. While we will always invite the most exciting speakers from all around the world, our goal is to include more invited speakers from Asia-Pacific. We also aim to give as many participants as possible (including PhD students) a chance to give oral presentations. We will rotate this conference series around Asia-Pacific, where most venues are more affordable compared to Europe or North America. Hopefully, more Asian scientists would be able to attend, even if they have limited funding. This is especially true of PhD students and postdoctoral researchers, many of whom can only attend the local editions of the conference.
				</p>
				<p>
					Finally, to ensure that the conference is relevant and high-level, we will be advised by an International Advisory Committee of eminent scientists in the fields of networks and complex systems. Additionally, to ensure that good organizational practices are shared after they are developed, besides local organizers the organizing team for a given year will also comprise core members from the organizing team for the next year.
				</p>
			</div>
		</div>
	</section>
</div>

