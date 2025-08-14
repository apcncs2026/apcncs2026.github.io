<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Academic Conference 2025</title>
</svelte:head>

<div class="min-h-screen bg-base-100" data-theme="light">
	<header class="navbar bg-primary text-primary-content shadow-lg">
		<div class="navbar-start">
			<div class="dropdown lg:hidden">
				<button tabindex="0" class="btn btn-ghost" aria-label="Toggle navigation menu">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
				<ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-base-content rounded-box w-52">
					<li><a href="/">Home</a></li>
					<li><a href="/organizers">Organizers</a></li>
					<li><a href="/speakers">Invited Speakers</a></li>
					<li><a href="/call-for-abstracts">Call for Abstracts</a></li>
					<li><a href="/registration">Registration</a></li>
					<li><a href="/programme">Programme</a></li>
					<li><a href="/accommodation">Accommodation</a></li>
					<li><a href="/sponsors">Sponsors</a></li>
					<li><a href="/contact">Contact Us</a></li>
				</ul>
			</div>
			<a class="btn btn-ghost text-xl" href="/">Academic Conference 2025</a>
		</div>
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal px-1">
				<li><a href="/">Home</a></li>
				<li><a href="/organizers">Organizers</a></li>
				<li><a href="/speakers">Invited Speakers</a></li>
				<li><a href="/call-for-abstracts">Call for Abstracts</a></li>
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

	<footer class="footer p-10 bg-neutral text-neutral-content">
		<div class="max-w-7xl mx-auto w-full">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div>
					<h3 class="text-lg font-bold mb-2">Academic Conference 2025</h3>
					<p>Advancing knowledge through collaboration</p>
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
					<p>Email: info@conference2025.edu</p>
					<p>Phone: +1 (555) 123-4567</p>
				</div>
			</div>
			<div class="divider"></div>
			<p class="text-center">&copy; 2025 Academic Conference. All rights reserved.</p>
		</div>
	</footer>
</div>