<script>
    import logoReverse from '$lib/assets/Arsaam Studio_Logos/-logo-fullColor-rgb copie 3.png';
</script>

<footer>
    <div class="container footer-card">
        <div class="footer-top">
            <div class="footer-logo">
                <img src={logoReverse} alt="Arsaam Studio" class="footer-logo-img" />
            </div>
        </div>

        <nav class="footer-nav">
            <a href="/#projets">Projets</a>
            <a href="/#offres">Offres</a>
            <a href="/a-propos">A propos</a>
            <a href="mailto:arsaam.studio@gmail.com">Contact</a>
        </nav>

        <div class="footer-bottom">
            <div class="bottom-item">arsaam.studio@gmail.com</div>
            <div class="bottom-item">© 2026 Arsaam Studio</div>
            <div class="bottom-item"><a href="/mentions-legales">Mentions légales</a></div>
            <div class="bottom-item"><a href="https://cal.com/arsaam-studio/30min?user=arsaam-studio" target="_blank" rel="noopener noreferrer">On discute de votre projet ?</a></div>
        </div>
    </div>
</footer>

<style>
    footer {
        padding: 2rem 0 4rem 0;
        background-color: #F5F5F5;
    }

    .footer-card {
        background: url($lib/assets/bg-brown.webp);
        color: var(--color-bg);
        border-radius: 40px;
        padding: 2rem 3rem 2rem 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        overflow: hidden;
    }


    .footer-logo {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 3rem;
    }

    .footer-logo-img {
        height: 130px;
        width: auto;
    }

    .footer-nav {
        display: flex;
        gap: 2rem;
        margin-bottom: 6rem;
    }

    .footer-nav a {
        color: var(--color-bg);
        font-size: 1rem;
        opacity: 0.8;
        transition: opacity 0.3s ease;
    }

    .footer-nav a:hover {
        opacity: 1;
    }

    .footer-bottom {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-top: 2rem;
        /* border-top: 1px solid rgba(219, 210, 196, 0.1); */
        font-size: 0.8rem;
        opacity: 0.7;
    }

    .footer-bottom a {
        color: inherit;
    }

    @media (max-width: 992px) {
        .footer-bottom {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            text-align: center;
        }
    }

    @media (max-width: 768px) {
        .footer-card {
            padding: 3rem 1.5rem 1.5rem 1.5rem;
            border-radius: 20px;
        }
        .footer-nav {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            margin-bottom: 3rem;
        }
    }
</style>
