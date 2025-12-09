<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import Email from '$lib/components/Email.svelte';
	import Link from '$lib/components/Link.svelte';
	import { getHeroBackgroundStyle } from '$lib/config/heroImages';

	const importantDates = [
		{ event: "Abstract Submission Opens", date: "1 Dec 2025" },
		{ event: "Abstract Submission Deadline", date: "28 Feb 2026" },
		{ event: "Notification of Acceptance", date: "15 Mar 2026" },
		{ event: "Conference Registration Opens", date: "16 Mar 2026" },
	];

	const topics = [
		{
			title: "Foundations of Complex Systems and Networks",
			items: "Network Visualisation, Quantum Complexity, Structural Network Properties, Network Analysis and Measures, Statistical Inference on Networks, Communities and Mesoscale Structures, Temporal and Spatial Networks, Multilayer and Multiplex Networks, Higher-Order Interactions, Synchronization and Control, Network Embedding and Geometry"
		},
		{
			title: "Computation and Information Processing in Complex Systems and Networks",
			items: "Patterns and Signal Detection, Graph Mining and Large Graph Analytics, Algorithms for Network Analysis, Link Prediction and Ranking, Graph Signal Processing, Motif Discovery, Complex Networks Mining, Large-scale Graph Analytics, Machine Learning and Networks"
		},
		{
			title: "Dynamics of Complex Systems and of/on Networks",
			items: "Models of Complex Systems, Models of Complex Networks, Adaptive Networks, Diffusion, Spreading, and Transport, Percolation, Resilience, Phase Transitions"
		},
		{
			title: "Biological and Ecological Complexity",
			items: "Biological and Ecological Networks"
		},
		{
			title: "Cognitive, Psychological, and Neuroscientific Complexity",
			items: "Cognitive Network Science, Network Neuroscience"
		},
		{
			title: "Economic and Financial Complexity",
			items: "Economic and Financial Networks, Supply Chain Networks"
		},
		{
			title: "Environmental Complexity",
			items: "Energy, Environment, Sustainability, Climate and Global Change"
		},
		{
			title: "Health System Complexity",
			items: "Epidemics, Network Epidemiology, Network Neuroscience and Medicine"
		},
		{
			title: "Social, Cultural, and Technological Complexity",
			items: "Computational Social Sciences, Social Networks and Opinion Dynamics, Social Groups and Political Networks, Political Networks, Social Reputation, Influence, and Trust, Science of Science, Network Science and Education, Networks and Innovation, Quantifying Success through Social Network Analysis, Mobile Call Networks, Recommendation Systems and Networks, Networks of CPS/IoT, Networks of Information Systems, Information Spreading in Social Media, Rumor and Viral Marketing, Resilience and Robustness"
		},
		{
			title: "Urban Complexity",
			items: "Cities, Mobility, Transport, Networks, Smart Cities and Smart Grids, Technological and Infrastructure Networks"
		}
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
			<div class="alert alert-info mb-8">
				<Icon name="info" class_="stroke-current shrink-0 h-6 w-6" />
				<div>
					<h3 class="font-bold">Abstract Submission Opens 1 Dec 2025</h3>
					<div class="text-sm">Deadline: 28 Feb 2026 | Submit to: <Email email="SPMS-APCNCS2026@ntu.edu.sg" /></div>
				</div>
			</div>

			<div class="prose prose-lg max-w-none mb-12">
				<h2 class="text-3xl font-bold mb-6">Invitation</h2>
				<p>
					We are pleased to invite submissions for the Asia-Pacific Conference on Networks and Complex Systems 2026, whose goal is to provide more opportunities for Asia-Pacific scientists in network science and complex systems science to share their works, and also to encourage more intense interactions with scientists from other parts of the world.
				</p>
			</div>

			<div class="prose prose-lg max-w-none mb-12">
				<h2 class="text-3xl font-bold mb-6">Format</h2>
				<p>
					Submissions should be in the form of <strong>two-page extended abstracts</strong> containing the titles of the talks, the lists of authors and their affiliations, and paragraphs on the motivations behind the studies, the approaches and methodologies, the key results, and the conclusions and outlooks.
				</p>
				<p>
					For each abstract, the <strong>motivation paragraph</strong> should include a brief survey of the research topic, the research questions being asked, and why the answers to these questions are important. The <strong>approach and methodology paragraph</strong> should succinctly summarize how the study was carried out, and why certain methods are used. The <strong>results paragraph</strong> should summarize only the key results, and whether and which research questions they answer. This should then be followed by one or two short summary statements in the <strong>conclusions and outlook paragraph</strong>, as well as additional studies likely to be completed by the time of the conference.
				</p>
				<p>
					The extended abstract must include a short list of references, but should also take advantage of the second page to include figures on the research questions, the methods, and the results, with appropriate cross referencing in the text. For studies involving humans and animals, we ask for an ethics statement to be included at the end of the abstract.
				</p>
				<p>
					Please use the templates provided for <Link href="/templates/APCNCS2026_Word_template.zip" text="Word" download={true} target="_self" /> or <Link href="/templates/APCNCS2026_simple_Latex_template.zip" text="LaTeX" download={true} target="_self" />.
				</p>
			</div>

			<div class="prose prose-lg max-w-none mb-12">
				<h2 class="text-3xl font-bold mb-6">Submission Guidelines</h2>
				<p>
					Submission opens on <strong>1 Dec 2025</strong>, and will close on <strong>28 Feb 2026</strong>. The abstract should be written in English, using a suitable 12-point font, on an A4-size document with one-inch margins, and submitted through email to <Email email="SPMS-APCNCS2026@ntu.edu.sg" />.
				</p>
				<p>
					The use of generative artificial intelligence (GenAI) for research, i.e., for statistical sampling from a probabilistic model is acceptable. How this is done should be mentioned in the approach and methodology paragraph. The use of GenAI for editorial support, i.e., check for grammatical errors or typographical errors, as well as for clarity in the writing is also acceptable. Contributing authors should exercise human oversight on the submitted version, to ensure that the GenAI suggested edits are aligned with their original intents.
				</p>
			</div>
		</div>
	</section>

	<section class="py-16 px-4 bg-base-200">
		<div class="max-w-4xl mx-auto">
			<div class="prose prose-lg max-w-none mb-12">
				<h2 class="text-3xl font-bold mb-6">Scope</h2>
				<p>The scope of the conference includes, but is not limited to, the following:</p>
			</div>

			<div class="space-y-6">
				{#each topics as topic}
					<div class="card bg-base-100 shadow-md">
						<div class="card-body">
							<h3 class="card-title text-primary text-lg">{topic.title}</h3>
							<p class="text-sm italic">{topic.items}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-16 px-4">
		<div class="max-w-4xl mx-auto">
			<div class="prose prose-lg max-w-none mb-12">
				<h2 class="text-3xl font-bold mb-6">Acceptance Notification and Conference Attendance</h2>
				<p>
					Acceptance notification emails will be sent to contributing authors on <strong>15 Mar 2026</strong>, and conference registration will open on <strong>16 Mar 2026</strong>. As we plan the programme of invited talks, contributed talks, and posters, we ask for at least one author of an accepted abstract to register for the conference during the Early Bird period.
				</p>
			</div>

			<div class="prose prose-lg max-w-none mb-12">
				<h2 class="text-3xl font-bold mb-6">Special Issue</h2>
				<p>
					In partnership with World Scientific, we will edit a special issue in <em>Advances in Complex Systems</em> in conjunction with the conference. Invited speakers will be requested to submit mini-reviews based on their talks, while selected participants will be invited to submit full papers based on their contributed talks. The opening and closing dates of this special issue will be made known when more information is available.
				</p>
			</div>

			<div class="prose prose-lg max-w-none mb-12">
				<h2 class="text-3xl font-bold mb-6">Focused Sessions</h2>
				<p>
					For this inaugural edition of the conference, the local organizers have taken the initiative to organize two focused sessions. A focus session can have its own invited speakers, and will manage its own abstract submission for the contributed talks. Focus session participants can also submit to the main conference, since they must register for the main conference to attend the focus session, so long as the two talks are different.
				</p>

				<div class="mt-6 space-y-6">
					<div class="card bg-base-100 shadow-md">
						<div class="card-body">
							<h3 class="card-title text-primary text-lg">1. Complexity of AI</h3>
							<p class="text-sm">
								Modern artificial intelligence (AI) models, specifically artificial neural networks, are typical complex systems consisting of a large number of interacting variables. For AI to progress further, a better understanding of their working principles based on complexity science is necessary. In this focus session, we invite participants working on the phase transition, emergence of intelligence, multiple meta-stabilities, chaos, self-organization aspects of AI.
							</p>
							<p class="text-sm italic mt-2">
								Participants will also be invited to contribute to a special issue of the same name, which is co-listed on <Link href="https://www.mdpi.com/journal/entropy/special_issues/AQO5Z1H353" text="MDPI Entropy" /> and <Link href="https://www.mdpi.com/journal/complexities/special_issues/477OQWUB64" text="MDPI Complexities" />.
							</p>
							<div class="card-actions justify-end mt-4">
								<a href="/focus-complexity-ai" class="btn btn-primary btn-sm">View Focus Session Details</a>
							</div>
						</div>
					</div>

					<div class="card bg-base-100 shadow-md">
						<div class="card-body">
							<h3 class="card-title text-primary text-lg">2. Games on Complex Systems</h3>
							<p class="text-sm">
								Modern game-theoretic systems—spanning economics, biology, AI, and engineered networks—are increasingly large, data-driven, and shaped by learning algorithms. As traditional equilibrium concepts become insufficient for such complex environments, ideas from complexity science offer powerful tools for understanding how large-scale behaviours such as cooperation, polarisation, self-organisation, or instability emerge from local strategic interactions. Recent advances in evolutionary and learning-based game dynamics, mean-field models for large populations, and algorithmic game theory have expanded our ability to analyse adaptation, coordination, and competition in both natural and artificial systems. At the same time, machine learning has pushed game theory to the forefront: multi-agent reinforcement learning, adversarial training, and emergent behaviours in large language models highlight the growing interplay between strategic reasoning and modern AI.
							</p>
							<p class="text-sm mt-2">
								This focus session brings together researchers across these areas to share new theoretical, computational, and data-driven insights. We welcome interdisciplinary contributions that deepen our understanding of complex multi-agent interactions and their real-world applications.
							</p>
							<p class="text-sm italic mt-2">
								Special issue in MDPI Games.
							</p>
							<div class="card-actions justify-end mt-4">
								<a href="/focus-games" class="btn btn-primary btn-sm">View Focus Session Details</a>
							</div>
						</div>
					</div>
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