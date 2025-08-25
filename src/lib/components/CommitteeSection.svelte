<script lang="ts">
	import type { CommitteeChair, Person } from '$lib/data/organizers';
	import PersonCard from './PersonCard.svelte';

	export let title: string;
	export let members: (CommitteeChair | Person)[];
	export let sectionBgClass: string = '';
	export let cardBgClass: string = 'bg-base-200';
	export let columnsClass: string = 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
</script>

<!-- {#if members.length > 0} -->
	<section class="py-16 px-4 {sectionBgClass}">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-4xl font-bold text-center mb-12">{title}</h2>
			<div class="grid {columnsClass} gap-8">
				{#each members as member}
					<PersonCard person={member} {cardBgClass} />
				{/each}
			</div>
		</div>
	</section>
<!-- {/if} -->