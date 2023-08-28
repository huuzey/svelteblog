<script>
	import { page } from '$app/stores';
	import { redirect } from '@sveltejs/kit';
	function home() {
		return redirect(308, '/');
	}
</script>

<div>Click on shakspeare to see posts</div>
