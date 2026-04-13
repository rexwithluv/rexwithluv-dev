<script lang="ts">
	import '../i18n';
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/png" href="/icon.png" />
</svelte:head>

{@render children()}
