import { dev } from '$app/environment';

// Basic configuration
export const config = {
    siteName: 'Carbonatik',
    siteUrl: dev ? 'http://localhost:5173' : 'https://www.carbonatik.com',
    logoUrl: 'https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/og-image.png',
};

// SEO Metadata
export const seo = {
    title: 'Carbonatik | Global Leaders in Sustainable Mining Operations',
    description: `Carbonatik specializes in high-quality graphite, gold mica, ruby granite, quartz, and gemstone mining. With advanced operations across multiple sites and a commitment to sustainability, we're shaping the future of the mining industry. Discover our diverse portfolio and expert leadership team.`,
    keywords: 'Carbonatik, sustainable mining, graphite, gold mica, ruby granite, quartz, sapphire, gemstones, Joseph Kamalesh Swaminathan, Brendan T Fitzpatrick',
};

// Open Graph and Twitter Metadata
export const socialMeta = {
    ogTitle: 'Carbonatik - Pioneering Sustainable Mining Worldwide',
    ogDescription: 'Explore Carbonatik\'s diverse mining operations: from high-grade graphite and rare ruby granite to precious sapphires. Led by industry experts, we\'re committed to quality and sustainability in global mining.',
    twitterTitle: 'Carbonatik: Sustainable Mining Excellence',
    twitterDescription: 'Discover Carbonatik\'s world-class mining operations in graphite, gold-mica, ruby granite, quartz, and gemstones. Quality meets sustainability.',
};

// JSON-LD Structured Data
export const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": config.siteName,
    "description": seo.description,
    "url": config.siteUrl,
    "logo": config.logoUrl,
    "sameAs": [
        "https://www.linkedin.com/company/carbonatik",
        "https://twitter.com/carbonatik"
    ],
    "employee": [
        {
            "@type": "Person",
            "name": "Joseph Kamalesh Swaminathan",
            "jobTitle": "Chairman and CEO"
        },
        {
            "@type": "Person",
            "name": "Brendan T Fitzpatrick",
            "jobTitle": "President"
        },
        {
            "@type": "Person",
            "name": "Anand Malaimegam",
            "jobTitle": "Chief Operating Officer - MENA and Asia Pacific"
        },
        {
            "@type": "Person",
            "name": "Segar Muthumurugesu",
            "jobTitle": "Vice President - Operations - Sri Lanka"
        },
        {
            "@type": "Person",
            "name": "Suvro Ghosh",
            "jobTitle": "Chief Scientific Officer"
        },
        {
            "@type": "Person",
            "name": "Jessica Jason",
            "jobTitle": "Vice President - Business Development and Public Relations"
        }
    ],
    "inLanguage": "en-US"
};

export const stringifiedJsonLd = JSON.stringify(jsonLd);

// Mining Operations
export const miningOperations = {
    graphite: {
        activeMines: 1,
        activeCapacity: "3000 metric tons per month",
        inDevelopment: 4,
        expectedCapacity: "10,000 tons per month by December 2025",
        totalReserves: "6 million tons",
    },
    goldMica: {
        sites: 1,
        status: "under construction",
        operationalDate: "October 2024",
        reserves: "10 million tons",
    },
    granite: {
        sites: 1,
        status: "under exploration and construction",
        operationalDate: "December 2024",
        reserves: "more than 10 million tons",
        type: "Ruby Granite (red with gold sparkles)",
    },
    quartz: {
        activeMines: 1,
        capacity: "1000 tons per month",
        quality: "High grade, high quality",
    },
    gemstones: {
        sapphire: {
            status: "fully operational",
            additionalStones: ["Garnet", "Tourmaline", "Peridot", "Citrine", "Amethyst"],
        },
        processingFacility: {
            status: "fully functional",
            capacity: "25 highly experienced gem cutters",
        },
    },
};

// Helper function to generate metadata
export function generateMetadata({ title, description }: { title?: string; description?: string }) {
    return {
        title: title ? `${seo.title} | ${title}` : seo.title,
        description: description || seo.description,
        openGraph: {
            title: title ? `${socialMeta.ogTitle} | ${title}` : socialMeta.ogTitle,
            description: description || socialMeta.ogDescription,
            type: 'website',
            url: config.siteUrl,
            image: config.logoUrl,
        },
        twitter: {
            card: 'summary_large_image',
            title: title ? `${socialMeta.twitterTitle} | ${title}` : socialMeta.twitterTitle,
            description: description || socialMeta.twitterDescription,
            image: config.logoUrl,
        },
    };
}