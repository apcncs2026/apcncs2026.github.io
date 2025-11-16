<script lang="ts">
	import { getHeroBackgroundStyle } from '$lib/config/heroImages';
</script>

<svelte:head>
	<title>Registration - APCNCS 2026</title>
	<meta name="description" content="Registration information for Asia-Pacific Summer School and Conference on Networks and Complex Systems">
</svelte:head>

<div class="min-h-screen">
	<section class="hero hero-bg hero-page" style={getHeroBackgroundStyle('registration')}>
		<div class="hero-content text-center hero-content-overlay">
			<div class="max-w-4xl">
				<h1 class="text-5xl font-bold hero-text mb-4">Registration</h1>
				<p class="text-xl hero-text-secondary">APCNCS 2026 Registration Information</p>
			</div>
		</div>
	</section>

	<section class="py-16 px-4">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-4xl font-bold text-center mb-12">Registration</h2>
			<div class="prose prose-lg max-w-none mb-12">
				<p>
					Online registration for the conference will open on <strong>16 Mar 2026</strong>, and close on <strong>31 May 2026</strong>.
					On-site registration will be possible during the summer school (9 Jun 2026) and the conference proper (10-12 Jun 2026).
				</p>
				<p>We offer the following affordable rates for the following categories of participants:</p>
			</div>

			<div class="overflow-x-auto mb-12">
				<table class="table table-zebra w-full">
					<thead>
						<tr>
							<th>Category</th>
							<th class="text-center">PhD/UG Students</th>
							<th class="text-center">Postdocs</th>
							<th class="text-center">Academics</th>
							<th class="text-center">Government & Industry</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="font-semibold">Early Bird<br/><span class="text-sm font-normal">(16 Mar–30 Apr 2026)</span></td>
							<td class="text-center">S$150</td>
							<td class="text-center">S$200</td>
							<td class="text-center">S$300</td>
							<td class="text-center">S$500</td>
						</tr>
						<tr>
							<td class="font-semibold">Regular<br/><span class="text-sm font-normal">(1–31 May 2026)</span></td>
							<td class="text-center">S$200</td>
							<td class="text-center">S$300</td>
							<td class="text-center">S$500</td>
							<td class="text-center">S$700</td>
						</tr>
						<tr>
							<td class="font-semibold">On-Site</td>
							<td class="text-center">S$300</td>
							<td class="text-center">S$500</td>
							<td class="text-center">S$800</td>
							<td class="text-center">S$1000</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div class="prose prose-lg max-w-none">
				<div class="alert alert-info">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
					<span>There will be an additional fee of <strong>S$50 per participant</strong> for the summer school, to cover coffee breaks and lunches.</span>
				</div>
			</div>
		</div>
	</section>

	<section class="py-16 px-4 bg-base-200">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-3xl font-bold text-center mb-8">Important Dates</h2>
			<div class="overflow-x-auto">
				<table class="table table-zebra w-full">
					<thead>
						<tr>
							<th>Event</th>
							<th>Date</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="font-semibold">Registration Opens</td>
							<td>16 Mar 2026</td>
						</tr>
						<tr>
							<td class="font-semibold">Early Bird Deadline</td>
							<td>30 Apr 2026</td>
						</tr>
						<tr>
							<td class="font-semibold">Regular Registration Deadline</td>
							<td>31 May 2026</td>
						</tr>
						<tr>
							<td class="font-semibold">On-Site Registration</td>
							<td>9-12 Jun 2026</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</section>
</div>