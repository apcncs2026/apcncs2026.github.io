<script lang="ts">
	interface RegistrationFee {
		category: string;
		earlyBird: string;
		regular: string;
		onsite: string;
		includes: string[];
	}

	const registrationFees: RegistrationFee[] = [
		{
			category: "Regular Participant",
			earlyBird: "$450",
			regular: "$550",
			onsite: "$650",
			includes: ["All conference sessions", "Conference materials", "Coffee breaks", "Lunch (4 days)", "Welcome reception", "Conference dinner"]
		},
		{
			category: "Student",
			earlyBird: "$250",
			regular: "$350",
			onsite: "$450",
			includes: ["All conference sessions", "Conference materials", "Coffee breaks", "Lunch (4 days)", "Welcome reception"]
		},
		{
			category: "Virtual Attendance",
			earlyBird: "$150",
			regular: "$200",
			onsite: "N/A",
			includes: ["Access to all live sessions", "Conference recordings", "Digital conference materials", "Virtual networking sessions"]
		}
	];

	const paymentMethods = [
		"Credit Card (Visa, MasterCard, American Express)",
		"Bank Transfer",
		"PayPal",
		"Purchase Order (institutions only)"
	];

	let selectedCategory = "";
	let attendanceType = "in-person";
</script>

<svelte:head>
	<title>Registration - Academic Conference 2025</title>
	<meta name="description" content="Register for Academic Conference 2025">
</svelte:head>

<div class="min-h-screen">
	<section class="hero bg-gradient-to-r from-primary to-accent text-white py-20">
		<div class="hero-content text-center">
			<div class="max-w-4xl">
				<h1 class="text-5xl font-bold mb-4">Conference Registration</h1>
				<p class="text-xl">Join us for Academic Conference 2025</p>
			</div>
		</div>
	</section>

	<section class="py-16 px-4">
		<div class="max-w-6xl mx-auto">
			<div class="alert alert-info mb-8">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
				</svg>
				<div>
					<h3 class="font-bold">Early Bird Registration ends April 30, 2025</h3>
					<div class="text-sm">Register early to save on registration fees!</div>
				</div>
			</div>

			<h2 class="text-3xl font-bold mb-8">Registration Fees</h2>
			<div class="overflow-x-auto">
				<table class="table table-zebra w-full">
					<thead>
						<tr>
							<th>Category</th>
							<th>Early Bird<br/><span class="text-sm font-normal">(Until Apr 30)</span></th>
							<th>Regular<br/><span class="text-sm font-normal">(May 1 - Jun 14)</span></th>
							<th>On-site<br/><span class="text-sm font-normal">(Jun 15 onwards)</span></th>
						</tr>
					</thead>
					<tbody>
						{#each registrationFees as fee}
							<tr>
								<td class="font-semibold">{fee.category}</td>
								<td class="text-success font-bold">{fee.earlyBird}</td>
								<td>{fee.regular}</td>
								<td>{fee.onsite}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</section>

	<section class="py-16 px-4 bg-base-200">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-3xl font-bold mb-8">What's Included</h2>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				{#each registrationFees as fee}
					<div class="card bg-white shadow-xl">
						<div class="card-body">
							<h3 class="card-title text-primary">{fee.category}</h3>
							<ul class="space-y-2">
								{#each fee.includes as item}
									<li class="flex items-start gap-2">
										<svg class="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
										</svg>
										<span class="text-sm">{item}</span>
									</li>
								{/each}
							</ul>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-16 px-4">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-3xl font-bold mb-8">Registration Form</h2>
			<form class="space-y-6">
				<div class="card bg-base-200 shadow-xl">
					<div class="card-body">
						<h3 class="text-xl font-bold mb-4">Personal Information</h3>
						<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div class="form-control">
								<label class="label" for="firstName">
									<span class="label-text">First Name *</span>
								</label>
								<input type="text" id="firstName" placeholder="John" class="input input-bordered" required />
							</div>
							<div class="form-control">
								<label class="label" for="lastName">
									<span class="label-text">Last Name *</span>
								</label>
								<input type="text" id="lastName" placeholder="Doe" class="input input-bordered" required />
							</div>
							<div class="form-control">
								<label class="label" for="regEmail">
									<span class="label-text">Email *</span>
								</label>
								<input type="email" id="regEmail" placeholder="john.doe@email.com" class="input input-bordered" required />
							</div>
							<div class="form-control">
								<label class="label" for="phone">
									<span class="label-text">Phone</span>
								</label>
								<input type="tel" id="phone" placeholder="+1 234 567 8900" class="input input-bordered" />
							</div>
							<div class="form-control md:col-span-2">
								<label class="label" for="institution">
									<span class="label-text">Institution/Organization *</span>
								</label>
								<input type="text" id="institution" placeholder="University of Example" class="input input-bordered" required />
							</div>
						</div>
					</div>
				</div>

				<div class="card bg-base-200 shadow-xl">
					<div class="card-body">
						<h3 class="text-xl font-bold mb-4">Registration Type</h3>
						<div class="form-control">
							<label class="label" for="category">
								<span class="label-text">Select Category *</span>
							</label>
							<select id="category" class="select select-bordered" bind:value={selectedCategory} required>
								<option value="">Choose a category</option>
								<option value="regular">Regular Participant</option>
								<option value="student">Student</option>
								<option value="virtual">Virtual Attendance</option>
							</select>
						</div>
						
						<div class="form-control mt-4">
							<fieldset>
								<legend class="label-text font-semibold">Attendance Type *</legend>
							<div class="flex gap-4">
								<label class="label cursor-pointer">
									<input type="radio" name="attendance" value="in-person" bind:group={attendanceType} class="radio" />
									<span class="label-text ml-2">In-Person</span>
								</label>
								<label class="label cursor-pointer">
									<input type="radio" name="attendance" value="virtual" bind:group={attendanceType} class="radio" />
									<span class="label-text ml-2">Virtual</span>
								</label>
							</div>
						</div>
					</div>
				</div>

				<div class="card bg-base-200 shadow-xl">
					<div class="card-body">
						<h3 class="text-xl font-bold mb-4">Additional Options</h3>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">I will present a paper/poster</span>
								<input type="checkbox" class="checkbox" />
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">I have dietary restrictions</span>
								<input type="checkbox" class="checkbox" />
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">I require accessibility accommodations</span>
								<input type="checkbox" class="checkbox" />
							</label>
						</div>
					</div>
				</div>

				<div class="card bg-base-200 shadow-xl">
					<div class="card-body">
						<h3 class="text-xl font-bold mb-4">Payment Method</h3>
						<div class="space-y-2">
							{#each paymentMethods as method}
								<label class="label cursor-pointer justify-start gap-3">
									<input type="radio" name="payment" class="radio" />
									<span class="label-text">{method}</span>
								</label>
							{/each}
						</div>
					</div>
				</div>

				<div class="flex gap-4 justify-end">
					<button type="button" class="btn btn-ghost">Cancel</button>
					<button type="submit" class="btn btn-primary">Proceed to Payment</button>
				</div>
			</form>
		</div>
	</section>

	<section class="py-16 px-4 bg-base-200">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-3xl font-bold mb-8">Cancellation Policy</h2>
			<div class="card bg-white shadow-xl">
				<div class="card-body">
					<ul class="space-y-3">
						<li>• Cancellations before April 30, 2025: 80% refund</li>
						<li>• Cancellations between May 1-31, 2025: 50% refund</li>
						<li>• Cancellations after June 1, 2025: No refund</li>
						<li>• Substitutions are allowed at no extra charge</li>
						<li>• All cancellations must be submitted in writing</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</div>