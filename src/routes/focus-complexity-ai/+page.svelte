<script lang="ts">
	import { getHeroBackgroundStyle } from '$lib/config/heroImages';
	import Icon from '$lib/components/Icon.svelte';
	import Email from '$lib/components/Email.svelte';
	import Link from '$lib/components/Link.svelte';

	const keyDates = [
		{ event: "Abstract Submission Deadline", date: "30 Apr 2026" },
		{ event: "Notification of Acceptance", date: "15 May 2026" },
		{ event: "Focus Session", date: "9-12 Jun 2026" },
	];

	const topics = [
		"Complexity science",
		"Artificial intelligence",
		"Neural networks",
		"Statistical physics",
		"Phase transitions",
		"Dynamical systems",
		"Self-organization"
	];

	const organizers = [
		{
			name: "Feng Ling",
			affiliation: "A*Star Institute of High Performance Computing, Singapore",
			email: "felney@gmail.com"
		},
		{
			name: "Chew Lock Yue",
			affiliation: "Nanyang Technological University, Singapore",
			email: "lockyue@ntu.edu.sg"
		}
	];
</script>

<svelte:head>
	<title>Focus Session: Complexity of AI - APCNCS 2026</title>
	<meta name="description" content="Focus session on Complexity of AI at APCNCS 2026, exploring AI models through complexity science">
</svelte:head>

