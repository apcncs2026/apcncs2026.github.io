<script lang="ts">
	import type { CommitteeChair, Person } from '$lib/data/organizers';

	export let person: CommitteeChair | Person;
	export let cardBgClass: string = 'bg-base-200';

	function isCommitteeChair(p: CommitteeChair | Person): p is CommitteeChair {
		return 'role' in p;
	}

	function getInitials(name: string): string {
		return name.split(' ').map(n => n[0]).join('');
	}
</script>

<div class="card {cardBgClass} shadow-xl">
	<figure class="px-10 pt-10">
		<div class="avatar">
			{#if person.avatar}
				<div class="w-32 h-32 rounded-full">
					<img src={person.avatar} alt={person.name} class="rounded-full w-full h-full object-cover" />
				</div>
			{:else}
				<div class="placeholder">
					<div class="bg-neutral text-neutral-content rounded-full w-32 h-32 flex items-center justify-center">
						<span class="text-3xl">{getInitials(person.name)}</span>
					</div>
				</div>
			{/if}
		</div>
	</figure>
	<div class="card-body items-center text-center">
		<h3 class="card-title text-primary">{person.title ? person.title + ' ' : ''}{person.name}</h3>
		{#if isCommitteeChair(person) && person.role}
			<p class="text-sm font-semibold text-accent">{person.role}</p>
		{/if}
		{#if person.isPresident}
			<p class="text-sm font-semibold text-accent">President</p>
		{/if}
		<p class="text-sm text-gray-600">{person.affiliation}</p>
	</div>
</div>