<script>
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';

    const STORAGE_KEY = 'arsaam-cookie-consent';

    let open = $state(false);
    let analytics = $state(false);
    let ads = $state(false);

    onMount(() => {
        let saved = null;
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) saved = JSON.parse(raw);
        } catch (e) {
            /* localStorage indisponible */
        }

        if (saved) {
            analytics = !!saved.analytics;
            ads = !!saved.ads;
        } else {
            // Première visite : le gestionnaire s'ouvre de lui-même.
            open = true;
        }
    });

    function apply() {
        try {
            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify({ analytics, ads, date: new Date().toISOString() })
            );
        } catch (e) {
            /* localStorage indisponible : le choix ne sera pas mémorisé */
        }

        // Défini par le snippet Consent Mode dans app.html.
        const gtag = /** @type {any} */ (window).gtag;

        if (typeof gtag === 'function') {
            const adsState = ads ? 'granted' : 'denied';
            gtag('consent', 'update', {
                ad_storage: adsState,
                ad_user_data: adsState,
                ad_personalization: adsState,
                analytics_storage: analytics ? 'granted' : 'denied'
            });
        }

        open = false;
    }

    function acceptAll() {
        analytics = true;
        ads = true;
        apply();
    }

    function rejectAll() {
        analytics = false;
        ads = false;
        apply();
    }

    /** @param {KeyboardEvent} event */
    function onKeydown(event) {
        if (event.key === 'Escape' && open) open = false;
    }
</script>

<svelte:window onkeydown={onKeydown} />

