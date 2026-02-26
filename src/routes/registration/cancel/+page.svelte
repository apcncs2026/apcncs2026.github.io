<svelte:head>
	<title>Registration Cancelled - APCNCS 2026</title>
	<meta name="description" content="Your registration payment was cancelled." />
</svelte:head>

<div class="min-h-screen">
	<section class="py-24 px-4">
		<div class="max-w-2xl mx-auto text-center">
			<div class="mb-8">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-warning mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
				</svg>
			</div>

			<h1 class="text-4xl font-bold mb-4">Payment Cancelled</h1>
			<p class="text-lg text-base-content/70 mb-8">
				Your payment was not processed. No charges have been made. You can try registering again whenever you're ready.
			</p>

			<div class="flex gap-4 justify-center">
				<a href="/registration" class="btn btn-primary">Try Again</a>
				<a href="/" class="btn btn-outline">Back to Home</a>
			</div>
		</div>
	</section>
</div>
