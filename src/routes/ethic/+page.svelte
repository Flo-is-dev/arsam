<script>
    import SEO from "$lib/components/SEO.svelte";
    
    // Import assets from Ethic folder
    import imgBillboard from "$lib/assets/Ethic/Mockup Site web large.png";
    import imgPapeterie from "$lib/assets/Ethic/Mockup Papeterie.png";
    import imgLogos from "$lib/assets/Ethic/Principal/Logos et versions_-logo-fullColor-cmyk copie.png";
    import imgMoodboard from "$lib/assets/Ethic/ethic moodboard.png";
    import imgVariant from "$lib/assets/Ethic/Ethic acquisition logos.png";
</script>

<SEO title="Ethic - Agence d'acquisition" description="L'acquisition éthique aux codes de l'élégance brute." />

<div class="page-transition">
    <!-- Section 1: Intro -->
    <section class="intro-section reveal">
        <div class="container grid-2">
            <div class="col-left">
                <h2 class="section-tag">Ethic</h2>
                <ul class="tag-list">
                    <li>Identité visuelle</li>
                    <li>Charte graphique</li>
                    <li>Brand strategy</li>
                    <li>Réseaux sociaux</li>
                    <li>Print</li>
                </ul>
            </div>
            <div class="col-right">
                <h1 class="main-title">L'acquisition éthique aux codes de l'élégance brute.</h1>
                <p class="description">
                    Comment sortir des codes ultra-digitaux et froids des agences de marketing classiques ? 
                    L'enjeu était de créer une identité qui reflète des valeurs solides et une rigueur sans faille, 
                    tout en restant profondément humaine et différenciante.
                </p>
            </div>
        </div>
    </section>

    <!-- Section 2: Large Mockup -->
    <section class="media-section full-width reveal delay-1">
        <div class="container">
            <div class="mockup-frame billboard-frame">
                <img src={imgBillboard} alt="Ethic Billboard Mockup" class="large-image" />
            </div>
        </div>
    </section>

    <!-- Section 3: Brand Strategy -->
    <section class="text-media-grid reveal delay-2">
        <div class="container">
            <p class="section-p">
                Pour Ethic, nous avons pris le temps de définir la mission, la personnalité et la cible avant de tracer la moindre ligne. 
                Ce travail de Brand Strategy a permis de créer une identité qui a du sens et qui tient debout.
            </p>
            <div class="media-row">
                <div class="media-item">
                    <img src={imgPapeterie} alt="Mockup Papeterie" />
                </div>
                <div class="media-item">
                    <img src={imgLogos} alt="Ethic Logos" class="logo-fit" />
                </div>
            </div>
        </div>
    </section>

    <!-- Section 4: Universe -->
    <section class="text-media-grid reveal delay-3">
        <div class="container">
            <p class="section-p small-p">
                L'Angleterre des années 1900 comme boussole.<br><br>
                Nous avons choisi un univers de prestige et d'élégance brute. Une palette sobre, 
                un bordeaux profond pour le caractère et des typographies sur mesure.<br>
                Le résultat ? Une vibe à la fois historique et radicalement moderne.
            </p>

            <div class="media-row layout-v2">
                <div class="media-item"  style="height:unset">
                    <img src={imgMoodboard} alt="Ethic Moodboard" />
                </div>
                
                    <img style="width: 100%;border-radius: 20px;"  src={imgVariant} alt="Logo Variant" class="logo-fit" />
                
            </div>
        </div>
    </section>

    <!-- OFFERS SECTION -->
    <section id="offres" class="offers-section">
        <div class="container reveal">
            <h2 class="offers-title"><span class="serif-italic">Ce projet vous inspire ?</span></h2>
            
           
        <div class="final-cta s-y_bCXRrkrYfP"><a href="a-propos" target="_blank" class="btn-premium dark-btn large-btn s-y_bCXRrkrYfP"><span class="btn-label-wrapper s-y_bCXRrkrYfP"><span class="btn-label s-y_bCXRrkrYfP">On parle du vôtre ?</span> <span class="btn-label btn-label-hover s-y_bCXRrkrYfP">On parle du vôtre ?</span></span></a></div>
            
        </div>
    </section>
</div>

<style>
    .grid-2 {
        display: grid;
        grid-template-columns: 1fr 2.5fr;
        gap: 4rem;
        align-items: start;
    }

    .section-tag {
        font-size: 1.2rem;
        margin-bottom: 1.5rem;
        color: var(--color-text);
        font-family: var(--font-sans);
        font-weight: 600;
    }

    .tag-list {
        list-style: none;
        padding-left: 1rem;
    }

    .tag-list li {
        font-size: 0.95rem;
        margin-bottom: 0.5rem;
        position: relative;
        opacity: 0.8;
    }

    .tag-list li::before {
        content: "•";
        position: absolute;
        left: -1rem;
        color: var(--color-primary);
    }

    .main-title {
        font-size: clamp(1.8rem, 4vw, 3rem);
        line-height: 1.2;
        margin-bottom: 2rem;
        color: var(--color-text);
    }

    .description {
        font-size: 1.1rem;
        line-height: 1.6;
        opacity: 0.7;
        max-width: 800px;
    }

    .mockup-frame {
        border-radius: 20px;
        overflow: hidden;
        background-color: var(--color-primary);
        opacity: 0.95;
    }

    .billboard-frame {
        aspect-ratio: 16/9;
    }

    .large-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.5s ease;
    }

    .large-image:hover {
        transform: scale(1.02);
    }

    .section-p {
        font-size: 1.2rem;
        max-width: 600px;
        margin-bottom: 4rem;
        line-height: 1.4;
    }

    .small-p {
        font-size: 1.1rem;
    }

    .media-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }

    .media-row.moodboard-row {
        grid-template-columns: 4fr 6fr;
    }

    .media-row.layout-v2 {
        grid-template-columns: 4fr 6fr;
        margin-top: 2rem;
    }

    .layout-v2 .media-item {
        aspect-ratio: auto;
        height: 500px;
    }

    .media-item {
        border-radius: 20px;
        overflow: hidden;
        aspect-ratio: 16/9;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f0f0f0;
    }

    .media-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .media-item img.logo-fit {
        width: 80%;
        height: auto;
        object-fit: contain;
    }

    .rounded-img {
        border-radius: 40px;
    }

    .dark-bg {
        background-color: #1a1a1a;
    }

    .cta-section {
        padding: 6rem 0;
    }

    .cta-box {
        background-color: #f7f7f7;
        border-radius: 30px;
        padding: 5rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        position: relative;
        overflow: hidden;
    }

    /* Sand texture emulation */
    .cta-box::before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        opacity: 0.05;
        pointer-events: none;
    }

    .cta-title {
        font-size: clamp(2rem, 5vw, 4rem);
        color: var(--color-text);
        font-family: var(--font-serif);
    }

    .dark-btn {
        background-color: #211F1F;
        color: white;
    }

    @media (max-width: 992px) {
        .grid-2 {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
    }

    @media (max-width: 768px) {
        .media-row, .media-row.moodboard-row, .media-row.layout-v2 {
            grid-template-columns: 1fr;
        }
        .layout-v2 .media-item {
            height: auto;
            aspect-ratio: 16/9;
        }
        .cta-box {
            padding: 3rem 1.5rem;
        }
    }
</style>
