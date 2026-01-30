<script>
    /** @type {{ title?: string, description?: string, image?: string }} */
    let { title = "Portfolio", description = "Modern & Premium Portfolio built with SvelteKit", image = "" } = $props();
    
    const siteName = "Portfolio";
    const fullTitle = title === siteName ? title : `${title} | ${siteName}`;
</script>

<svelte:head>
    <title>{fullTitle}</title>
    <meta name="description" content={description} />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content={fullTitle} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:title" content={fullTitle} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={image} />
</svelte:head>
