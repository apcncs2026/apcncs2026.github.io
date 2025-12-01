<script lang="ts">
	export let href: string;
	export let text: string = '';
	export let class_: string = 'link link-primary';
	export let download: string | boolean | undefined = undefined;
	export let target: string = '_blank';
	export let rel: string | undefined = target === '_blank' ? 'noopener noreferrer' : undefined;

	$: displayText = text || href;
</script>

<a {href} {target} {rel} {download} class={class_}>{displayText}</a>
