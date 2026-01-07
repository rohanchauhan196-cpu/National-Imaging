import { useEffect, useState } from 'react';
import { sanityClient, urlFor } from '../../sanityClient';

export interface SanitySEOData {
    title?: string;
    description?: string;
    keywords?: string[];
    image?: string;
}

export const useSanitySEO = (docType: 'page' | 'package' | 'service' | 'post', slug: string) => {
    const [seo, setSeo] = useState<SanitySEOData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSEO = async () => {
            try {
                // Support both standard Slug objects and String dropdowns
                const query = `*[_type == "${docType}" && (slug.current == "${slug}" || slug == "${slug}")][0].seo`;
                const data = await sanityClient.fetch(query);
                if (data) {
                    setSeo({
                        ...data,
                        image: data.image ? urlFor(data.image).url() : undefined
                    });
                }
            } catch (error) {
                console.error('Error fetching SEO:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchSEO();
    }, [docType, slug]);

    return { seo, loading };
};
