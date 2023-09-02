<script lang="ts">
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';

	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<div class="  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
		{#if data.posts.length === 0}
			<p class="flex justify-center items-center text-cyan-300">No posts available</p>
		{:else}
			{#each data.posts as post}
				<div class="post shadow-sm mb-2 shadow-cyan-200 hover:shadow-cyan-400">
					<a href={post.id} class=""
						><p class="ml-3 truncate font-bold text-2xl">
							{post.title}
						</p></a
					>
					<p class="truncate">#{post.tag.slice().charAt(0).toUpperCase()}{post.tag.slice(1)}</p>
				</div>
			{/each}
		{/if}
	</div>
</section>

<style>
</style>
