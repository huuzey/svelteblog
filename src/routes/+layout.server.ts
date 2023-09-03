import type { Post } from '$lib/types';
import { prisma } from '$lib/server/prisma.js';
import { json } from '@sveltejs/kit';
export const prerender = false;
export async function load({ url }: any) {
	const posts = await prisma.blog.findMany();

	return {
		url: url.pathname,
		posts
	};
}
