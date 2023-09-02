import { prisma } from '$lib/server/prisma.js';

export async function load({ params }: any) {
	const post = await prisma.blog.findUnique({
		where: { id: params.slug }
	});
	return { post };
}
