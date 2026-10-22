<script>
    import { onMount } from 'svelte';
    import { fly, slide } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import SEO from "$lib/components/SEO.svelte";


    // Assets for Projects
    import imgEthic from "$lib/assets/home/project1.webp";
    import imgSnapel from "$lib/assets/home/project2.webp";
    import imgMimouna from "$lib/assets/home/project3.webp";
    import imgDaimons from "$lib/assets/home/project4.webp";

    // Asset for Vision
    import imgVision from "$lib/assets/Anwar Rabat.jpg";
    
    const messages = [
        "un héritage culturel.",
        "un savoir faire durable.",
        "une innovation tech.",
        "un impact positif.",
        "le futur de l’artisanat."
    ];
    
    let currentIndex = 0;
    
    onMount(() => {
        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % messages.length;
        }, 3000);
        
        return () => clearInterval(interval);
    });

    const projects = [
        {
            title: "Ethic",
            desc: "L’agence d’acquisition qui aide les marques à grandir sans jamais mettre de côté leurs valeurs.",
            img: imgEthic,
            link: "/ethic"
        },
        {
            title: "Snapel",
            desc: "La boisson énergisante nouvelle génération, pensée pour celles et ceux qui carburent à la créativité.",
            img: imgSnapel,
            link: "/snapel"
        },
        {
            title: "Riad hotel Mimouna",
            desc: "Un hôtel emblématique face à l’océan, bâti sur un ancien moulin au cœur des remparts d’Essaouira au Maroc.",
            img: imgMimouna,
            link: "/mimouna"
        },
        {
            title: "Daïmons",
            desc: "Une agence qui accompagne les entreprises dans l’intégration de l’IA pour booster la performance.",
            img: imgDaimons,
            link: "/daimons"
        }
    ];

    const methodology = [
        {
            num: "1",
            step: "Appel découverte",
            desc: "On prend un moment pour discuter de votre projet, comprendre vos besoins, votre univers et voir si on est faits pour collaborer. C'est une rencontre sans engagement pour poser les bases."
        },
        {
            num: "2",
            step: "Direction créative",
            desc: "Je traduis nos échanges en concepts visuels. Je vous présente des pistes créatives (moodboards, intentions colorimétriques, typographies) pour valider l'orientation avant de lancer la création pure."
        },
        {
            num: "3",
            step: "Design et itérations",
            desc: "C'est l'étape de la réalisation. Je développe votre logotype, votre univers graphique et, selon votre pack, vos maquettes Figma. Nous affinons ensemble les détails grâce à nos sessions de révisions pour que le résultat soit parfaitement aligné avec votre vision."
        },
        {
            num: "4",
            step: "Livraison",
            desc: "Je vous remets tous vos fichiers sources et supports prêts à l'emploi. Vous recevez votre charte graphique (mini ou complète) qui devient votre mode d'emploi pour utiliser votre nouvelle identité de manière autonome et cohérente sur tous vos supports."
        },
        {
            num: "5",
            step: "Suivi",
            desc: "Notre collaboration ne s'arrête pas directement à l'envoi des fichiers. Je reste disponible pour vous accompagner dans le déploiement de votre marque ou pour faire évoluer vos supports web au fur et à mesure que votre business grandit."
        }
    ];

    const faqs = [
        {
            q: "Pouvez-vous travailler pour n'importe quel secteur ?",
            a: "Mon approche est universelle, mais ma sensibilité s'exprime mieux auprès des projets qui ont du sens. Qu'il s'agisse de valoriser un terroir (artisanat, culture) ou de simplifier une complexité technique (IA, développement durable), je m'adresse à ceux qui cherchent la pérennité plutôt que l'éphémère."
        },
        {
            q: "Quelle est la différence entre un logo et une identité visuelle ?",
            a: "Un logo est un signe de reconnaissance. Une identité visuelle est un écosystème. Elle inclut le logo, mais aussi les couleurs, les typographies, les textures et les règles de mise en page. C'est cet ensemble qui crée une expérience mémorable pour vos clients et qui justifie un positionnement premium."
        },
        {
            q: "Je n'ai qu'une idée vague de mon projet, est-ce trop tôt pour vous contacter ?",
            a: "Pas du tout, c'est même le moment idéal. L'Appel Stratégique inclus dans tous mes packs est conçu précisément pour mettre des mots sur votre vision et structurer votre projet. Mon rôle est de transformer votre intuition en une stratégie de marque claire et exploitable."
        },
        {
            q: "Comment se passe le règlement pour un projet avec vous ?",
            a: "Pour valider le démarrage du projet, un acompte de 30% est demandé à la signature du devis. Le solde est réglé à la livraison finale des fichiers. Des facilités de paiement en plusieurs fois peuvent être discutées."
        }
    ];

    let openFaq = null;
    function toggleFaq(index) {
        if (openFaq === index) {
            openFaq = null;
        } else {
            openFaq = index;
        }
    }

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };
</script>

