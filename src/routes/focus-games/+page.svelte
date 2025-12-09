<script lang="ts">
	import { getHeroBackgroundStyle } from '$lib/config/heroImages';
	import Icon from '$lib/components/Icon.svelte';

	const topics = [
		"Evolutionary games and learning dynamics in social and biological systems",
		"Algorithmic and computational game theory with applications in robotics, communications, and data science",
		"Mean-field games and other models for large populations",
		"Game-theoretic machine learning, including reinforcement learning and large language models",
		"Security and adversarial interactions, such as Stackelberg and security games"
	];
</script>

<svelte:head>
	<title>Focus Session: Games on Complex Systems - APCNCS 2026</title>
	<meta name="description" content="Focus session on Games on Complex Systems at APCNCS 2026, exploring game theory, complexity science, and computational modelling">
</svelte:head>

<div class="min-h-screen">
	<section class="hero hero-bg hero-page" style={getHeroBackgroundStyle('focus')}>
		<div class="hero-content text-center hero-content-overlay">
			<div class="max-w-4xl">
				<h1 class="text-5xl font-bold hero-text mb-4">Focus Session: Games on Complex Systems</h1>
				<p class="text-xl hero-text-secondary">APCNCS 2026 | 9-12 June 2026, Singapore</p>
			</div>
		</div>
	</section>

	<section class="py-16 px-4">
		<div class="max-w-4xl mx-auto">
			<div class="alert alert-info mb-8">
				<Icon name="info" class_="stroke-current shrink-0 h-6 w-6" />
				<div>
					<h3 class="font-bold">Focus Session</h3>
					<div class="text-sm">Submission details and key dates to be announced</div>
				</div>
			</div>

			<div class="prose prose-lg max-w-none mb-12">
				<h2 class="text-3xl font-bold mb-6">Introduction</h2>
				<p>
					Modern game-theoretic frameworks underpin our understanding of strategic behaviour across economics, biology, computer science, and complex engineered systems. As these systems scale and become increasingly mediated by computation, data, and learning algorithms, traditional equilibrium-based approaches alone are no longer sufficient. Concepts from complexity science now offer a powerful lens for analysing how macroscopic phenomena—such as cooperation, polarisation, self-organisation, instability, or sudden transitions—emerge from microscopic strategic interactions.
				</p>
				<p>
					Evolutionary and learning-based game dynamics have become central to explaining adaptation in social and biological populations, as well as in artificial multi-agent environments. In parallel, advances such as mean-field game theory provide tractable methods for modelling very large populations, linking stochastic control, partial differential equations, and behavioural modelling at scale. Rapid progress in algorithmic game theory, mechanism design, and computational equilibrium analysis has broadened the field's reach to robotics, communications networks, distributed optimisation, and data-driven systems.
				</p>
				<p>
					Machine learning has further propelled game theory to the forefront of modern research. Multi-agent reinforcement learning now routinely models competition and cooperation; generative and large language models increasingly display emergent strategic behaviours; and adversarial learning has strengthened ties to robustness, cybersecurity, and Stackelberg-type interactions. Across these domains, ideas from complexity science—phase transitions, metastability, chaos, and multi-stability—provide unifying principles for understanding when systems stabilise, fragment, or respond dramatically to small perturbations.
				</p>
				<p>
					This focus session aims to unite researchers working at the intersection of game theory, complexity science, and computational modelling. We welcome contributions that introduce new theoretical frameworks, algorithms, or empirical findings; highlight cross-disciplinary connections; or showcase emerging applications in economics, biology, social systems, artificial intelligence, and complex engineered infrastructures. By fostering dialogue across these communities, we aim to deepen our understanding of modern strategic systems and chart new directions in the study of large-scale multi-agent interactions.
				</p>
			</div>
		</div>
	</section>

	<section class="py-16 px-4 bg-base-200">
		<div class="max-w-4xl mx-auto">
			<div class="prose prose-lg max-w-none mb-12">
				<h2 class="text-3xl font-bold mb-6">Topics of Interest</h2>
				<p>
					Topics of interest include (but are not limited to):
				</p>
			</div>

			<div class="grid grid-cols-1 gap-4 mb-12">
				{#each topics as topic}
					<div class="flex items-start">
						<Icon name="check" class_="text-primary mt-1 mr-3 flex-shrink-0" />
						<span class="text-lg">{topic}</span>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-16 px-4">
		<div class="max-w-4xl mx-auto">
			<div class="prose prose-lg max-w-none mb-12">
				<h2 class="text-3xl font-bold mb-6">Submission and Registration</h2>
				<p>
					All contributors must be registered for APCNCS 2026 to participate in the focus session. Submission details, key dates, and organizer information will be announced soon.
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
					Participants of this focus session will be invited to contribute to a special issue in MDPI Games.
				</p>
			</div>
		</div>
	</section>

	<section class="py-16 px-4 bg-conf-primary text-white">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl font-bold mb-6">Interested in Participating?</h2>
			<p class="text-xl mb-8">
				Register for APCNCS 2026 and stay tuned for submission details
			</p>
			<div class="space-x-4">
				<a href="/registration" class="btn btn-accent">Register for APCNCS 2026</a>
				<a href="/call-for-abstracts" class="btn btn-accent">Main Conference Call for Abstracts</a>
			</div>
		</div>
	</section>
</div>
