<script lang="ts">
	interface ContactPerson {
		name: string;
		role: string;
		email: string;
		phone?: string;
	}

	const contacts: ContactPerson[] = [
		{
			name: "Dr. Sarah Chen",
			role: "Conference Chair",
			email: "chair@conference2025.edu",
			phone: "+1 (555) 123-4567"
		},
		{
			name: "Prof. Michael Johnson",
			role: "Program Committee",
			email: "program@conference2025.edu"
		},
		{
			name: "Emily Rodriguez",
			role: "Registration & Logistics",
			email: "registration@conference2025.edu",
			phone: "+1 (555) 234-5678"
		},
		{
			name: "David Lee",
			role: "Sponsorship Coordinator",
			email: "sponsors@conference2025.edu"
		},
		{
			name: "Technical Support",
			role: "IT & Virtual Attendance",
			email: "techsupport@conference2025.edu"
		}
	];

	let formData = {
		name: '',
		email: '',
		subject: '',
		message: ''
	};

	function handleSubmit(e: Event) {
		e.preventDefault();
		// Handle form submission
		console.log('Form submitted:', formData);
		alert('Thank you for your message. We will respond within 24-48 hours.');
	}
</script>

<svelte:head>
	<title>Contact Us - Academic Conference 2025</title>
	<meta name="description" content="Contact information for Academic Conference 2025">
</svelte:head>

<div class="min-h-screen">
	<section class="hero bg-gradient-to-r from-secondary to-accent text-white py-20">
		<div class="hero-content text-center">
			<div class="max-w-4xl">
				<h1 class="text-5xl font-bold mb-4">Contact Us</h1>
				<p class="text-xl">We're here to help with any questions about the conference</p>
			</div>
		</div>
	</section>

	<section class="py-16 px-4">
		<div class="max-w-6xl mx-auto">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
				<div>
					<h2 class="text-3xl font-bold mb-8">Get in Touch</h2>
					<form on:submit={handleSubmit} class="space-y-6">
						<div class="form-control">
							<label class="label" for="name">
								<span class="label-text">Full Name *</span>
							</label>
							<input 
								type="text" 
								id="name"
								bind:value={formData.name}
								placeholder="John Doe" 
								class="input input-bordered" 
								required 
							/>
						</div>

						<div class="form-control">
							<label class="label" for="email">
								<span class="label-text">Email Address *</span>
							</label>
							<input 
								type="email" 
								id="email"
								bind:value={formData.email}
								placeholder="john.doe@email.com" 
								class="input input-bordered" 
								required 
							/>
						</div>

						<div class="form-control">
							<label class="label" for="subject">
								<span class="label-text">Subject *</span>
							</label>
							<select 
								id="subject"
								bind:value={formData.subject}
								class="select select-bordered" 
								required
							>
								<option value="">Select a topic</option>
								<option value="registration">Registration Inquiry</option>
								<option value="abstract">Abstract Submission</option>
								<option value="accommodation">Accommodation</option>
								<option value="sponsorship">Sponsorship</option>
								<option value="technical">Technical Support</option>
								<option value="general">General Inquiry</option>
							</select>
						</div>

						<div class="form-control">
							<label class="label" for="message">
								<span class="label-text">Message *</span>
							</label>
							<textarea 
								id="message"
								bind:value={formData.message}
								class="textarea textarea-bordered h-32" 
								placeholder="Your message..."
								required
							></textarea>
						</div>

						<button type="submit" class="btn btn-primary w-full">Send Message</button>
					</form>
				</div>

				<div>
					<h2 class="text-3xl font-bold mb-8">Contact Information</h2>
					
					<div class="card bg-base-200 shadow-xl mb-6">
						<div class="card-body">
							<h3 class="card-title text-primary mb-4">Conference Secretariat</h3>
							<div class="space-y-3">
								<div class="flex items-start gap-3">
									<svg class="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
									</svg>
									<div>
										<p class="font-semibold">Address</p>
										<p class="text-sm">University Conference Center<br/>123 Academic Boulevard<br/>Science City, SC 12345</p>
									</div>
								</div>
								<div class="flex items-start gap-3">
									<svg class="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
									</svg>
									<div>
										<p class="font-semibold">Phone</p>
										<p class="text-sm">+1 (555) 123-4567</p>
									</div>
								</div>
								<div class="flex items-start gap-3">
									<svg class="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
									</svg>
									<div>
										<p class="font-semibold">General Email</p>
										<p class="text-sm">info@conference2025.edu</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<h3 class="text-2xl font-bold mb-6">Key Contacts</h3>
					<div class="space-y-4">
						{#each contacts as contact}
							<div class="card card-compact bg-base-200 shadow">
								<div class="card-body">
									<h4 class="font-bold">{contact.name}</h4>
									<p class="text-sm text-gray-600">{contact.role}</p>
									<div class="text-sm space-y-1">
										<p class="flex items-center gap-2">
											<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
											</svg>
											{contact.email}
										</p>
										{#if contact.phone}
											<p class="flex items-center gap-2">
												<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
												</svg>
												{contact.phone}
											</p>
										{/if}
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="py-16 px-4 bg-base-200">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
			<div class="max-w-3xl mx-auto space-y-4">
				<div class="collapse collapse-arrow bg-white">
					<input type="radio" name="faq-accordion" checked />
					<div class="collapse-title text-xl font-medium">
						What is the deadline for abstract submission?
					</div>
					<div class="collapse-content">
						<p>The abstract submission deadline is March 15, 2025. Late submissions may be considered on a case-by-case basis.</p>
					</div>
				</div>
				
				<div class="collapse collapse-arrow bg-white">
					<input type="radio" name="faq-accordion" />
					<div class="collapse-title text-xl font-medium">
						Is virtual attendance available?
					</div>
					<div class="collapse-content">
						<p>Yes! We offer virtual attendance options with access to all live sessions, recordings, and virtual networking opportunities.</p>
					</div>
				</div>

				<div class="collapse collapse-arrow bg-white">
					<input type="radio" name="faq-accordion" />
					<div class="collapse-title text-xl font-medium">
						Are there student discounts available?
					</div>
					<div class="collapse-content">
						<p>Yes, we offer significantly reduced registration rates for students. Please provide valid student ID during registration.</p>
					</div>
				</div>

				<div class="collapse collapse-arrow bg-white">
					<input type="radio" name="faq-accordion" />
					<div class="collapse-title text-xl font-medium">
						What is included in the registration fee?
					</div>
					<div class="collapse-content">
						<p>Registration includes access to all sessions, conference materials, coffee breaks, daily lunches, welcome reception, and certificate of attendance. See the registration page for tier-specific benefits.</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="py-16 px-4">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl font-bold mb-8">Stay Connected</h2>
			<p class="text-lg mb-8">Follow us on social media for the latest updates</p>
			<div class="flex gap-4 justify-center">
				<a href="https://facebook.com" class="btn btn-circle btn-primary" aria-label="Follow us on Facebook">
					<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
						<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
					</svg>
				</a>
				<a href="https://twitter.com" class="btn btn-circle btn-primary" aria-label="Follow us on Twitter">
					<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
						<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
					</svg>
				</a>
				<a href="https://linkedin.com" class="btn btn-circle btn-primary" aria-label="Follow us on LinkedIn">
					<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
						<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
					</svg>
				</a>
			</div>
		</div>
	</section>
</div>