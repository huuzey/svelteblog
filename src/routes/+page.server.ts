import type { Post } from '$lib/types';
import { prisma } from '$lib/server/prisma.js';
export const prerender = true;
export async function load({}) {
	// const response = await fetch('api/posts');
	// const posts: Post[] = await response.json();
	const posts = await prisma.blog.findMany({});
	return { posts };
}