<div class="cookie-manager">
    {#if open}
        <div
            class="panel"
            role="dialog"
            aria-labelledby="cookie-title"
            transition:fly={{ y: 16, duration: 300 }}
        >
            <div class="panel-head">
                <h2 id="cookie-title">Gestion des cookies</h2>
                <button
                    class="close"
                    onclick={() => (open = false)}
                    aria-label="Fermer le gestionnaire de cookies"
                >
                    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                        <path
                            d="M6 6l12 12M18 6L6 18"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            fill="none"
                        />
                    </svg>
                </button>
            </div>

            <p class="intro">
                Ce site utilise des cookies pour mesurer son audience et améliorer ses campagnes.
                Vous choisissez ce que vous acceptez, et vous pouvez changer d'avis à tout moment
                via l'icône en bas à gauche.
            </p>

            <ul class="categories">
                <li>
                    <div class="cat-text">
                        <span class="cat-name">Strictement nécessaires</span>
                        <span class="cat-desc">
                            Indispensables au fonctionnement du site. Toujours actifs.
                        </span>
                    </div>
                    <span class="always-on">Actifs</span>
                </li>

                <li>
                    <label class="cat-text" for="toggle-analytics">
                        <span class="cat-name">Mesure d'audience</span>
                        <span class="cat-desc">
                            Comprendre comment le site est consulté, de façon agrégée.
                        </span>
                    </label>
                    <input
                        id="toggle-analytics"
                        class="switch"
                        type="checkbox"
                        role="switch"
                        bind:checked={analytics}
                    />
                </li>

                <li>
                    <label class="cat-text" for="toggle-ads">
                        <span class="cat-name">Publicité</span>
                        <span class="cat-desc">
                            Mesurer les conversions Google Ads et personnaliser les annonces.
                        </span>
                    </label>
                    <input
                        id="toggle-ads"
                        class="switch"
                        type="checkbox"
                        role="switch"
                        bind:checked={ads}
                    />
                </li>
            </ul>

            <div class="actions">
                <button class="btn btn-solid" onclick={acceptAll}>Tout accepter</button>
                <button class="btn btn-solid" onclick={rejectAll}>Tout refuser</button>
            </div>
            <button class="btn btn-ghost" onclick={apply}>Enregistrer mes choix</button>

            <a class="legal-link" href="/mentions-legales">Mentions légales</a>
        </div>
    {/if}

    <button
        class="fab"
        onclick={() => (open = !open)}
        aria-expanded={open}
        aria-label="Gestion des cookies"
        title="Gestion des cookies"
    >
        <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true">
            <path
                d="M16 3a13 13 0 1 0 13 13 6 6 0 0 1-7.4-8.2A6 6 0 0 1 16 3z"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linejoin="round"
            />
            <circle cx="12" cy="13" r="1.6" fill="currentColor" />
            <circle cx="19" cy="19" r="1.6" fill="currentColor" />
            <circle cx="12.5" cy="21" r="1.3" fill="currentColor" />
            <circle cx="21" cy="12" r="1.1" fill="currentColor" />
        </svg>
    </button>
</div>

<style>
    .cookie-manager {
        position: fixed;
        left: 1.5rem;
        bottom: 1.5rem;
        z-index: 9000;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.9rem;
        font-family: var(--font-sans);
    }

    /* --- Bouton flottant permanent --- */
    .fab {
        width: 52px;
        height: 52px;
        border-radius: 50%;
        border: none;
        background-color: var(--color-primary);
        color: var(--color-bg);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 6px 20px rgba(33, 31, 31, 0.22);
        transition:
            transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
            background-color 0.3s ease;
    }

    .fab:hover {
        background-color: var(--color-text);
        transform: translateY(-2px) rotate(-12deg);
    }

    .fab:focus-visible,
    .close:focus-visible,
    .btn:focus-visible,
    .switch:focus-visible {
        outline: 2px solid var(--color-primary);
        outline-offset: 3px;
    }

    /* --- Panneau --- */
    .panel {
        width: min(390px, calc(100vw - 3rem));
        max-height: min(78vh, 640px);
        overflow-y: auto;
        background: #ffffff;
        border-radius: 20px;
        padding: 1.6rem;
        box-shadow: 0 18px 50px rgba(33, 31, 31, 0.18);
        border: 1px solid #e4dcd0;
    }

    .panel-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        margin-bottom: 0.8rem;
    }

    .panel-head h2 {
        font-family: var(--font-serif);
        font-size: 1.35rem;
        line-height: 1.2;
        color: var(--color-primary);
    }

    .close {
        background: none;
        border: none;
        cursor: pointer;
        color: var(--color-text);
        opacity: 0.5;
        display: flex;
        padding: 0.2rem;
        border-radius: 50%;
        transition: opacity 0.3s ease;
    }

    .close:hover {
        opacity: 1;
    }

    .intro {
        font-size: 0.86rem;
        line-height: 1.5;
        color: var(--color-text);
        opacity: 0.75;
        margin-bottom: 1.2rem;
    }

    /* --- Catégories --- */
    .categories {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        margin-bottom: 1.3rem;
    }

    .categories li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding: 0.75rem 0;
        border-bottom: 1px solid #efe9e1;
    }

    .categories li:last-child {
        border-bottom: none;
    }

    .cat-text {
        display: flex;
        flex-direction: column;
        gap: 0.15rem;
    }

    label.cat-text {
        cursor: pointer;
    }

    .cat-name {
        font-size: 0.95rem;
        font-weight: 600;
        color: var(--color-text);
    }

    .cat-desc {
        font-size: 0.78rem;
        line-height: 1.4;
        color: var(--color-text);
        opacity: 0.6;
    }

    .always-on {
        flex-shrink: 0;
        font-size: 0.7rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--color-primary);
        opacity: 0.7;
    }

    /* --- Interrupteurs --- */
    .switch {
        appearance: none;
        flex-shrink: 0;
        position: relative;
        width: 44px;
        height: 25px;
        border-radius: 100px;
        background-color: #d8d0c6;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .switch::after {
        content: '';
        position: absolute;
        top: 3px;
        left: 3px;
        width: 19px;
        height: 19px;
        border-radius: 50%;
        background: #ffffff;
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .switch:checked {
        background-color: var(--color-primary);
    }

    .switch:checked::after {
        transform: translateX(19px);
    }

    /* --- Actions --- */
    .actions {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.6rem;
        margin-bottom: 0.6rem;
    }

    .btn {
        border-radius: 100px;
        padding: 0.65rem 1rem;
        font-family: var(--font-sans);
        font-size: 0.88rem;
        font-weight: 600;
        cursor: pointer;
        width: 100%;
        transition:
            background-color 0.3s ease,
            color 0.3s ease;
    }

    .btn-solid {
        border: none;
        background-color: var(--color-primary);
        color: #ffffff;
    }

    .btn-solid:hover {
        background-color: var(--color-text);
    }

    .btn-ghost {
        border: 1px solid #ddd4c8;
        background: transparent;
        color: var(--color-text);
    }

    .btn-ghost:hover {
        background-color: #f5f1eb;
    }

    .legal-link {
        display: block;
        margin-top: 1rem;
        font-size: 0.75rem;
        text-align: center;
        color: var(--color-text);
        opacity: 0.55;
        text-decoration: underline;
    }

    .legal-link:hover {
        opacity: 1;
    }

    @media (max-width: 600px) {
        .cookie-manager {
            left: 1rem;
            bottom: 1rem;
        }

        .panel {
            width: calc(100vw - 2rem);
            padding: 1.3rem;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .fab:hover {
            transform: none;
        }
    }
</style>
