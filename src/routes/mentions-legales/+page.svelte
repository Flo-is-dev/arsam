<script>
    import SEO from "$lib/components/SEO.svelte";
</script>

<SEO title="Mentions légales" description="Mentions légales de Arsaam Studio." />

<section class="legal-notice">
    <div class="container">
        <div class="top-section">
            <div class="studio-info">
                <h1>Mentions légales</h1>
                <p>Arsaam Studio</p>
            </div>
            
            <div class="vision-info">
                <h3>Transparence et confiance.</h3>
                <p>Conformément aux lois en vigueur, voici les informations relatives à l'exploitation de ce site web.</p>
            </div>
        </div>

        <div class="legal-content">
            <div class="legal-block">
                <h3>Éditeur du site</h3>
                <p><strong>Arsaam Studio</strong><br>
                Lot almajd 2, Tinghir 45800, Maroc<br>
                Email : <a href="mailto:arsaam.studio@gmail.com">arsaam.studio@gmail.com</a><br>
                Statut juridique : Auto-entrepreneur au Maroc<br>
                Numéro d’Identification : 003693179000070</p>
            </div>

            <div class="legal-block">
                <h3>Hébergement</h3>
                <p>Ce site est hébergé par <strong>Hostinger International LTD</strong><br>
                Siège social : 61 Lordou Vironos Street, 6023 Larnaca, Chypre<br>
                Site web : <a href="https://www.hostinger.fr" target="_blank" rel="noopener noreferrer">www.hostinger.fr</a></p>
            </div>

            <div class="legal-block">
                <h3>Propriété intellectuelle</h3>
                <p>Tous les éléments présents sur ce site (textes, images, graphismes, logos, vidéos, etc.) sont la propriété exclusive de Arsaam Studio, sauf mention contraire. Toute reproduction, modification ou diffusion, même partielle, est interdite sans autorisation écrite préalable, conformément aux lois en vigueur sur la propriété intellectuelle au Maroc.</p>
            </div>

            <div class="legal-block">
                <h3>Protection des données personnelles</h3>
                <p>Les informations recueillies via le formulaire de contact ou toute autre interaction sur ce site sont uniquement utilisées dans le cadre de la relation professionnelle entre l’utilisateur et Arsaam Studio. Conformément à la Loi 09-08 relative à la protection des données personnelles au Maroc, vous disposez d’un droit d’accès, de rectification et de suppression de vos données. Pour exercer ce droit, envoyez votre demande à <a href="mailto:arsaam.studio@gmail.com">arsaam.studio@gmail.com</a>.</p>
            </div>

            <div class="legal-block">
                <h3>Responsabilité</h3>
                <p>Arsaam Studio met tout en œuvre pour assurer l’exactitude des informations présentes sur ce site. Toutefois, aucune garantie n’est donnée quant à leur exhaustivité ou leur mise à jour. L’éditeur ne pourra être tenu responsable des dommages directs ou indirects liés à l’utilisation du site.</p>
            </div>

            <div class="legal-block">
                <h3>Liens externes</h3>
                <p>Ce site peut contenir des liens vers d’autres sites web. Arsaam Studio ne peut être tenu responsable du contenu ou des pratiques de ces sites tiers.</p>
            </div>

            <div class="legal-block">
                <h3>Droit applicable et juridiction</h3>
                <p>Les présentes mentions légales sont soumises au droit marocain. En cas de litige, les tribunaux compétents seront ceux du ressort des autorités marocaines.</p>
            </div>
        </div>
    </div>
</section>

<style>
    .legal-notice {
        padding: 4rem 0;
        color: #333;
    }

    .top-section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        margin-bottom: 6rem;
    }

    .studio-info h1 {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
    }

    .studio-info p {
        font-size: 1.2rem;
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

    .legal-content {
        max-width: 800px;
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }

    .legal-block h3 {
        font-size: 1.4rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: var(--color-text);
    }

    .legal-block p {
        font-size: 1.1rem;
        line-height: 1.7;
        opacity: 0.8;
    }

    .legal-block a {
        color: inherit;
        text-decoration: underline;
        text-underline-offset: 4px;
    }

    @media (max-width: 992px) {
        .top-section {
            grid-template-columns: 1fr;
            gap: 2rem;
            margin-bottom: 4rem;
        }
    }
</style>
