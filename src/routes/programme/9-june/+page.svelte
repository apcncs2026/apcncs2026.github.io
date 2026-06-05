<script lang="ts">
	import DayProgrammeView from '$lib/components/DayProgrammeView.svelte';
	import { getDay } from '$lib/data/programmeDetail';

	const day = getDay('9-june')!;
</script>

<DayProgrammeView {day} />
