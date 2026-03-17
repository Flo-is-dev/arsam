<script>
    import SEO from "$lib/components/SEO.svelte";

    // Import assets from Snapel folder
    import imgEnsembleCanette from "$lib/assets/Snapel/ensemble-canette.png";
    import imgSnapel2 from "$lib/assets/Snapel/snapel2.png";
    import imgPinkCan from "$lib/assets/Snapel/Pink-Can.png";
    import imgPurpleCan from "$lib/assets/Snapel/Purple-Can.png";
    import imgCanLogo from "$lib/assets/Snapel/can-logo.png";
</script>

<SEO title="Snapel - Redéfinir l'énergie" description="Snapel: Une alternative saine et inspirante aux boissons énergisantes pour la génération créative." />

<section class="intro-section reveal">
    <div class="container container--wide grid-2">
        <div class="col-left">
            <h2 class="section-tag">Snapel</h2>
            <ul class="tag-list">
                <li>Identité visuelle</li>
                <li>Packaging</li>
                <li>Réseaux sociaux</li>
                <li>Webdesign</li>
            </ul>
        </div>
        <div class="col-right">
            <h1 class="main-title">Redéfinir l'énergie pour la génération créative.</h1>
            <p class="description">Le marché des boissons énergisantes est souvent saturé de codes agressifs et sombres. Pour Snapel, l'objectif était de créer une alternative saine et inspirante.</p>
            <p class="description">Une boisson conçue pour ceux qui créent, qui codent et qui s'investissent : gamers, créateurs de contenu et jeunes professionnels. Le défi était d'allier l'aspect technologique et connecté à la pureté des ingrédients naturels.</p>
        </div>
    </div>
</section>

<section class="hero-image">
    <div class="container container--wide" >
        <div class="image-wrapper reveal" style="aspect-ratio: 16 / 8;">
            <img src={imgEnsembleCanette} alt="Snapel Graphic Directions and Social Media" />
        </div>
    </div>
</section>

<section class="hero-image">
    <div class="container container--wide" >
        <p class="section-p small-p">
               Chaque saveur a été pensée comme une expérience unique. J'ai développé <br> quatre directions graphiques qui font le pont entre le digital et la nature, en <br>utilisant des dégradés fluides et une iconographie épurée.
            </p>
        <div class="image-wrapper reveal" >
            <img src={imgSnapel2}  alt="Snapel Graphic Directions and Social Media" />
        </div>
    </div>
</section>



<section class="identity-section">
    <div class="container--wide container">
        <p class="section-p small-p">
               L'identité de Snapel repose sur des visuels 'clean' qui rappellent les interfaces <br> tech modernes tout en évoquant la fraîcheur des fruits. Le logo est minimaliste,<br> pensé pour être aussi efficace sur une canette que sur une icône d'application <br>mobile ou un stream Twitch.
            </p>
        <div class="visual-grid can-grid">
            <div class="image-wrapper reveal">
                <img src={imgPinkCan} alt="Snapel Pink Can" />
            </div>
            <div class="image-wrapper reveal">
                <img src={imgCanLogo} alt="Snapel Can Logo" />
            </div>
            <div class="image-wrapper reveal">
                <img src={imgPurpleCan} alt="Snapel Purple Can" />
            </div>
        </div>
    </div>
</section>

 <!-- OFFERS SECTION -->
    <section id="offres" class="offers-section">
        <div class="container reveal">
            <h2 class="offers-title"><span class="serif-italic">Ce projet vous inspire ?</span></h2>
            
           
        <div class="final-cta s-y_bCXRrkrYfP"><a href="https://cal.com/arsaam-studio/30min?user=arsaam-studio" target="_blank" class="btn-premium dark-btn large-btn s-y_bCXRrkrYfP"><span class="btn-label-wrapper s-y_bCXRrkrYfP"><span class="btn-label s-y_bCXRrkrYfP">On parlons du vôtre?</span> <span class="btn-label btn-label-hover s-y_bCXRrkrYfP">On parle du vôtre?</span></span></a></div>
            
        </div>
    </section>

<style>
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    .container--wide {
        max-width: 1400px;
    }

    section {
        padding: 3rem 0;
    }

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

    .section-p {
        font-size: 1.2rem;
        margin-bottom: 4rem;
        line-height: 1.4;
    }

    /* Image Styles */
    .image-wrapper {
        width: 100%;
        border-radius: 2rem;
        overflow: hidden;
        background-color: #fff;
        box-shadow: 0 20px 40px rgba(0,0,0,0.05);
    }

    .image-wrapper img {
        width: 100%;
        height: auto;
        display: block;
    }

    /* Section Grids */
    .visual-grid {
        display: grid;
        gap: 2rem;
    }

    .can-grid {
        grid-template-columns: 30fr 43fr 30fr;
        align-items: center;
    }

    .can-grid .image-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .can-grid .image-wrapper img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }

    /* Responsive */
    @media (max-width: 992px) {
        .grid-2 {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
    }

    @media (max-width: 768px) {
        section {
            padding: 4rem 0;
        }

        .can-grid {
            grid-template-columns: 1fr;
        }

        .can-grid .image-wrapper {
            height: auto;
            aspect-ratio: 16/9;
        }

        .image-wrapper {
            border-radius: 1rem;
        }
    }
</style>
