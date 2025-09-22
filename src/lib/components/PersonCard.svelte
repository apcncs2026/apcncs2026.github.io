<script lang="ts">
	import type { CommitteeChair, Person } from '$lib/data/organizers';
	import ProfileCard from './ProfileCard.svelte';

	export let person: CommitteeChair | Person;
	export let cardBgClass: string = 'bg-base-200';
</script>

<ProfileCard {person} {cardBgClass} profileType="organizer" />