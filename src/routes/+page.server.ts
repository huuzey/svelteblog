import type { Post } from '$lib/types';
import { prisma } from '$lib/server/prisma.js';
import { json } from '@sveltejs/kit';
export const prerender = true;
export interface formeal {
	id: string;
	title: string;
	tag: string;
	createdAt: Date;
	updatedAt: Date;
}
export async function load({}) {
	// const response = await fetch('api/posts');
	// const posts: Post[] = await response.json();
	const posts = await prisma.blog.findMany();

	//@ts-ignore
	return { posts };
}
