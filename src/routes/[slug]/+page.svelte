<script>
	export let data;
</script>

<div class="flex flex-col justify-center items-center gap-4">
	<p class=" text-4xl border-b-2 border-cyan-300 p-3">{data?.post?.title}</p>
	<p class=" text-4xl"><span class="text-cyan-300">#</span>{data?.post?.tag}</p>
</div>
