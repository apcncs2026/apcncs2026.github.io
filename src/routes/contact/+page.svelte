
<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import Email from '$lib/components/Email.svelte';
	import { getHeroBackgroundStyle } from '$lib/config/heroImages';
</script>

<svelte:head>
	<title>Contact - APCNCS 2026</title>
	<meta name="description" content="Contact information for Asia-Pacific Summer School and Conference on Networks and Complex Systems">
</svelte:head>

<div class="min-h-screen">
	<section class="hero hero-bg hero-page" style={getHeroBackgroundStyle('contact')}>
		<div class="hero-content text-center hero-content-overlay">
			<div class="max-w-4xl">
				<h1 class="text-5xl font-bold hero-text mb-4">Contact</h1>
				<p class="text-xl hero-text-secondary">APCNCS 2026 Contact Information</p>
			</div>
		</div>
	</section>

	<section class="py-16 px-4">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-4xl font-bold text-center mb-12">Contact</h2>
			<div class="prose prose-lg max-w-4xl mx-auto">
				<p>For inquiries about APCNCS 2026, please contact the organizing committee.</p>
				<p>Further contact details will be provided soon.</p>
				<p>Email: <Email email="someone@example.com" /></p>
			</div>
		</div>
	</section>

</div>