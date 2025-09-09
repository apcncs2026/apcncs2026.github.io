<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import { getHeroBackgroundStyle } from '$lib/config/heroImages';

	const importantDates = [
		{ event: "Abstract Submission Opens", date: "TBD" },
		{ event: "Abstract Submission Deadline", date: "TBD" },
		{ event: "Notification of Acceptance", date: "TBD" },
	];
</script>

<svelte:head>
	<title>Call for Abstracts - APCNCS 2026</title>
	<meta name="description" content="Submit your research abstract to APCNCS 2026">
</svelte:head>

<div class="min-h-screen">
	<section class="hero hero-bg hero-page" style={getHeroBackgroundStyle('abstracts')}>
		<div class="hero-content text-center hero-content-overlay">
			<div class="max-w-4xl">
				<h1 class="text-5xl font-bold hero-text mb-4">Call for Abstracts</h1>
				<!-- <p class="text-xl hero-text-secondary">Share your research with the global academic community</p> -->
			</div>
		</div>
	</section>

	<section class="py-16 px-4">
		<div class="max-w-4xl mx-auto">
			<div class="alert alert-warning mb-8">
				<Icon name="alert-triangle" class_="stroke-current shrink-0 h-6 w-6" />
				<div>
					<h3 class="font-bold">Abstract Submission: TBD</h3>
					<div class="text-sm">Abstract submission details will be announced soon</div>
				</div>
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
						{#each importantDates as item}
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

	<section class="py-16 px-4 bg-conf-primary text-white">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl font-bold mb-6">Need Help?</h2>
			<p class="text-xl mb-8">
				For questions about abstract submission, please contact the Program Committee
			</p>
			<a href="/contact" class="btn btn-accent">Contact Us</a>
		</div>
	</section>
</div>