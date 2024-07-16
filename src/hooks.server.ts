import type { Handle } from '@sveltejs/kit';
import { seo, config } from '$lib/global';

export const handle: Handle = async ({ event, resolve }) => {
    const response = await resolve(event);

    if (response.headers.get('content-type') === 'text/html') {
        const html = await response.text();
        const updatedHtml = html.replace(
            '%global_title%',
            seo.title
        ).replace(
            '%global_description%',
            seo.description
        );

        return new Response(updatedHtml, {
            status: response.status,
            headers: response.headers
        });
    }

    return response;
};