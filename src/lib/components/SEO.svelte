<script>
    import { page } from '$app/stores';

    /** @type {{ title?: string, description?: string, image?: string, noindex?: boolean }} */
    let { title = "Arsaam Studio", description = "De la stratégie à la maquette de votre site web, je transforme votre marque en une identité visuelle authentique et mémorable.", image = "/og-image.png", noindex = false } = $props();

    const siteUrl = "https://arsaam-studio.com";
    const siteName = "Arsaam Studio";
    const fullTitle = title === siteName ? title : `${title} | ${siteName}`;
    const absoluteImage = image.startsWith('http') ? image : `${siteUrl}${image}`;
    let canonicalUrl = $derived(`${siteUrl}${$page.url.pathname}`);
</script>

<svelte:head>
    <title>{fullTitle}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonicalUrl} />

    {#if noindex}
        <meta name="robots" content="noindex, nofollow" />
    {/if}

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={siteName} />
    <meta property="og:url" content={canonicalUrl} />
    <meta property="og:title" content={fullTitle} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={absoluteImage} />
    <meta property="og:locale" content="fr_FR" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={fullTitle} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={absoluteImage} />
</svelte:head>
