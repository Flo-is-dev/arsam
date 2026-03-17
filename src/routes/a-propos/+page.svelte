<script>
    import SEO from "$lib/components/SEO.svelte";
    import portrait from "$lib/assets/profil.png";
</script>

<SEO title="À propos - Arsaam Studio" description="Découvrez Arsaam Studio, l'agence créative fondée par Anwar Benkerta. Branding, identité visuelle et stratégie de marque au service des entreprises ambitieuses." />

<section class="about">
    <div class="container">
        <div class="top-section">
            <div class="studio-info">
                <h2>Arsaam Studio</h2>
                <p>Crée en 2025.</p>
                <p>Anwar BENKERTA</p>
            </div>
            
            <div class="vision-info">
                <h3>Donner une image aux projets qui bâtissent demain.</h3>
                <p>Dans un flux numérique saturé, les marques qui durent sont celles qui racontent une histoire vraie. Qu'il s'agisse d'un savoir-faire ancestral ou d'une technologie de rupture, votre ambition mérite une image à la hauteur de son impact.</p>
            </div>
        </div>

        <div class="main-content">
            <div class="portrait-container">
                <img src={portrait} alt="Anwar BENKERTA" class="portrait" />
            </div>
            
            <div class="story-content">
                <div class="story-block">
                    <h3>Ma démarche.</h3>
                    <p>Je me consacre aux marques de savoir-faire, d'héritage et d'innovation durable car elles portent une responsabilité : celle de transmettre une valeur réelle. Mon rôle est de transformer cette complexité en une identité visuelle évidente, crédible et mémorable.</p>
                    <p>Ma promesse : Allier la profondeur de vos racines à l'efficacité des codes modernes pour transformer vos visiteurs en ambassadeurs.</p>
                </div>

                <div class="story-block">
                    <h3>Pourquoi Arsaam ?</h3>
                    <p>“Arsaam” signifie dessin en Berbère. Ce mot incarne l'essence même de mon travail : tracer, façonner et donner vie à des identités visuelles uniques.</p>
                    <p>D'origine marocaine, mes influences sont imprégnées de l'esthétique orientale, de la calligraphie arabe et des motifs traditionnels, que j'aime fusionner avec des approches modernes et minimalistes.</p>
                    <p>Avec Arsaam Studio, je vous accompagne dans la construction d'une image de marque forte et authentique, en mêlant créativité, tradition et innovation.</p>
                </div> 
                
                <div class="final-cta" style="margin-top:0px;justify-content: flex-start;"><a href="https://wa.me/33768702214" target="_blank" class="btn-premium dark-btn large-btn"><span class="btn-label-wrapper"><span class="btn-label">On parle de votre projet ?</span> <span class="btn-label btn-label-hover">On parle de votre projet ?</span></span></a></div>
            </div>
        </div>

       
    </div>

</section>

<style>
    .about {
        padding: 4rem 0;
        color: #333;
    }

    .top-section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        margin-bottom: 6rem;
    }

    .studio-info h2 {
        font-size: 1.2rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
    }

    .studio-info p {
        font-size: 1rem;
        margin: 0;
        opacity: 0.8;
    }

    .vision-info h3 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        line-height: 1.3;
    }

    .vision-info p {
        font-size: 1.1rem;
        line-height: 1.6;
        opacity: 0.7;
    }

    .main-content {
        display: grid;
        grid-template-columns: 1fr 1.5fr;
        gap: 4rem;
        align-items: start;
    }

    .portrait-container {
        width: 100%;
    }

    .portrait {
        width: 100%;
        height: auto;
        border-radius: 2rem;
        display: block;
    }

    .story-content {
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }

    .story-block h3 {
        font-size: 1.2rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
    }

    .story-block p {
        font-size: 1.1rem;
        line-height: 1.6;
        margin-bottom: 1.5rem;
        opacity: 0.7;
    }

    .story-block p:last-child {
        margin-bottom: 0;
    }

    @media (max-width: 992px) {
        .top-section, .main-content {
            grid-template-columns: 1fr;
            gap: 3rem;
        }

        .top-section {
            margin-bottom: 4rem;
        }

        .portrait-container {
            max-width: 400px;
        }
    }
</style>
