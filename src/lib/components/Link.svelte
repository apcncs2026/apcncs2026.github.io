<script lang="ts">
	export let href: string;
	export let text: string = '';
	export let class_: string = 'link link-primary';
	export let download: string | boolean | undefined = undefined;
	export let target: string = '_blank';
	export let rel: string | undefined = target === '_blank' ? 'noopener noreferrer' : undefined;

	$: displayText = text || href;
</script>

{#if download === true}
<a {href} {target} {rel} download class={class_}>{displayText}</a>
{:else if download}
<a {href} {target} {rel} download={download} class={class_}>{displayText}</a>
{:else}
<a {href} {target} {rel} class={class_}>{displayText}</a>
{/if}
