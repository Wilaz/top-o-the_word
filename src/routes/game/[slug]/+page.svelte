<script lang="ts">
    export let data;
    const text = atob(data.slug);
    let cutoff = 1;
</script>

<svelte:head>
	<title>Guess</title>
	<meta name="description" content="Guess the word" />
</svelte:head>

<div class="flex relative h-full items-center">

<div class="m-auto overflow-hidden">
    <h1 class="transition-all text-3xl" style:transform={"translateY(" + (65 - cutoff * 5) + "%)"}>{text}</h1>
</div>

<div class="flex flex-col absolute inset-x-0 bottom-0">
    <button class="btn btn-soft btn-warning grow m-2" onclick={(function(){cutoff = Math.min(13, cutoff+1)})}> Show more </button>
    <button class="btn btn-soft btn-error grow m-2" onclick={(function(){cutoff = 13})}> Show all </button>
</div>

</div>