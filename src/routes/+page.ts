import type { Post } from '$lib/types';

export async function load(event) {
	const response = await event.fetch('api/posts');
	const posts: Post[] = await response.json();
	return { posts };
}
