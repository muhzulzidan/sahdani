// components/seo.tsx
import Head from 'next/head';
import sahdani from "@/public/images/sahdani.jpg"
interface SEOProps {
    title: string;
    description?: string;
    image?: string;
    url?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, image, url }) => {
    const siteName = "Sahdani"; // Change this to your actual site name
    const siteUrl = "https://sahdani.id"; // Change this to your actual site URL

    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>{title} | {siteName}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description || ''} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url || siteUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description || ''} />
            <meta property="og:image" content={image || '/images/sahdani.jpg'} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url || siteUrl} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description || ''} />
            <meta property="twitter:image" content={image || '/images/sahdani.jpg'} />

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};

export default SEO;
