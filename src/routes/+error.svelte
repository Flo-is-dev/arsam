<script>
    import { page } from '$app/stores';
    import SEO from "$lib/components/SEO.svelte";
</script>

<SEO title="Page introuvable" description="La page que vous recherchez n'existe pas ou a été déplacée." noindex={true} />

<section class="error-page">
    <div class="container error-content">
        <span class="error-code">404</span>
        <h1>Cette page n'existe pas</h1>
        <p>La page que vous recherchez a peut-être été déplacée ou n'existe plus.</p>
        <a href="/" class="btn-premium dark-btn">
            <span class="btn-label-wrapper">
                <span class="btn-label">Retour à l'accueil</span>
                <span class="btn-label btn-label-hover">Retour à l'accueil</span>
            </span>
        </a>
    </div>
</section>

<style>
    .error-page {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 70vh;
        padding: 4rem 0;
    }

    .error-content {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
    }

    .error-code {
        font-family: var(--font-sans);
        font-size: clamp(6rem, 15vw, 12rem);
        font-weight: 800;
        line-height: 1;
        color: var(--color-bg);
        letter-spacing: -0.02em;
    }

    h1 {
        font-family: var(--font-serif);
        font-size: clamp(1.5rem, 3vw, 2.5rem);
        font-weight: 500;
        color: var(--color-text);
    }

    p {
        font-size: 1.15rem;
        line-height: 1.6;
        opacity: 0.7;
        max-width: 400px;
        font-family: var(--font-serif);
    }

    .dark-btn {
        margin-top: 1rem;
        background-color: var(--color-text);
        color: var(--color-bg);
    }
</style>
