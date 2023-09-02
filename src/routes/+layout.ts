export const prerender = false;
export async function load({ url }: any) {
	return {
		url: url.pathname
	};
}