<SEO title="Arsaam Studio" description="Arsaam Studio, agence créative spécialisée en branding, identité visuelle et webdesign. Design d'exception et stratégie de marque pour les entreprises ambitieuses." />

<svelte:head>
    {@html `<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`}
</svelte:head>



<div class="page-transition">
    <!-- HERO SECTION -->
    <section class="hero-container">
        <div class="hero-card">
            <div class="hero-labels">
                <span>Branding</span>
                <span class="dot">•</span>
                <span>Identité visuelle</span>
                <span class="dot">•</span>
                <span>Webdesign</span>
            </div>
            
            <div class="hero-main">
                <div class="hero-title-area">
                    <h1 class="hero-title">
                        Pour les marques qui<br>
                        bâtissent 
                        <span class="message-wrapper">
                            {#each messages as msg, i}
                                {#if currentIndex === i}
                                    <span 
                                        class="cycling-text"
                                        in:fly={{ y: 40, duration: 800, easing: quintOut }}
                                        out:fly={{ y: -40, duration: 800, easing: quintOut }}
                                    >
                                        {msg}
                                    </span>
                                {/if}
                            {/each}
                        </span>
                    </h1>
                </div>
            </div>
            
            <div class="hero-info-area">
                <p class="hero-desc">
                    De la stratégie à la maquette de votre site web, je transforme votre marque en une identité visuelle authentique et mémorable.
                </p>
                <div class="hero-cta">
                    <a href="#projets" class="btn-premium light-btn">
                        <span class="btn-label-wrapper">
                            <span class="btn-label">Voir les projets</span>
                            <span class="btn-label btn-label-hover">Voir les projets</span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- PROJECTS SECTION -->
    <section id="projets" class="projects-section reveal">
        <div class="container">
            <h2 class="section-title-large">Chaque projet est unique.<br><span class="serif-italic">Chaque identité aussi.</span></h2>
            
            <div class="projects-grid">
                {#each projects as project}
                    <a href={project.link} class="project-item">
                        <div class="project-img-wrapper">
                            <img src={project.img} alt={project.title} />
                        </div>
                        <div class="project-details">
                            <h3 class="project-title">{project.title}</h3>
                            <p class="project-desc">{project.desc}</p>
                        </div>
                    </a>
                {/each}
            </div>
        </div>
    </section>

    <!-- VISION SECTION -->
    <section class="vision-section reveal">
        <div class="container grid-vision">
            <div class="vision-img-wrapper">
                <img src={imgVision} alt="Rabat Architecture" class="vision-img" />
            </div>
            <div class="vision-content">
                <h3 class="vision-subtitle">J’accompagne les structures qui ont une vraie histoire à raconter.</h3>
                <p>Vous êtes une marque artisanale, propriétaire d’un lieu atypique ou historique, une entreprise familiale, ou bien une marque qui connecte plusieurs cultures et célèbrent son double héritage ? </p>
                <p>Ces histoires méritent une identité visuelle authentique. Pas un logo générique. Mais une identité profondément ancrée, qui porte du sens, qui crée de la connexion avec votre vision.</p><div class="final-cta">
                <a href="a-propos" class="btn-premium dark-btn large-btn">
                    <span class="btn-label-wrapper">
                        <span class="btn-label">Découvrir Arsaam Studio</span>
                        <span class="btn-label btn-label-hover">Découvrir Arsaam Studio</span>
                    </span>
                </a>
            </div>
            </div>
            
        </div>
        
    </section>

    <!-- OFFERS SECTION -->
    <section id="offres" class="offers-section">
        <div class="container reveal">
            <h2 class="offers-title">Un accompagnement personnalisé<br><span class="serif-italic">qui s’adapte à votre projet</span></h2>
            
            <div class="offers-grid">
                <!-- L'ESSENTIEL -->
                <div class="offer-card">
                    <h3 class="offer-name">L’ESSENTIEL</h3>
                    <ul class="offer-list">
                        <li>Appel Stratégique</li>
                        <li>Suite de logos</li>
                        <li>Palette de couleurs</li>
                        <li>Polices sélectionnées</li>
                        <li>Mini charte graphique</li>
                        <li>Photos de profil et bannières réseaux sociaux</li>
                    </ul>
                    <div class="offer-price-wrapper">
                        <a href="https://wa.me/33768702214?text=Hello%20Anwar%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20l'offre%20%22L'ESSENTIEL%22%2C%20peut-on%20discuter%20de%20mon%20projet%20%3F" target="_blank" rel="noopener noreferrer" class="btn-premium dark-btn">
                            <span class="btn-label-wrapper">
                                <span class="btn-label">À partir de 850 €</span>
                                <span class="btn-label btn-label-hover">À partir de 850 €</span>
                            </span>
                        </a>
                    </div>
                </div>

                <!-- L’ÉTENDU -->
                <div class="offer-card featured">
                    <h3 class="offer-name">L’ÉTENDU</h3>
                    <ul class="offer-list">
                        <li>Pack “L’ESSENTIEL” inclus</li>
                        <li>Éléments graphiques (formes, motifs personnalisés).</li>
                        <li>Charte graphique complète (règles d’usage, ton, etc.)</li>
                        <li>Papeterie au choix (Carte de visite, papier en-tête ou signature mail)</li>
                        <li>Templates réseaux sociaux personnalisables</li>
                    </ul>
                    <div class="offer-price-wrapper">
                        <a href="https://wa.me/33768702214?text=Hello%20Anwar%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20l'offre%20%22L'ÉTENDU%22%2C%20peut-on%20discuter%20de%20mon%20projet%20%3F" target="_blank" rel="noopener noreferrer" class="btn-premium dark-btn">
                            <span class="btn-label-wrapper">
                                <span class="btn-label">À partir de 1 250 €</span>
                                <span class="btn-label btn-label-hover">À partir de 1 250 €</span>
                            </span>
                        </a>
                    </div>
                </div>

                <!-- L’INTÉGRAL -->
                <div class="offer-card">
                    <h3 class="offer-name">L’INTÉGRAL</h3>
                    <ul class="offer-list">
                        <li>Pack “L’ÉTENDU” inclus</li>
                        <li>Brand Strategy : Analyse de la concurrence, valeurs, message clé et promesse de marque</li>
                        <li>Maquette Figma complète du site web prête pour l’intégration (Desktop & Mobile)</li>
                    </ul>
                    <div class="offer-price-wrapper">
                        <a href="https://wa.me/33768702214?text=Hello%20Anwar%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20l'offre%20%22L'INTÉGRAL%22%2C%20peut-on%20discuter%20de%20mon%20projet%20%3F" target="_blank" rel="noopener noreferrer" class="btn-premium dark-btn">
                            <span class="btn-label-wrapper">
                                <span class="btn-label">À partir de 2 450 €</span>
                                <span class="btn-label btn-label-hover">À partir de 2 450 €</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            
        </div>
    </section>
    <!-- METHODOLOGY SECTION -->
    <section class="methodology-section reveal">
        <div class="container">
            <h2 class="section-title-large">Une méthodologie rigoureuse<br><span class="serif-italic">qui repose sur l’écoute et la collaboration</span></h2>
            
            <div class="methodology-grid">
                {#each methodology as item}
                    <div class="methodology-item">
                        <h3 class="method-step">
                            <span class="step-num">{item.num} .</span>
                            <span class="step-title">{item.step}</span>
                        </h3>
                        <p class="method-desc">{item.desc}</p>
                    </div>
                {/each}
            </div>

            <div class="final-cta">
                <a href="https://cal.com/arsaam-studio/30min?user=arsaam-studio" target="_blank" class="btn-premium dark-btn large-btn">
                    <span class="btn-label-wrapper">
                        <span class="btn-label">Reserver un appel</span>
                        <span class="btn-label btn-label-hover">Reserver un appel</span>
                    </span>
                </a>
            </div>
        </div>
    </section>

    <!-- FAQ SECTION -->
    <section class="faq-section reveal">
        <div class="container">
            <div class="faq-header">
                <span class="faq-label">LA FAQ</span>
                <h2 class="faq-title">Pour tout comprendre</h2>
            </div>

            <div class="faq-layout">
                <div class="faq-list">
                    {#each faqs as faq, i}
                        <div class="faq-item" class:active={openFaq === i}>
                            <button class="faq-question" on:click={() => toggleFaq(i)}>
                                <span>{faq.q}</span>
                                <span class="faq-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </span>
                            </button>
                            {#if openFaq === i}
                                <div class="faq-answer" transition:slide={{ duration: 400, easing: quintOut }}>
                                    <p>{faq.a}</p>
                                </div>
                            {/if}
                        </div>
                    {/each}
                </div>

                <div class="faq-contact-card">
                    <div class="contact-icon-wrapper">
                        <div class="contact-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 2L11 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <h3 class="contact-title">Vous avez des questions spécifiques ?</h3>
                    <p class="contact-text">Réponse sous 24h</p>
                    <a href="mailto:arsaam.studio@gmail.com" class="btn-premium contact-btn">
                        <span class="btn-label-wrapper">
                            <span class="btn-label">Envoyer un mail</span>
                            <span class="btn-label btn-label-hover">Envoyer un mail</span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</div>

<style>
    .hero-container {
        padding: 2rem;
        height: fit-content;
        max-height: 800px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .hero-card {
        background: url("../lib/assets/bg-brown.webp") center/cover no-repeat;
        color: var(--color-bg); /* #DBD2C4 */
        width: 100%;
        max-height: 800px;
        height: fit-content;
        max-width: 1400px;
        border-radius: 40px;
        padding: 8rem 3rem;
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }


    .hero-labels {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        font-size: 0.9rem;
        opacity: 0.8;
        margin-bottom: 1rem;
        font-weight: 400;
    }

    .dot {
        font-size: 1.2rem;
        line-height: 1;
    }

    .hero-main {
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        gap: 4rem;
        align-items: flex-start; /* Title starts higher */
    }

    .hero-title-area {
        align-self: flex-start;
    }

    .hero-title {
        font-size: clamp(2rem, 4.5vw, 5rem);
        line-height: 1.1;
        font-weight: 500;
        margin: 0;
        color: #ffffff; /* Explicitly white as requested */
    }

    .message-wrapper {
        display: inline-block;
        height: 1.1em;
        vertical-align: bottom;
        position: relative;
        font-family: var(--font-serif);
        font-style: italic;
        font-weight: 700;
        min-width: 300px;
        color: #DBD2C4; /* The requested color for changing texts */
    }

    .cycling-text {
        position: absolute;
        left: 0;
        bottom: 0;
        white-space: nowrap;
        display: block;
    }

    .hero-info-area {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-self: flex-end;
        margin-top: 3rem;
    }

    .hero-desc {
        font-size: 1.1rem;
        line-height: 1.5;
        opacity: 0.9;
        max-width: 400px;
        margin: 0;
    }

    .hero-cta {
        display: flex;
    }

    /* Light version of the premium button for the dark card */
    :global(.light-btn) {
        background-color: var(--color-bg) !important;
        color: var(--color-primary) !important;
    }

    :global(.light-btn:hover) {
        background-color: #ede6dd !important;
        color: var(--color-primary) !important;
    }

    /* PROJECTS SECTION */
   

    .section-title-large {
        font-size: clamp(2rem, 5vw, 4rem);
        line-height: 1.2;
        text-align: center;
        margin-bottom: 6rem;
        color: var(--color-text);
    }

    .serif-italic {
        font-family: var(--font-serif);
        font-style: italic;
        font-weight: 500;
    }

    .projects-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem 3rem;
    }

    .project-item {
        text-decoration: none;
        color: inherit;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .project-img-wrapper {
        border-radius: 30px;
        overflow: hidden;
        aspect-ratio: 16/10;
        background-color: #f5f5f5;
    }

    .project-img-wrapper img {
        width: 100%;
        height: 100%;
        display: block;
        /* object-fit: cover; */
        transition: transform 0.6s cubic-bezier(0.2, 0, 0.2, 1);
    }

    .project-item:hover .project-img-wrapper img {
        transform: scale(1.05);
    }


    .project-title {
        font-size: 1.4rem;
        font-family: var(--font-sans);
        font-weight: 500;
        margin-bottom: 0.5rem;
    }

    .project-desc {
        font-size: 1.1rem;
        line-height: 1.5;
        opacity: 0.8;
        font-family: var(--font-serif);
    }

    /* VISION SECTION */
    .vision-section {
       
        margin-top: 4rem;
    }

    .grid-vision {
        display: grid;
        grid-template-columns: 1fr 1.2fr;
        gap: 5rem;
        align-items: center;
    }

    .vision-img-wrapper {
        border-radius: 20px;
        overflow: hidden;
    }

    .vision-img {
        width: 100%;
        aspect-ratio: 1;
        object-fit: cover;
        display: block;
    }

    .vision-content {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .vision-subtitle {
        font-size: 1.8rem;
        font-weight: 700;
        line-height: 1.3;
        margin-bottom: 1rem;
    }

    .vision-content p {
        font-size: 1.15rem;
        line-height: 1.6;
        opacity: 0.85;
    }

    /* OFFERS SECTION */
    .offers-section {
        padding: 6rem 0;
        position: relative;
        background: none !important;
    }

    @media (min-width: 1024px) {
        .offers-section {
            background: url("../lib/assets/bg-wave.webp") center/cover no-repeat !important;
            background-attachment: fixed !important;
        }
    }

    .offers-section > .container {
        width: 100% !important;
        max-width: none !important;
        padding-block: 3rem;
    }

    .offers-title {
        font-family: var(--font-serif);
        font-size: clamp(2rem, 4vw, 3rem);
        text-align: center;
        margin-bottom: 6rem;
        line-height: 1.1;
        font-weight: 500;
        color: var(--color-text);
    }

    .offers-title .serif-italic {
        display: block;
        font-family: var(--font-serif);
        font-style: italic;
        font-weight: 400;
        margin-top: 0.5rem;
    }

    .offers-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 4rem;
        margin-bottom: 6rem;
        margin-inline: auto;
        align-items: stretch;
        width: 100%;
        max-width: 1260px;
    }

    .offer-card {
        background: #ffffff;
        border-radius: 12px;
        padding: 4rem 2.5rem 5rem 2.5rem;
        display: flex;
        flex-direction: column;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.04);
        position: relative;
    }

    .offer-card.featured {
        border: 1px solid #D1C4B5;
    }

    .offer-name {
        font-family: var(--font-sans);
        font-size: 1.8rem;
        font-weight: 700;
        text-align: center;
        margin-bottom: 3.5rem;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: var(--color-text);
    }

    .offer-list {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        flex-grow: 1;
    }

    .offer-list li {
        font-size: 1.1rem;
        line-height: 1.4;
        color: #211F1F;
        padding-left: 2.8rem;
        position: relative;
    }

    /* Markers: Checkmark vs Plus */
    .offer-list li::before {
        content: "\2713"; /* Checkmark */
        position: absolute;
        left: 0;
        color: #623E1A;
        font-weight: 400;
        font-size: 1.2rem;
    }

    /* Second and third cards: first is check, others are "+" */
    .offer-card:nth-child(2) .offer-list li:not(:first-child)::before,
    .offer-card:nth-child(3) .offer-list li:not(:first-child)::before {
        content: "+";
        font-size: 1.5rem;
        top: -4px;
        font-weight: 300;
    }

    .offer-price-wrapper {
        position: absolute;
        bottom: -1.5rem;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 0 2rem;
        z-index: 2;
    }

    .offer-price-wrapper .btn-premium {
        background-color: #623E1A;
        color: #ffffff;
        border-radius: 100px;
        padding: 0.8rem 2.5rem;
        font-size: 1rem;
        font-weight: 600;
        border: none;
        box-shadow: 0 4px 15px rgba(98, 62, 26, 0.2);
        width: auto;
        transition: all 0.3s ease;
    }

    .offer-price-wrapper .btn-premium:hover {
        background-color: var(--color-text) !important;
        color: var(--color-bg) !important;
        
    }


    .final-cta {
        display: flex;
        justify-content: center;
        margin-top: 4rem;
    }

    .large-btn {
        padding: .5rem 4rem !important;
        font-size: 1.1rem;
        background-color: var(--color-text) !important;
    }

    /* METHODOLOGY SECTION */
    .methodology-section {
        padding: 8rem 0;
    }

    .methodology-grid {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 4rem;
        margin-bottom: 6rem;
    }

    .methodology-item {
        grid-column: span 2;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        padding-top: 2rem;
        border-top: 1px solid #E0D9D1;
        background-color: #F5F5F5;
    }

    .methodology-item:nth-child(4),
    .methodology-item:nth-child(5) {
        grid-column: span 3;
    }


    .method-step {
        font-size: 1.25rem;
        font-weight: 700;
        color: #211F1F;
        display: flex;
        gap: 0.5rem;
        font-family: var(--font-sans);
    }

    .step-num {
        font-weight: 800;
    }

    .method-desc {
        font-size: 1.1rem;
        line-height: 1.6;
        opacity: 0.9;
        font-family: var(--font-serif);
        color: #211F1F;
    }

    /* FAQ SECTION */
    .faq-section {
        padding: 8rem 0;
    }

    .faq-header {
        text-align: center;
        margin-bottom: 5rem;
        font-family: var(--font-sans), sans-serif;
    }

    .faq-label {
        display: block;
        font-size: 2.5rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        margin-bottom: 1rem;
        font-family: var(--font-sans), sans-serif;
    }

    .faq-title {
        font-family: var(--font-serif), serif;
        font-size: 3rem;
        font-weight: 500;
    }

    .faq-layout {
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        gap: 4rem;
        align-items: flex-start;
    }

    .faq-list {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .faq-item {
        background: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0,0,0,0.02);
    }

    .faq-question {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem;
        background: none;
        border: none;
        text-align: left;
        font-size: 1.2rem;
        font-weight: 600;
        font-family: var(--font-sans), sans-serif;
        cursor: pointer;
        color: #211F1F;
    }

    .faq-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #623E1A;
        transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .faq-item.active .faq-icon {
        transform: rotate(45deg);
    }

    .faq-item.active .faq-question {
        color: #623E1A;
    }

    .faq-item {
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0,0,0,0.02);
        transition: all 0.3s ease;
        border: 1px solid transparent;
    }

    .faq-item.active {
        border-color: rgba(98, 62, 26, 0.1);
        box-shadow: 0 10px 30px rgba(98, 62, 26, 0.05);
    }

    .faq-answer {
        padding: 0 2rem 2rem 2rem;
        font-size: 1.05rem;
        line-height: 1.6;
        opacity: 0.8;
        font-family: var(--font-serif);
    }

    .faq-contact-card {
        background: url("../lib/assets/bg-brown.webp") center/cover no-repeat;
        border-radius: 30px;
        padding: 4rem 3rem 5rem 3rem; /* Added bottom padding to make space for title/text before absolute button */
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        position: relative;
        overflow: visible; /* Changed from hidden to allow button to overlap */
        color: white;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
    }

    .faq-contact-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba(98, 62, 26, 0.6) 0%, rgba(33, 31, 31, 0.4) 100%);
        z-index: 1;
        border-radius: 30px; /* Match parent border radius since we removed overflow: hidden */
    }

    .faq-contact-card > * {
        position: relative;
        z-index: 2;
    }

    .contact-icon-wrapper {
        margin-bottom: 1rem;
        display: flex;
        justify-content: center;
    }

    .contact-icon {
        width: 80px;
        height: 80px;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        transition: transform 0.5s cubic-bezier(0.2, 0, 0.2, 1);
    }

    .faq-contact-card:hover .contact-icon {
        transform: rotate(12deg) scale(1.1);
    }

    .contact-title {
        font-family: var(--font-serif);
        font-size: 2rem;
        font-weight: 500;
        line-height: 1.2;
        max-width: 400px;
        color: white; /* Ensure title is white over dark bg */
    }

    .contact-text {
        font-size: 1.15rem;
        opacity: 0.9;
        margin-bottom: 1.5rem;
        max-width: 350px;
        line-height: 1.5;
        font-family: var(--font-sans);
    }

    .contact-btn {
        
    width: max-content;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%) translateY(50%);
        background-color: white !important;
        color: #623E1A !important;
        padding: 1.2rem 3rem !important;
        border-radius: 100px !important;
        font-size: 1.05rem !important;
        font-weight: 700 !important;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 5;
    }

  

    @media (max-width: 1100px) {
        .hero-main {
            grid-template-columns: 1fr;
            gap: 3rem;
            align-items: flex-start;
        }
        .hero-card {
            padding: 4rem 3rem;
        }
        .offers-grid {
            grid-template-columns: 1fr;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }
        .offer-card.featured {
            transform: none;
        }
        .methodology-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 992px) {
        .grid-vision {
            grid-template-columns: 1fr;
            gap: 3rem;
        }
        .vision-img-wrapper {
            max-width: 500px;
            margin: 0 auto;
        }
        .faq-layout {
            grid-template-columns: 1fr;
            gap: 3rem;
        }
    }

    @media (max-width: 768px) {
         .methodology-item:nth-child(1) {
        position: sticky;
        top: 17%;
        z-index: 1;
    }

    .methodology-item:nth-child(2) {
        position: sticky;
        top: 24%;
        z-index: 2;
    }

    .methodology-item:nth-child(3) {
        position: sticky;
        top: 31%;
        z-index: 3;
    }

    .methodology-item:nth-child(4) {
        position: sticky;
        top: 38%;
        z-index: 4;
    }

    .methodology-item:nth-child(5) {
        position: sticky;
        top: 45%;
        z-index: 5;
    }
        .hero-container {
            padding: 1rem;
        }
        .hero-card {
            padding: 3rem 1.5rem;
            border-radius: 24px;
        }
        .hero-labels {
            margin-bottom: 2rem;
            font-size: 0.8rem;
        }
        .hero-title {
            font-size: 2rem;
        }
        .projects-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
        .section-title-large {
            margin-bottom: 2rem;
        }
        .offers-section {
            padding: 0;
        }
        .offers-title {
            margin-bottom: 2rem;
        }
        .offers-grid {
            margin-bottom: 2rem;
            gap: 2rem;
        }
        .offer-card {
            margin-inline: 1rem;
            padding: 2.5rem 1.5rem 4rem 1.5rem;
        }
        .methodology-section,
        .faq-section {
            padding: 4rem 0;
        }
        .methodology-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            margin-bottom: 3rem;
        }
        .final-cta {
            margin-top: 2rem;
        }
        .faq-label {
            font-size: 1.5rem;
        }
        .faq-title {
            font-size: 2rem;
        }
        .faq-header {
            margin-bottom: 3rem;
        }
    }
</style>
