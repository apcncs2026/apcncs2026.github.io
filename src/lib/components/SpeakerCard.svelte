<script lang="ts">
	import type { Speaker } from '$lib/data/speakers';
	import ProfileCard from './ProfileCard.svelte';

	export let speaker: Speaker;
	export let cardBgClass: string = 'bg-base-200';
</script>

<ProfileCard person={speaker} {cardBgClass} profileType="speaker" />