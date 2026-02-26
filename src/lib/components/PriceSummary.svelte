<script lang="ts">
	import {
		BASE_FEES,
		ADDON_SUMMER_SCHOOL,
		ADDON_CONFERENCE_DINNER,
		ADDON_HALL_PER_NIGHT,
		getCurrentTier,
		formatPrice,
		CATEGORIES
	} from '$lib/config/registration';

	let {
		category,
		summerSchool,
		conferenceDinner,
		hallNights
	}: {
		category: string;
		summerSchool: boolean;
		conferenceDinner: boolean;
		hallNights: number;
	} = $props();

	let tier = $derived(getCurrentTier());

	let categoryLabel = $derived(
		CATEGORIES.find((c) => c.value === category)?.label ?? 'Select category'
	);

	let tierLabel = $derived(
		tier === 'early_bird' ? 'Early Bird' : tier === 'regular' ? 'Regular' : 'On-Site'
	);

	let baseFee = $derived(category ? (BASE_FEES[category]?.[tier] ?? 0) : 0);

	let summerSchoolFee = $derived(summerSchool ? ADDON_SUMMER_SCHOOL : 0);
	let dinnerFee = $derived(conferenceDinner ? ADDON_CONFERENCE_DINNER : 0);
	let hallFee = $derived(hallNights * ADDON_HALL_PER_NIGHT);

	let total = $derived(baseFee + summerSchoolFee + dinnerFee + hallFee);
</script>

<div class="card bg-base-200 shadow-sm">
	<div class="card-body">
		<h3 class="card-title text-lg">Estimated Price Summary</h3>
		<p class="text-xs text-base-content/60 mb-2">
			Current tier: <span class="font-semibold">{tierLabel}</span> — final price calculated at checkout
		</p>

		<div class="space-y-2 text-sm">
			{#if baseFee > 0}
				<div class="flex justify-between">
					<span>Registration ({categoryLabel}, {tierLabel})</span>
					<span class="font-mono">{formatPrice(baseFee)}</span>
				</div>
			{/if}

			{#if summerSchoolFee > 0}
				<div class="flex justify-between">
					<span>Summer School</span>
					<span class="font-mono">{formatPrice(summerSchoolFee)}</span>
				</div>
			{/if}

			{#if dinnerFee > 0}
				<div class="flex justify-between">
					<span>Conference Dinner</span>
					<span class="font-mono">{formatPrice(dinnerFee)}</span>
				</div>
			{/if}

			{#if hallFee > 0}
				<div class="flex justify-between">
					<span>Hall Accommodation ({hallNights} night{hallNights > 1 ? 's' : ''})</span>
					<span class="font-mono">{formatPrice(hallFee)}</span>
				</div>
			{/if}

			<div class="divider my-1"></div>

			<div class="flex justify-between text-base font-bold">
				<span>Total</span>
				<span class="font-mono">{total > 0 ? formatPrice(total) : '—'}</span>
			</div>
		</div>
	</div>
</div>
