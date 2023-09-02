import { json, type ActionFailure, type Redirect, redirect, fail } from '@sveltejs/kit';
import type { RequestEvent } from '../$types';
import type { PageServerLoad, Actions } from './$types';
import { prisma } from '$lib/server/prisma';
// src/lib/prisma.ts

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const title = data.get('title');
		const tag = data.get('tag');
		if (!title || !tag) {
			return fail(400, { status: 400, title, tag });
		}

		await prisma.blog.create({
			data: {
				// @ts-ignore
				title,
				// @ts-ignore
				tag
			}
		});

		throw redirect(303, '/');
	}
};
