<script>
	import { enhance } from '$app/forms';
	import { redirect } from '@sveltejs/kit';

	let title = '';
	let tag = '';
	export let data;

	console.log('data', data);
</script>

<form method="POST" on:submit|preventDefault use:enhance>
	<div class=" flex flex-col justify-center items-center gap-4">
		<label>
			<textarea
				bind:value={title}
				name="title"
				placeholder="Enter your title"
				class=" flex sm:w-64 md:w-96 rounded-full py-8 border-cyan-300 border-2 focus:outline-none px-3 placeholder:text-cyan-300"
			/>
		</label>
		<label>
			<input
				bind:value={tag}
				name="tag"
				placeholder="Enter  one tag"
				type="text"
				class=" flex sm:w-64 md:w-96 rounded-full py-2 border-cyan-300 border-2 focus:outline-none px-3 placeholder:text-cyan-300"
			/>
		</label>

		<button
			type="submit"
			class=" bg-inherit text-cyan-300 border-2 border-cyan-300 p-2 transition-transform ease-out duration-500"
		>
			Post</button
		>
	</div>
</form>
