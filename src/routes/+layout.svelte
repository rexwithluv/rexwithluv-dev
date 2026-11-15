<script lang="ts">
	import { asset } from '$app/paths';
	import '../i18n';
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/png" href={asset('/icon.png')} />
</svelte:head>

{@render children()}
