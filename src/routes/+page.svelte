<script>
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Camgo homepage" />
</svelte:head>

<main class="flex items-center justify-center bg-cover text-center">
	<div class="hero bg-base-100 min-h-screen opacity-90">
		<div class="hero-content text-center">
			<div class="max-w-l">
				<h1 class="mb-16 text-5xl font-bold">Welcome to Top-o-the Word!</h1>
				<a class="btn btn-primary btn-lg" href="{base}/create">Create a game</a>
			</div>
		</div>
	</div>
</main>
