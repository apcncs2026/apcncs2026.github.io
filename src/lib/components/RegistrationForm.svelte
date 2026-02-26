<script lang="ts">
	import PriceSummary from './PriceSummary.svelte';
	import {
		API_BASE_URL,
		CATEGORIES,
		CATERING_OPTIONS,
		MAX_HALL_NIGHTS
	} from '$lib/config/registration';

	// Form state
	let name = $state('');
	let email = $state('');
	let institution = $state('');
	let category = $state('');
	let abstractTitle = $state('');
	let summerSchool = $state(false);
	let conferenceDinner = $state(false);
	let hallNights = $state(0);
	let catering = $state('no_preference');

	let submitting = $state(false);
	let error = $state('');

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		error = '';
		submitting = true;

		try {
			const response = await fetch(`${API_BASE_URL}/api/create-checkout`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					name,
					email,
					institution,
					category,
					abstract_title: abstractTitle,
					summer_school: summerSchool,
					conference_dinner: conferenceDinner,
					hall_nights: hallNights,
					catering
				})
			});

			if (!response.ok) {
				const data = await response.json().catch(() => null);
				throw new Error(data?.detail?.[0]?.msg ?? data?.detail ?? 'Registration failed. Please try again.');
			}

			const { checkout_url } = await response.json();
			window.location.href = checkout_url;
		} catch (err: any) {
			error = err.message || 'Something went wrong. Please try again.';
			submitting = false;
		}
	}
</script>

<form onsubmit={handleSubmit} class="space-y-8">
	<!-- Personal Information -->
	<div>
		<h3 class="text-2xl font-bold mb-4">Personal Information</h3>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<label class="form-control w-full">
				<div class="label"><span class="label-text">Full Name *</span></div>
				<input
					type="text"
					bind:value={name}
					required
					maxlength="200"
					class="input input-bordered w-full"
					placeholder="Your full name"
				/>
			</label>

			<label class="form-control w-full">
				<div class="label"><span class="label-text">Email *</span></div>
				<input
					type="email"
					bind:value={email}
					required
					class="input input-bordered w-full"
					placeholder="your@email.com"
				/>
			</label>

			<label class="form-control w-full">
				<div class="label"><span class="label-text">Institution / Affiliation *</span></div>
				<input
					type="text"
					bind:value={institution}
					required
					maxlength="300"
					class="input input-bordered w-full"
					placeholder="University or organization"
				/>
			</label>

			<label class="form-control w-full">
				<div class="label"><span class="label-text">Category *</span></div>
				<select bind:value={category} required class="select select-bordered w-full">
					<option value="" disabled>Select your category</option>
					{#each CATEGORIES as cat}
						<option value={cat.value}>{cat.label}</option>
					{/each}
				</select>
			</label>
		</div>
	</div>

	<!-- Conference Options -->
	<div>
		<h3 class="text-2xl font-bold mb-4">Conference Options</h3>
		<div class="space-y-4">
			<label class="form-control w-full">
				<div class="label"><span class="label-text">Abstract Title (if applicable)</span></div>
				<input
					type="text"
					bind:value={abstractTitle}
					maxlength="500"
					class="input input-bordered w-full"
					placeholder="Title of your submitted abstract"
				/>
			</label>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<label class="label cursor-pointer justify-start gap-3 p-4 bg-base-200 rounded-lg">
					<input type="checkbox" bind:checked={summerSchool} class="checkbox checkbox-primary" />
					<div>
						<span class="label-text font-medium">Summer School Attendance</span>
						<p class="text-xs text-base-content/60">+S$50 (covers coffee breaks and lunches)</p>
					</div>
				</label>

				<label class="label cursor-pointer justify-start gap-3 p-4 bg-base-200 rounded-lg">
					<input
						type="checkbox"
						bind:checked={conferenceDinner}
						class="checkbox checkbox-primary"
					/>
					<div>
						<span class="label-text font-medium">Conference Dinner</span>
						<p class="text-xs text-base-content/60">+S$50</p>
					</div>
				</label>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<label class="form-control w-full">
					<div class="label">
						<span class="label-text">Hall Accommodation (S$80/night)</span>
					</div>
					<input
						type="number"
						bind:value={hallNights}
						min="0"
						max={MAX_HALL_NIGHTS}
						class="input input-bordered w-full"
					/>
					<div class="label">
						<span class="label-text-alt">Maximum {MAX_HALL_NIGHTS} nights</span>
					</div>
				</label>

				<label class="form-control w-full">
					<div class="label"><span class="label-text">Catering Preference</span></div>
					<select bind:value={catering} class="select select-bordered w-full">
						{#each CATERING_OPTIONS as opt}
							<option value={opt.value}>{opt.label}</option>
						{/each}
					</select>
				</label>
			</div>
		</div>
	</div>

	<!-- Price Summary -->
	<PriceSummary {category} {summerSchool} {conferenceDinner} {hallNights} />

	<!-- Error message -->
	{#if error}
		<div class="alert alert-error">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="stroke-current shrink-0 h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
			<span>{error}</span>
		</div>
	{/if}

	<!-- Submit -->
	<button type="submit" class="btn btn-primary btn-lg w-full" disabled={submitting}>
		{#if submitting}
			<span class="loading loading-spinner"></span>
			Redirecting to payment...
		{:else}
			Proceed to Payment
		{/if}
	</button>
</form>
