<script lang="ts">
	import type { Sponsor } from '$lib/data/sponsors';

	export let title: string;
	export let sponsors: Sponsor[];
	export let logoHeight: string = 'max-h-20'; // Default height
	export let gridCols: string = 'grid-cols-2 md:grid-cols-3'; // Default grid
	export let titleSize: string = 'text-lg'; // Default title size
	export let sectionBgClass: string = ''; // Optional background class
	export let showNames: boolean = true; // Option to show/hide sponsor names
</script>

{#if sponsors.length > 0}
	<section class="py-16 px-4 {sectionBgClass}">
		<div class="max-w-6xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-4xl font-bold mb-4">{title}</h2>
				<div class="divider max-w-xs mx-auto"></div>
			</div>

			{#if gridCols === 'flex'}
				<!-- Single centered layout for institutional/key sponsors -->
				<div class="flex justify-center gap-12">
					{#each sponsors as sponsor}
						<div class="flex flex-col items-center text-center">
							{#if sponsor.url}
								<a href={sponsor.url} target="_blank" rel="noopener noreferrer" class="block hover:opacity-80 transition-opacity">
									<img src={sponsor.logo} alt={sponsor.name} class="{logoHeight} w-auto" />
								</a>
							{:else}
								<img src={sponsor.logo} alt={sponsor.name} class="{logoHeight} w-auto" />
							{/if}
							{#if showNames}
								<h3 class="{titleSize} font-semibold mt-4">{sponsor.name}</h3>
							{/if}
						</div>
					{/each}
				</div>
			{:else}
				<!-- Grid layout for multiple sponsors -->
				<div class="grid {gridCols} gap-12">
					{#each sponsors as sponsor}
						<div class="flex flex-col items-center text-center">
							{#if sponsor.url}
								<a href={sponsor.url} target="_blank" rel="noopener noreferrer" class="block hover:opacity-80 transition-opacity">
									<img src={sponsor.logo} alt={sponsor.name} class="{logoHeight} w-auto" />
								</a>
							{:else}
								<img src={sponsor.logo} alt={sponsor.name} class="{logoHeight} w-auto" />
							{/if}
							{#if showNames}
								<h3 class="{titleSize} font-semibold mt-3">{sponsor.name}</h3>
							{/if}
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</section>
{/if}