import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    url?: string;
}

const SEO = ({ title, description, keywords, image, url }: SEOProps) => {
    const siteTitle = 'National Imaging and Path Labs';
    const fullTitle = `${title} | ${siteTitle}`;
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
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            {image && <meta property="og:image" content={image || defaultImage} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={currentUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            {image && <meta name="twitter:image" content={image || defaultImage} />}

            {/* Canonical */}
            <link rel="canonical" href={currentUrl} />
        </Helmet>
    );
};

export default SEO;
