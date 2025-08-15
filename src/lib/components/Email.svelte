<script lang="ts">
	export let email: string;
	export let subject: string = '';
	export let class_: string = 'link link-hover';
	
	$: href = subject ? `mailto:${email}?subject=${encodeURIComponent(subject)}` : `mailto:${email}`;
</script>

<a {href} class={class_}>{email}</a>