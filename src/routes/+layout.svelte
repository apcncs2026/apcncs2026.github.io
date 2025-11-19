<script lang="ts">
	import '../app.css';
	import Icon from '$lib/components/Icon.svelte';
	import Email from '$lib/components/Email.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>APCNCS 2026</title>
</svelte:head>

<div class="min-h-screen bg-base-100" data-theme="light">
	<header class="navbar navbar-light">
		<div class="navbar-start">
			<div class="dropdown lg:hidden">
				<button tabindex="0" class="btn btn-ghost" aria-label="Toggle navigation menu">
					<Icon name="menu" class_="h-5 w-5" />
				</button>
				<ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-base-content rounded-box w-72">
					<li><a href="/">Home</a></li>
					<li><a href="/organizers">Organizers</a></li>
					<li><a href="/speakers">Invited Speakers</a></li>
					<li>
						<details>
							<summary>Conference</summary>
							<ul class="w-64">
								<li><a href="/call-for-abstracts">Call for Abstracts</a></li>
								<li><a href="/focus-complexity-ai">Focus Session: Complexity of AI</a></li>
							</ul>
						</details>
					</li>
					<li><a href="/registration">Registration</a></li>
					<li><a href="/programme">Programme</a></li>
					<li><a href="/accommodation">Accommodation</a></li>
					<li><a href="/sponsors">Sponsors</a></li>
					<li><a href="/contact">Contact Us</a></li>
				</ul>
			</div>
			<a class="btn btn-ghost text-xl" href="/">APCNCS 2026</a>
		</div>
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal px-1">
				<li><a href="/">Home</a></li>
				<li><a href="/organizers">Organizers</a></li>
				<li><a href="/speakers">Invited Speakers</a></li>
				<li>
					<details>
						<summary>Conference</summary>
						<ul class="p-2 bg-base-100 rounded-t-none z-50 w-64">
							<li><a href="/call-for-abstracts" class="whitespace-nowrap">Call for Abstracts</a></li>
							<li><a href="/focus-complexity-ai" class="whitespace-nowrap">Focus Session: Complexity of AI</a></li>
						</ul>
					</details>
				</li>
				<li><a href="/registration">Registration</a></li>
				<li><a href="/programme">Programme</a></li>
				<li><a href="/accommodation">Accommodation</a></li>
				<li><a href="/sponsors">Sponsors</a></li>
				<li><a href="/contact">Contact Us</a></li>
			</ul>
		</div>
		<div class="navbar-end"></div>
	</header>

	<main>
		{@render children?.()}
	</main>

	<footer class="footer p-10 footer-light">
		<div class="max-w-7xl mx-auto w-full">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div>
					<h3 class="text-lg font-bold mb-2">APCNCS 2026</h3>
					<p>Asia-Pacific Summer School and Conference on Networks and Complex Systems</p>
				</div>
				<div>
					<h3 class="text-lg font-bold mb-2">Quick Links</h3>
					<ul class="space-y-1">
						<li><a href="/registration" class="link link-hover">Registration</a></li>
						<li><a href="/programme" class="link link-hover">Programme</a></li>
						<li><a href="/call-for-abstracts" class="link link-hover">Submit Abstract</a></li>
					</ul>
				</div>
				<div>
					<h3 class="text-lg font-bold mb-2">Contact</h3>
					<p>Email: <Email email="SPMS-APCNCS2026@ntu.edu.sg" /></p>
				</div>
			</div>
			<div class="divider"></div>
			<p class="text-center">&copy; 2026 APCNCS. All rights reserved.</p>
		</div>
	</footer>
</div>