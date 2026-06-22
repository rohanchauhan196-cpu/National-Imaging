import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    url?: string;
    ogTitle?: string;
    ogDescription?: string;
    disableTitleTemplate?: boolean;
}

const SEO = ({ 
    title, 
    description, 
    keywords, 
    image, 
    url, 
    ogTitle, 
    ogDescription, 
    disableTitleTemplate 
}: SEOProps) => {
    const siteTitle = 'National Imaging and Path Labs';
    const fullTitle = disableTitleTemplate ? title : `${title} | ${siteTitle}`;
    const finalOgTitle = ogTitle || fullTitle;
    const finalOgDescription = ogDescription || description;
    const defaultImage = '/logo.png'; // Ensure this path is correct or passed as prop
    const currentUrl = url || window.location.href;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={finalOgTitle} />
            <meta property="og:description" content={finalOgDescription} />
            {image && <meta property="og:image" content={image || defaultImage} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={currentUrl} />
            <meta name="twitter:title" content={finalOgTitle} />
            <meta name="twitter:description" content={finalOgDescription} />
            {image && <meta name="twitter:image" content={image || defaultImage} />}

            {/* Canonical */}
            <link rel="canonical" href={currentUrl} />
        </Helmet>
    );
};

export default SEO;
