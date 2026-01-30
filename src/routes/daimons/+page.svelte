<script>
    import { onMount } from 'svelte';
    import SEO from "$lib/components/SEO.svelte";
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    
    // Import assets from mimouna folder
    import imgBillboard from "$lib/assets/daimons/daimon-bg.png";
    import imgPapeterie from "$lib/assets/daimons/Group-355.svg";
    import imgMoodboard from "$lib/assets/daimons/Frame 40.svg";
    import imgVariant from "$lib/assets/daimons/Frame 41.svg";

    // Assets for horizontal scroll
    import imgHotelKit from "$lib/assets/daimons/Layer_1.svg";
    import imgHygieneKit from "$lib/assets/daimons/image 1.svg";
    import imgCards from "$lib/assets/daimons/Group-355.svg";
    import imgV from "$lib/assets/daimons/11472844.png";

    let horizontalSection;
    let horizontalContainer;

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(horizontalContainer, {
            x: () => -(horizontalContainer.scrollWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
                trigger: horizontalSection,
                pin: true,
                scrub: 1,
                end: () => "+=" + (horizontalContainer.scrollWidth - window.innerWidth),
                invalidateOnRefresh: true
            }
        });
    });
</script>

<SEO title="Daïmons - L'IA par LGi" description="Daïmons: Créer une identité visuelle professionnelle et ambitieuse pour humaniser l'Intelligence Artificielle." />

<div class="page-transition">
    <!-- Section 1: Intro -->
    <section class="intro-section reveal">
        <div class="container grid-2">
            <div class="col-left">
                <h2 class="section-tag">Mimouna</h2>
                <ul class="tag-list">
                    <li>Identité visuelle</li>
                    <li>Maquette site web</li>
                    <li>Pitch deck</li>
                </ul>
            </div>
            <div class="col-right">
                <h1 class="main-title">Humaniser l'Intelligence Artificielle.</h1>
                <p class="description">
                   Pour Daïmons, l'enjeu était de créer une identité visuelle professionnelle et ambitieuse qui soutienne leur triple promesse : Strategy, Deploy, Drive. <br> <br>
Comment rassurer les entreprises sur une technologie de rupture tout en affirmant une vision éthique, frugale et souveraine ?
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
                La stratégie visuelle repose sur l'idée de collaboration entre l'homme et la machine. Nous avons construit un univers qui ne vend pas seulement des algorithmes, mais une transformation durable. L'identité doit porter les valeurs de responsabilité sociale et environnementale chères à Daïmons.
            </p>
             
    </section>

     <!-- Horizontal Scroll Section -->
    <section class="horizontal-scroll-outer" bind:this={horizontalSection}>
        
        <div class="horizontal-scroll-inner" bind:this={horizontalContainer}>
            <div class="horizontal-item">
                <img src={imgCards} alt="Mimouna Hotel Kit" />
            </div>
            <div class="horizontal-item">
                <img src={imgHygieneKit} alt="Mimouna Hygiene Kit" />
            </div>
            <div class="horizontal-item">
                <img src={imgHotelKit} alt="Mimouna Cards" />
            </div>
        </div>
    </section>

    <!-- Section 4: Universe -->
    <section class="text-media-grid reveal delay-3">
        <div class="container">
            <p class="section-p small-p">
                La stratégie créative s'est appuyée sur l'architecture unique du lieu. Le logotype a<br> été retravaillé pour gagner en lisibilité tout en conservant une élégance <br>intemporelle.
            </p>

            <div class="media-row layout-v2">
                <div class="media-item"  style="height:unset">
                    <img src={imgMoodboard} alt="Ethic Moodboard" />
                </div>
                <div class="media-item"  style="height:unset;aspect-ratio: 160 / 150;">
                    <img style="width: 100%;border-radius: 20px;"  src={imgVariant} alt="Logo Variant" class="logo-fit" />
                </div>
                
                
            </div>
            <img style="width: 100%;border-radius: 20px;margin-top: 30px; aspect-ratio: 160 / 90;object-fit: cover;"  src={imgV} alt="Logo Variant" class="logo-fit" />
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
        aspect-ratio: 16/5;
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
        grid-template-columns: 6fr 4fr;
        margin-top: 2rem;
    }

    .layout-v2 .media-item {
        height: 500px;
    }

    .media-item {
        border-radius: 20px;
        overflow: hidden;
        aspect-ratio: 16/10;
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

    .horizontal-scroll-outer {
        overflow: hidden;
        width: 100%;
       
        /* margin: 4rem 0; */
    }

    .horizontal-scroll-inner {
        display: flex;
        width: max-content;
        height: min(80vh, 700px);
        will-change: transform;
        padding-inline: 4rem;
    }

    .horizontal-item {
        width: 35vw;
        max-width: 500px;
        height: 100%;
        flex-shrink: 0;
        padding: 4rem 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .horizontal-item img {
        width: 100%;
        object-fit: contain;
        border-radius: 70px;
        box-shadow: 0 20px 50px rgba(0,0,0,0.15);
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

        .horizontal-item {
            width: 90vw;
            padding: 2rem 1rem;
        }

        .horizontal-scroll-inner {
            height: auto;
            min-height: 300px;
        }

        .horizontal-item img {
            max-width: 300px; /* Even smaller for mobile */
            max-height: 300px;
        }
    }
</style>
