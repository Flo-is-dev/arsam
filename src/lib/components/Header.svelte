<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import logo from '$lib/assets/Arsaam Studio_Logos/-logo-reverse-rgb.png';

    let lastScrollY = 0;
    let headerHidden = false;
    let isMobile = false;

    onMount(() => {
        const checkMobile = () => {
            isMobile = window.innerWidth <= 768;
        };
        
        const handleScroll = () => {
            if (!isMobile) {
                headerHidden = false;
                return;
            }
            
            const currentScrollY = window.scrollY;
            
            // Hide header when scrolling down, show when scrolling up
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                headerHidden = true;
            } else {
                headerHidden = false;
            }
            
            lastScrollY = currentScrollY;
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('scroll', handleScroll);
        };
    });
</script>

<header class:hidden={headerHidden}>
    <div class="container nav-wrapper">
        <a href="/" class="logo-area">
            <img src={logo} alt="Arsaam Studio" class="logo-img" />
        </a>

        <nav>
            <a href="/#projets" class:active={$page.url.pathname === '/' && $page.url.hash === '#projets'}>Projets</a>
            <a href="/#offres" class:active={$page.url.pathname === '/' && $page.url.hash === '#offres'}>Offres</a>
            <a href="/a-propos" class:active={$page.url.pathname === '/a-propos'}>A propos</a>
        </nav>

        <a href="https://wa.me/33768702214" target="_blank" class="btn-whatsapp">
            <span class="btn-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
            </span>
            <span class="btn-label-wrapper">
                <span class="btn-label">Discutons de votre projet</span>
                <span class="btn-label btn-label-hover">Discutons de votre projet</span>
            </span>
        </a>
    </div>
</header>

<style>
    header {
        padding: 1.5rem 0;
        position: sticky;
        top: 0;
        background-color: #F5F5F5;
        z-index: 100;
        transition: transform 0.3s ease;
    }

    header.hidden {
        transform: translateY(-100%);
    }

    .nav-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo-area {
        display: flex;
        align-items: center;
        gap: 0.8rem;
    }

    .logo-img {
        height: 70px;
        width: auto;
    }

    nav {
        display: flex;
        gap: 2.5rem;
    }

    nav a {
        font-size: 0.95rem;
        font-weight: 500;
        color: var(--color-text);
        opacity: 0.8;
        position: relative;
        padding: 0.2rem 0;
        transition: all 0.3s ease;
    }

    nav a::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1.5px;
        background-color: var(--color-primary);
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.4s cubic-bezier(0.7, 0, 0.3, 1);
    }

    nav a:hover {
        opacity: 1;
        color: var(--color-primary);
    }

    nav a:hover::after {
        transform: scaleX(1);
        transform-origin: left;
    }

    nav a.active {
        opacity: 1;
        font-weight: 600;
        color: var(--color-primary);
    }

    nav a.active::after {
        transform: scaleX(1);
    }

    .btn-whatsapp {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;
        overflow: hidden;
        padding: 0.8rem 2rem;
        border-radius: 100px;
        background-color: #25D366; /* WhatsApp Green */
        color: white;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        border: none;
        cursor: pointer;
        font-family: var(--font-sans);
        font-weight: 700;
        font-size: 0.95rem;
        width: fit-content;
        box-shadow: 0 4px 15px rgba(37, 211, 102, 0.2);
    }

    .btn-icon {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .btn-whatsapp .btn-label-wrapper {
        position: relative;
        display: block;
        overflow: hidden;
    }

    .btn-whatsapp .btn-label {
        display: block;
        transition: transform 0.5s cubic-bezier(0.7, 0, 0.3, 1);
    }

    .btn-whatsapp .btn-label-hover {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
    }

    .btn-whatsapp:hover {
        background-color: #128C7E; /* WhatsApp Dark Green */
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(18, 140, 126, 0.3);
    }

    .btn-whatsapp:hover .btn-label {
        transform: translateY(-100%);
    }

    @media (max-width: 992px) {
        nav {
            gap: 1.5rem;
        }
    }

    @media (max-width: 768px) {
        header {
            padding: 0.75rem 0;
        }
        .nav-wrapper {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 0.5rem;
            justify-content: space-between;
        }
        .logo-img {
            height: 40px;
        }
        nav {
            order: 3;
            width: 100%;
            justify-content: center;
            gap: 1.5rem;
            padding-top: 0.5rem;
            border-top: 1px solid rgba(0, 0, 0, 0.05);
        }
        nav a {
            font-size: 0.85rem;
        }
        .btn-whatsapp {
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
            gap: 0.5rem;
        }
        .btn-whatsapp .btn-label-wrapper {
            display: none;
        }
    }
</style>
