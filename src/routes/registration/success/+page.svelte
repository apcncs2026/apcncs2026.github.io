<svelte:head>
	<title>Registration Successful - APCNCS 2026</title>
	<meta name="description" content="Your registration for APCNCS 2026 has been completed successfully." />
</svelte:head>

<div class="min-h-screen">
	<section class="py-24 px-4">
		<div class="max-w-2xl mx-auto text-center">
			<div class="mb-8">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-success mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
			</div>

			<h1 class="text-4xl font-bold mb-4">Registration Successful!</h1>
			<p class="text-lg text-base-content/70 mb-8">
				Thank you for registering for APCNCS 2026. A confirmation email will be sent to you shortly with your registration details.
			</p>

			<div class="card bg-base-200 mb-8">
				<div class="card-body text-left">
					<h2 class="card-title">What's Next?</h2>
					<ul class="list-disc list-inside space-y-2 text-base-content/80">
						<li>Check your email for the payment receipt from Stripe</li>
						<li>You'll receive a confirmation email with your registration details</li>
						<li>If you submitted an abstract, you'll be notified of acceptance separately</li>
						<li>Check the <a href="/programme" class="link link-primary">programme</a> for schedule updates</li>
					</ul>
				</div>
			</div>

			<div class="flex gap-4 justify-center">
				<a href="/" class="btn btn-primary">Back to Home</a>
				<a href="/programme" class="btn btn-outline">View Programme</a>
			</div>
		</div>
	</section>
</div>
