<script lang="ts">
	let { isOnline } = $props()
</script>

<span class="status-indicator {isOnline ? 'online' : 'offline'}"></span>

<style>
	.status-indicator {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background-color: #ccc;
	}

	.status-indicator.online {
		background-color: #28a745;
	}

	.status-indicator.offline {
		background-color: #e24141;
	}
</style>
