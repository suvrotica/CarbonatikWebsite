import { seo, config, socialMeta, stringifiedJsonLd } from '$lib/global';

export function load() {
    return {
        seo,
        config,
        socialMeta,
        stringifiedJsonLd
    };
}