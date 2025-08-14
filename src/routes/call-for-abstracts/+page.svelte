<script lang="ts">
	const topics = [
		"Artificial Intelligence and Machine Learning",
		"Data Science and Big Data Analytics",
		"Quantum Computing and Quantum Technologies",
		"Biomedical Engineering and Health Technologies",
		"Climate Science and Environmental Research",
		"Materials Science and Nanotechnology",
		"Robotics and Autonomous Systems",
		"Cybersecurity and Privacy",
		"Renewable Energy and Sustainability",
		"Space Science and Exploration"
	];

	const guidelines = [
		"Abstracts should be 250-300 words in length",
		"Include title, authors, affiliations, and keywords",
		"Clearly state objectives, methods, results, and conclusions",
		"Use Times New Roman 12pt font, single-spaced",
		"Submit in PDF format only",
		"Maximum of 5 keywords",
		"Include corresponding author's email"
	];

	const importantDates = [
		{ event: "Abstract Submission Opens", date: "January 15, 2025" },
		{ event: "Abstract Submission Deadline", date: "March 15, 2025" },
		{ event: "Notification of Acceptance", date: "April 15, 2025" },
		{ event: "Camera-Ready Submission", date: "May 15, 2025" }
	];
</script>

<svelte:head>
	<title>Call for Abstracts - Academic Conference 2025</title>
	<meta name="description" content="Submit your research abstract to Academic Conference 2025">
</svelte:head>

<div class="min-h-screen">
	<section class="hero bg-gradient-to-r from-accent to-primary text-white py-20">
		<div class="hero-content text-center">
			<div class="max-w-4xl">
				<h1 class="text-5xl font-bold mb-4">Call for Abstracts</h1>
				<p class="text-xl">Share your research with the global academic community</p>
			</div>
		</div>
	</section>

	<section class="py-16 px-4">
		<div class="max-w-4xl mx-auto">
			<div class="alert alert-warning mb-8">
				<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
				<div>
					<h3 class="font-bold">Abstract Submission Deadline: March 15, 2025</h3>
					<div class="text-sm">Submit your abstracts early to ensure consideration</div>
				</div>
			</div>

			<div class="prose prose-lg max-w-none">
				<h2 class="text-3xl font-bold mb-6">Submission Guidelines</h2>
				<p>
					We invite researchers, academics, and practitioners to submit abstracts for oral and poster presentations 
					at Academic Conference 2025. All submissions will undergo peer review by the scientific committee.
				</p>
			</div>
		</div>
	</section>

	<section class="py-16 px-4 bg-base-200">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-3xl font-bold text-center mb-12">Conference Topics</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				{#each topics as topic}
					<div class="flex items-center gap-3 bg-white p-4 rounded-lg shadow">
						<svg class="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
						</svg>
						<span class="text-lg">{topic}</span>
					</div>
				{/each}
			</div>
			<p class="text-center mt-8 text-gray-600">
				Topics not limited to the above. Interdisciplinary research is highly encouraged.
			</p>
		</div>
	</section>

	<section class="py-16 px-4">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-3xl font-bold mb-8">Abstract Requirements</h2>
			<div class="card bg-base-200 shadow-xl">
				<div class="card-body">
					<ul class="space-y-3">
						{#each guidelines as guideline}
							<li class="flex items-start gap-3">
								<svg class="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
								</svg>
								<span>{guideline}</span>
							</li>
						{/each}
					</ul>
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

	<section class="py-16 px-4">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-3xl font-bold mb-8">Submission Process</h2>
			<div class="steps steps-vertical lg:steps-horizontal w-full">
				<div class="step step-primary">
					<div class="text-center mt-2">
						<p class="font-bold">Prepare Abstract</p>
						<p class="text-sm">Follow guidelines</p>
					</div>
				</div>
				<div class="step step-primary">
					<div class="text-center mt-2">
						<p class="font-bold">Online Submission</p>
						<p class="text-sm">Via EasyChair</p>
					</div>
				</div>
				<div class="step">
					<div class="text-center mt-2">
						<p class="font-bold">Peer Review</p>
						<p class="text-sm">Expert evaluation</p>
					</div>
				</div>
				<div class="step">
					<div class="text-center mt-2">
						<p class="font-bold">Notification</p>
						<p class="text-sm">Accept/Revise/Reject</p>
					</div>
				</div>
			</div>

			<div class="text-center mt-12">
				<a href="https://easychair.org/conferences/?conf=ac2025" class="btn btn-primary btn-lg">
					Submit Abstract via EasyChair
				</a>
				<p class="mt-4 text-sm text-gray-600">
					You will be redirected to our submission system
				</p>
			</div>
		</div>
	</section>

	<section class="py-16 px-4 bg-primary text-white">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl font-bold mb-6">Need Help?</h2>
			<p class="text-xl mb-8">
				For questions about abstract submission, please contact the Program Committee
			</p>
			<a href="/contact" class="btn btn-accent">Contact Us</a>
		</div>
	</section>
</div>