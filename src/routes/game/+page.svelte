<script lang="ts">
	import { onMount } from 'svelte';

	let text: string;

	onMount(() => {
		const param = new URLSearchParams(window.location.search).get('word');
		text = atob(toStr(param));
	});

	let cutoff = 1;

	function toStr(val: string | null | undefined): string {
		if (typeof val === 'string') {
			return val;
		} else {
			return 'ZXJyb3IsIGxvbA==';
		}
	}
</script>

<svelte:head>
	<title>Guess</title>
	<meta name="description" content="Guess the word" />
</svelte:head>

<div class="relative flex h-full items-center">
	<div class="m-auto overflow-hidden">
		<h1 class="text-3xl transition-all" style:transform={'translateY(' + (65 - cutoff * 5) + '%)'}>
			{text}
		</h1>
	</div>

	<div class="absolute inset-x-0 bottom-0 flex flex-col">
		<button
			class="btn btn-soft btn-warning m-2 grow"
			onclick={function () {
				cutoff = Math.min(13, cutoff + 1);
			}}
		>
			Show more
		</button>
		<button
			class="btn btn-soft btn-error m-2 grow"
			onclick={function () {
				cutoff = 13;
			}}
		>
			Show all
		</button>
	</div>
</div>
