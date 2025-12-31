import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
    projectId: 'bpj392hw', // User provided project ID
    dataset: 'production', // Default dataset name
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
    return builder.image(source);
}
