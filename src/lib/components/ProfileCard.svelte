<script lang="ts">
	export let person: {
		id: string;
		name: string;
		affiliation: string;
		avatar?: boolean;
		role?: string;
		isPresident?: boolean;
		specialNote?: string;
		bio?: string;
	};
	export let cardBgClass: string = 'bg-base-200';
	export let profileType: 'organizer' | 'speaker' = 'organizer';

	function getInitials(name: string): string {
		return name.split(' ').map(n => n[0]).join('');
	}

	$: avatarUrl = person.avatar ? `/images/profile/${profileType}/${person.id}.webp` : null;
</script>

<div class="card {cardBgClass} shadow-xl h-full">
	<figure class="px-10 pt-10">
		<div class="avatar">
			{#if avatarUrl}
				<div class="w-32 h-32 rounded-full">
					<img src={avatarUrl} alt={person.name} class="rounded-full w-full h-full object-cover" />
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
		<h3 class="card-title text-primary">{person.name}</h3>
		{#if person.role}
			<p class="text-sm font-semibold">{person.role}</p>
		{/if}
		{#if person.isPresident}
			<p class="text-sm font-semibold">President</p>
		{/if}
		{#if person.specialNote}
			<p class="text-sm font-semibold">{person.specialNote}</p>
		{/if}
		<p class="text-sm text-gray-600">{person.affiliation}</p>
		{#if person.bio}
			<p class="text-sm mt-4">{person.bio}</p>
		{/if}
	</div>
</div>