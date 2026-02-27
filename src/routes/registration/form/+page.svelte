<script lang="ts">
	import { getHeroBackgroundStyle } from '$lib/config/heroImages';
	import RegistrationForm from '$lib/components/RegistrationForm.svelte';
</script>

<svelte:head>
	<title>Register - APCNCS 2026</title>
	<meta name="description" content="Register for the Asia-Pacific Summer School and Conference on Networks and Complex Systems">
</svelte:head>

<div class="min-h-screen">
	<section class="hero hero-bg hero-page" style={getHeroBackgroundStyle('registration')}>
		<div class="hero-content text-center hero-content-overlay">
			<div class="max-w-4xl">
				<h1 class="text-5xl font-bold hero-text mb-4">Registration Form</h1>
				<p class="text-xl hero-text-secondary">APCNCS 2026</p>
			</div>
		</div>
	</section>

	<section class="py-16 px-4">
		<div class="max-w-4xl mx-auto">
			<RegistrationForm />
		</div>
	</section>
</div>
