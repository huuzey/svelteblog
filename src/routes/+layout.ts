export const prerender = true;

export async function load({ url }: any) {
	return {
		url: url.pathname
	};
}
