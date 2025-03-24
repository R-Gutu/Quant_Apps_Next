const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Quant-Apps",
    "url": "https://www.quant-apps.com",
    "logo": "https://www.quant-apps.com/logo.svg",
    "description": "Quant-Apps specializes in iOS and Android app development, web development, backend solutions, business CRM, and UI/UX design.",
    "sameAs": [
        "https://www.facebook.com/profile.php?id=61571073299478",
        "https://www.instagram.com/quantapps_/",
        "https://www.linkedin.com/company/quant-apps",
        "https://www.tiktok.com/@quantapps",
        "https://t.me/quantapps",
        "https://wa.me/37369882331"
    ],
    "hasOfferCatalog": [
        {
            "@type": "OfferCatalog",
            "name": "Quant-Apps Services",
            "url": "https://www.quant-apps.com/en/services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "iOS App Development",
                        "serviceType": "Mobile Development",
                        "description": "We build cutting-edge iOS applications with seamless user experiences and high performance."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Android App Development",
                        "serviceType": "Mobile Development",
                        "description": "Our Android app development services focus on intuitive design, scalability, and functionality."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Web Development",
                        "serviceType": "Software Development",
                        "description": "We create robust, scalable web applications that deliver high-quality digital experiences."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Servers & Backend Solutions",
                        "serviceType": "Infrastructure",
                        "description": "We design and optimize backend architectures to support scalable and high-performance applications."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Business CRM Solutions",
                        "serviceType": "Business Software",
                        "description": "Custom CRM solutions tailored to streamline business operations and enhance customer relationships."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "UI/UX Design",
                        "serviceType": "Design",
                        "description": "User-centric UI/UX design services to create engaging and intuitive digital experiences."
                    }
                }
            ]
        },
        {
            "@type": "OfferCatalog",
            "name": "Portfolio",
            "url": "https://www.quant-apps.com/en/projects"
        }
    ],
    "knowsAbout": [
        "Mobile App Development",
        "Web Development",
        "Backend Solutions",
        "CRM Systems",
        "UI/UX Design"
    ],
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.quant-apps.com/en",
        "lastReviewed": "2025-01-25T00:00:00.000Z"
    },
    "subOrganization": {
        "@type": "OrganizationRole",
        "name": "Careers",
        "url": "https://www.quant-apps.com/en/careers"
    },
    "additionalProperty": [
        {
            "@type": "PropertyValue",
            "name": "Working Process",
            "value": "Development methodology",
            "url": "https://www.quant-apps.com/en/process"
        },
        {
            "@type": "PropertyValue",
            "name": "Terms of Use",
            "url": "https://www.quant-apps.com/en/terms-of-use"
        },
        {
            "@type": "PropertyValue",
            "name": "Privacy Policy",
            "url": "https://www.quant-apps.com/en/privacy-policy"
        }
    ],
    "potentialAction": [
        {
            "@type": "CommunicateAction",
            "name": "Talk to Us",
            "target": "https://www.quant-apps.com/en/talk-modal"
        },
        {
            "@type": "WatchAction",
            "name": "Watch Video",
            "target": "https://www.quant-apps.com/en/video-modal"
        }
    ],
    "foundingDate": "2023",
    "knowsLanguage": ["en"],
    "areaServed": {
        "@type": "GeoCircle",
        "name": "Global Services"
    }
}

export default function SchemaOrg() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}