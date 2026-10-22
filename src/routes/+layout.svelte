<script>
    import "../app.css";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import CookieManager from "$lib/components/CookieManager.svelte";

    let { children } = $props();

    const schemaOrg = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Arsaam Studio",
        "url": "https://arsaam-studio.com",
        "logo": "https://arsaam-studio.com/og-image.png",
        "image": "https://arsaam-studio.com/og-image.png",
        "description": "De la stratégie à la maquette de votre site web, je transforme votre marque en une identité visuelle authentique et mémorable.",
        "email": "arsaam.studio@gmail.com",
        "founder": {
            "@type": "Person",
            "name": "Anwar BENKERTA"
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Lot almajd 2",
            "addressLocality": "Tinghir",
            "postalCode": "45800",
            "addressCountry": "MA"
        },
        "sameAs": [],
        "priceRange": "€€",
        "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 31.5,
                "longitude": -5.5
            }
        },
        "serviceType": ["Branding", "Identité visuelle", "Webdesign", "Stratégie de marque"]
    };
</script>

<svelte:head>
    {@html `<script type="application/ld+json">${JSON.stringify(schemaOrg)}</script>`}
</svelte:head>

<Header />

<main>
    {@render children()}
</main>

<Footer />

<CookieManager />

<style>
    main {
        min-height: 80vh;
    }
</style>
