<script lang="ts">
	import Popup from '@componets/Popup.svelte';

	let show_modal = $state(false);
	let text = $state('');
	let link = $derived('https://wilaz.github.io/top-o-the_word/game?word=' + btoa(text));

	function copy() {
		navigator.clipboard.writeText(link);
		show_modal = true;
		setTimeout(function () {
			show_modal = false;
		}, 2000);
	}
</script>

<svelte:head>
	<title>Create game</title>
	<meta name="description" content="Create a game" />
</svelte:head>

{#if show_modal}
	<Popup />
{/if}

<div class="toast toast-center toast-middle bg-base-200 h-5/6 w-5/6 gap-4 rounded-xl p-4">
	<h1 class="text-center text-4xl">Enter words</h1>
	<textarea class="textarea size-full" placeholder="gort verenge" bind:value={text}></textarea>
	<button type="submit" class="btn" onclick={copy}> Copy link </button>
	<a class="btn" href={link}> Open </a>
</div>
