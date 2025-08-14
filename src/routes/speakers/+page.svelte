<script lang="ts">
	interface Speaker {
		name: string;
		title: string;
		institution: string;
		topic: string;
		bio: string;
		keynote: boolean;
	}

	const speakers: Speaker[] = [
		{
			name: "Prof. Alexandra Chen",
			title: "Distinguished Professor of AI",
			institution: "Stanford University",
			topic: "The Future of Artificial Intelligence in Scientific Research",
			bio: "Prof. Chen is a world-renowned expert in artificial intelligence with over 200 publications and numerous awards including the Turing Award.",
			keynote: true
		},
		{
			name: "Dr. Marcus Johnson",
			title: "Director of Quantum Computing",
			institution: "MIT Quantum Lab",
			topic: "Quantum Computing: From Theory to Practice",
			bio: "Dr. Johnson leads cutting-edge research in quantum computing applications and has pioneered several breakthrough algorithms.",
			keynote: true
		},
		{
			name: "Prof. Sarah Williams",
			title: "Chair of Biomedical Engineering",
			institution: "Johns Hopkins University",
			topic: "Innovations in Biomedical Technology",
			bio: "Prof. Williams has developed numerous medical devices and holds over 50 patents in biomedical engineering.",
			keynote: true
		},
		{
			name: "Dr. Robert Lee",
			title: "Senior Research Scientist",
			institution: "Google Research",
			topic: "Large Language Models and Scientific Discovery",
			bio: "Dr. Lee has contributed to major advances in natural language processing and machine learning systems.",
			keynote: false
		},
		{
			name: "Prof. Elena Rodriguez",
			title: "Professor of Climate Science",
			institution: "Harvard University",
			topic: "Climate Change: Data, Models, and Solutions",
			bio: "Prof. Rodriguez is a leading climate scientist whose work has influenced global climate policy.",
			keynote: false
		},
		{
			name: "Dr. James Park",
			title: "Chief Technology Officer",
			institution: "SpaceX",
			topic: "Engineering Challenges in Space Exploration",
			bio: "Dr. Park leads the development of next-generation spacecraft propulsion systems.",
			keynote: false
		}
	];

	const keynoteSpeakers = speakers.filter(s => s.keynote);
	const invitedSpeakers = speakers.filter(s => !s.keynote);
</script>

<svelte:head>
	<title>Invited Speakers - Academic Conference 2025</title>
	<meta name="description" content="Distinguished speakers at Academic Conference 2025">
</svelte:head>

<div class="min-h-screen">
	<section class="hero bg-gradient-to-r from-secondary to-accent text-white py-20">
		<div class="hero-content text-center">
			<div class="max-w-4xl">
				<h1 class="text-5xl font-bold mb-4">Invited Speakers</h1>
				<p class="text-xl">Learn from world-renowned experts and thought leaders</p>
			</div>
		</div>
	</section>

	<section class="py-16 px-4">
		<div class="max-w-7xl mx-auto">
			<h2 class="text-4xl font-bold text-center mb-12">Keynote Speakers</h2>
			<div class="space-y-8">
				{#each keynoteSpeakers as speaker}
					<div class="card lg:card-side bg-base-200 shadow-xl">
						<figure class="lg:w-1/3">
							<div class="avatar placeholder p-8">
								<div class="bg-primary text-primary-content rounded-full w-48">
									<span class="text-5xl">{speaker.name.split(' ').map(n => n[0]).join('')}</span>
								</div>
							</div>
						</figure>
						<div class="card-body lg:w-2/3">
							<h3 class="card-title text-2xl text-primary">{speaker.name}</h3>
							<p class="text-lg font-semibold">{speaker.title}</p>
							<p class="text-gray-600">{speaker.institution}</p>
							<div class="divider"></div>
							<h4 class="font-bold text-secondary">Keynote Topic:</h4>
							<p class="text-lg italic">"{speaker.topic}"</p>
							<p class="mt-4">{speaker.bio}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-16 px-4 bg-base-200">
		<div class="max-w-7xl mx-auto">
			<h2 class="text-4xl font-bold text-center mb-12">Featured Speakers</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				{#each invitedSpeakers as speaker}
					<div class="card bg-white shadow-xl">
						<div class="card-body">
							<div class="flex items-start gap-4">
								<div class="avatar placeholder flex-shrink-0">
									<div class="bg-secondary text-secondary-content rounded-full w-24">
										<span class="text-2xl">{speaker.name.split(' ').map(n => n[0]).join('')}</span>
									</div>
								</div>
								<div class="flex-1">
									<h3 class="card-title text-xl text-secondary">{speaker.name}</h3>
									<p class="font-semibold">{speaker.title}</p>
									<p class="text-sm text-gray-600">{speaker.institution}</p>
								</div>
							</div>
							<div class="divider"></div>
							<h4 class="font-bold text-primary">Topic:</h4>
							<p class="italic">"{speaker.topic}"</p>
							<p class="mt-4 text-sm">{speaker.bio}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-16 px-4">
		<div class="max-w-4xl mx-auto text-center">
			<div class="alert alert-info">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
				</svg>
				<span>More speakers will be announced soon. Check back for updates!</span>
			</div>
		</div>
	</section>
</div>