<div class="min-h-screen">
	<section class="hero hero-bg hero-page" style={getHeroBackgroundStyle('focus')}>
		<div class="hero-content text-center hero-content-overlay">
			<div class="max-w-4xl">
				<h1 class="text-5xl font-bold hero-text mb-4">Focus Session: Complexity of AI</h1>
				<p class="text-xl hero-text-secondary">APCNCS 2026 | 9-12 June 2026, Singapore</p>
			</div>
		</div>
	</section>

	<section class="py-16 px-4">
		<div class="max-w-4xl mx-auto">
			<div class="alert alert-info mb-8">
				<Icon name="info" class_="stroke-current shrink-0 h-6 w-6" />
				<div>
					<h3 class="font-bold">Abstract Submission</h3>
					<div class="text-sm">Deadline: 30 Apr 2026 | Submit to organizers | Conference registration required</div>
				</div>
			</div>

			<div class="prose prose-lg max-w-none mb-12">
				<h2 class="text-3xl font-bold mb-6">Introduction</h2>
				<p>
					Modern artificial intelligence (AI) models, specifically artificial neural networks, are typical complex systems that consist of a large number of interactions. With accelerating progress in the capabilities of AI, it calls for a better understanding of their working principles. Complexity science, a field behind the 2021 Nobel prizes in physics awarded to Giorgio Parisi, builds some key theoretical foundations for the 2024 Nobel prizes awarded to AI contributions by John J. Hopfield and Geoffrey Hinton, and is receiving increasing attention in the pursuit of understanding AI models.
				</p>
				<p>
					As complex systems, AI models exhibit the typical phenomena of phase transition, emergence (of intelligence), multiple meta-stabilities, chaos, self-organization, etc. Studying and analyzing AI models through the perspective of complexity science can pave the way for a deeper understanding of how AI processes information, carrying out logic reasoning, and generating new data like images or texts. Such findings can potentially help us improve the capabilities, safety, and efficiency of AI models through untangling their complexities.
				</p>
				<p>
					This Focused Session on "Complexity of AI" is held in conjunction with the Asia-Pacific Summer School and Conference on Networks and Complex Systems (APCNCS) 2026, held in Singapore from 9-12 Jun 2026. Participants at this focus session will also be invited to contribute to a joint special issue in <Link href="https://www.mdpi.com/journal/entropy/special_issues/AQO5Z1H353" text="MDPI Entropy" /> and <Link href="https://www.mdpi.com/journal/complexities/special_issues/477OQWUB64" text="MDPI Complexities" />.
				</p>
			</div>
		</div>
	</section>

	<section class="py-16 px-4 bg-base-200">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-3xl font-bold mb-8">Session Organizers</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				{#each organizers as organizer}
					<div class="card bg-base-100 shadow-md">
						<div class="card-body">
							<h3 class="card-title text-primary">{organizer.name}</h3>
							<p class="text-sm">{organizer.affiliation}</p>
							<div class="mt-2">
								<Email email={organizer.email} />
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-16 px-4">
		<div class="max-w-4xl mx-auto">
			<div class="prose prose-lg max-w-none mb-12">
				<h2 class="text-3xl font-bold mb-6">Call for Abstracts</h2>
				<p>
					We welcome abstracts for contributed talks on original research exploring the complexity of AI models from diverse perspectives, including methods, theories, applications, and empirical studies on the following topics related to (but not limited to):
				</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
				{#each topics as topic}
					<div class="flex items-start">
						<Icon name="check" class_="text-primary mt-1 mr-3 flex-shrink-0" />
						<span class="text-lg">{topic}</span>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-16 px-4 bg-base-200">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-3xl font-bold mb-8">Important Dates</h2>
			<div class="overflow-x-auto">
				<table class="table table-zebra w-full">
					<thead>
						<tr>
							<th>Event</th>
							<th>Date</th>
						</tr>
					</thead>
					<tbody>
						{#each keyDates as item}
							<tr>
								<td class="font-semibold">{item.event}</td>
								<td>{item.date}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</section>

	<section class="py-16 px-4">
		<div class="max-w-4xl mx-auto">
			<div class="prose prose-lg max-w-none mb-12">
				<h2 class="text-3xl font-bold mb-6">Submission and Registration</h2>
				<p>
					Participants already registered for APCNCS 2026 have up till <strong>30 Apr 2026</strong> to submit abstracts to:
				</p>
				<div class="ml-4 mt-4">
					<p class="font-semibold">Feng Ling</p>
					<Email email="felney@gmail.com" />
					<p class="mt-4 font-semibold">Chew Lock Yue (Prof)</p>
					<Email email="lockyue@ntu.edu.sg" />
				</div>
				<p class="mt-6">
					The programme for the focus session will be posted, and contributors notified, on <strong>15 May 2026</strong>. All contributors must be registered for APCNCS 2026 to participate in the focus session.
				</p>
			</div>

			<div class="alert alert-warning">
				<Icon name="alert-triangle" class_="stroke-current shrink-0 h-6 w-6" />
				<div>
					<h3 class="font-bold">Registration Requirement</h3>
					<div class="text-sm">All participants must register for the main APCNCS 2026 conference to attend this focus session.</div>
				</div>
			</div>
		</div>
	</section>

	<section class="py-16 px-4 bg-base-200">
		<div class="max-w-4xl mx-auto">
			<div class="prose prose-lg max-w-none">
				<h2 class="text-3xl font-bold mb-6">Special Issue Publication</h2>
				<p>
					Participants of this focus session will be invited to contribute to a joint special issue on "Complexity of AI" published in:
				</p>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
					<div class="card bg-base-100 shadow-md">
						<div class="card-body">
							<h3 class="card-title text-primary">MDPI Entropy</h3>
							<p class="text-sm">Special Issue on Complexity of AI</p>
							<div class="card-actions justify-end">
								<Link href="https://www.mdpi.com/journal/entropy/special_issues/AQO5Z1H353" text="View Issue →" />
							</div>
						</div>
					</div>
					<div class="card bg-base-100 shadow-md">
						<div class="card-body">
							<h3 class="card-title text-primary">MDPI Complexities</h3>
							<p class="text-sm">Special Issue on Complexity of AI</p>
							<div class="card-actions justify-end">
								<Link href="https://www.mdpi.com/journal/complexities/special_issues/477OQWUB64" text="View Issue →" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="py-16 px-4 bg-conf-primary text-white">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl font-bold mb-6">Ready to Submit?</h2>
			<p class="text-xl mb-8">
				Submit your abstract by 30 Apr 2026 to participate in this focus session
			</p>
			<div class="space-x-4">
				<a href="/registration" class="btn btn-accent">Register for APCNCS 2026</a>
				<a href="/call-for-abstracts" class="btn btn-accent">Main Conference Call for Abstracts</a>
			</div>
		</div>
	</section>
</div>