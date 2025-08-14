<script lang="ts">
	interface Organizer {
		name: string;
		title: string;
		institution: string;
		role: string;
		image?: string;
	}

	const organizingCommittee: Organizer[] = [
		{
			name: "Dr. Sarah Chen",
			title: "Professor of Computer Science",
			institution: "University of Technology",
			role: "Conference Chair"
		},
		{
			name: "Prof. Michael Johnson",
			title: "Distinguished Professor",
			institution: "Institute of Advanced Studies",
			role: "Program Committee Chair"
		},
		{
			name: "Dr. Emily Rodriguez",
			title: "Associate Professor",
			institution: "Research University",
			role: "Local Arrangements Chair"
		}
	];

	const scientificCommittee: Organizer[] = [
		{
			name: "Dr. James Wilson",
			title: "Senior Researcher",
			institution: "National Research Lab",
			role: "Track Chair - AI & Machine Learning"
		},
		{
			name: "Prof. Maria Garcia",
			title: "Department Head",
			institution: "International University",
			role: "Track Chair - Data Science"
		},
		{
			name: "Dr. David Lee",
			title: "Research Director",
			institution: "Tech Innovation Center",
			role: "Track Chair - Systems & Networks"
		}
	];
</script>

<svelte:head>
	<title>Organizers - Academic Conference 2025</title>
	<meta name="description" content="Meet the organizing committee of Academic Conference 2025">
</svelte:head>

<div class="min-h-screen">
	<section class="hero bg-gradient-to-r from-primary to-secondary text-white py-20">
		<div class="hero-content text-center">
			<div class="max-w-4xl">
				<h1 class="text-5xl font-bold mb-4">Conference Organizers</h1>
				<p class="text-xl">Meet the dedicated team making Academic Conference 2025 possible</p>
			</div>
		</div>
	</section>

	<section class="py-16 px-4">
		<div class="max-w-7xl mx-auto">
			<h2 class="text-4xl font-bold text-center mb-12">Organizing Committee</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each organizingCommittee as organizer}
					<div class="card bg-base-200 shadow-xl">
						<figure class="px-10 pt-10">
							<div class="avatar placeholder">
								<div class="bg-neutral text-neutral-content rounded-full w-32">
									<span class="text-3xl">{organizer.name.split(' ').map(n => n[0]).join('')}</span>
								</div>
							</div>
						</figure>
						<div class="card-body items-center text-center">
							<h3 class="card-title text-primary">{organizer.name}</h3>
							<p class="text-sm font-semibold">{organizer.role}</p>
							<p class="text-sm">{organizer.title}</p>
							<p class="text-sm text-gray-600">{organizer.institution}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-16 px-4 bg-base-200">
		<div class="max-w-7xl mx-auto">
			<h2 class="text-4xl font-bold text-center mb-12">Scientific Committee</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each scientificCommittee as member}
					<div class="card bg-white shadow-xl">
						<figure class="px-10 pt-10">
							<div class="avatar placeholder">
								<div class="bg-secondary text-secondary-content rounded-full w-32">
									<span class="text-3xl">{member.name.split(' ').map(n => n[0]).join('')}</span>
								</div>
							</div>
						</figure>
						<div class="card-body items-center text-center">
							<h3 class="card-title text-secondary">{member.name}</h3>
							<p class="text-sm font-semibold">{member.role}</p>
							<p class="text-sm">{member.title}</p>
							<p class="text-sm text-gray-600">{member.institution}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-16 px-4">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl font-bold mb-8">Advisory Board</h2>
			<div class="prose prose-lg mx-auto">
				<p>
					Our advisory board consists of distinguished academics and industry leaders who provide 
					strategic guidance and ensure the conference maintains the highest standards of academic excellence.
				</p>
			</div>
			<div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
				<div class="bg-base-200 rounded-lg p-6">
					<h3 class="text-xl font-bold text-primary mb-2">Prof. Richard Thompson</h3>
					<p class="text-sm">Nobel Laureate, Physics</p>
					<p class="text-sm text-gray-600">Cambridge University</p>
				</div>
				<div class="bg-base-200 rounded-lg p-6">
					<h3 class="text-xl font-bold text-primary mb-2">Dr. Lisa Wang</h3>
					<p class="text-sm">CEO, Tech Innovations Inc.</p>
					<p class="text-sm text-gray-600">Industry Advisory</p>
				</div>
			</div>
		</div>
	</section>
</div>