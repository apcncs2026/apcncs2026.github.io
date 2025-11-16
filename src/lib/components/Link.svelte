<script lang="ts">
	export let href: string;
	export let text: string = '';
	export let class_: string = 'link link-primary';

	$: displayText = text || href;
</script>

<a {href} target="_blank" rel="noopener noreferrer" class={class_}>{displayText}</a>
