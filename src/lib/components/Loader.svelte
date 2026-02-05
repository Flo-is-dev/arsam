<script>
    import { onMount } from 'svelte';

    const words = ["ARTISANALES", "CULTURELLES", "INNOVANTES", "IMPACTANTES", "AUTHENTIQUES"];
    const duration = 3000;
    const strobeIntervalTime = 350;

    let showComponent = true;
    let showCurtain = true;
    let isLeaving = false;
    let currentWord = words[0];
    let isOutline = false;
    let counter = 0;

    onMount(() => {
        // Start animation sequence after short delay (Revealing the Loader)
        setTimeout(() => {
            showCurtain = false;
            startStrobe();
            startCounter();
        }, 500);
    });

    function startStrobe() {
        let wordIndex = 0;
        const interval = setInterval(() => {
            wordIndex = (wordIndex + 1) % words.length;
            currentWord = words[wordIndex];
            isOutline = Math.random() > 0.4;
        }, strobeIntervalTime);

        // Clear interval when loader is done
        setTimeout(() => clearInterval(interval), duration + 1500);
    }

    function startCounter() {
        const startTime = Date.now();
        
        function update() {
            const elapsed = Date.now() - startTime;
            counter = Math.min(Math.floor((elapsed / duration) * 100), 100);
            
            if (elapsed < duration) {
                requestAnimationFrame(update);
            } else {
                counter = 100;
                // Transition out
                setTimeout(() => {
                    isLeaving = true;
                    // Remove component entirely after transition duration (1.2s)
                    setTimeout(() => {
                        showComponent = false;
                    }, 1200);
                }, 200);
            }
        }
        
        requestAnimationFrame(update);
    }
</script>

{#if showComponent}
    <!-- Black Curtain -->
    <div class="intro-curtain" class:slide-up={!showCurtain}></div>

    <!-- Loader -->
    <div class="loader-container" class:slide-up={isLeaving}>
        <div class="noise-overlay"></div>
        <div class="static-label">Pour les marques</div>
        <div class="strobe-text">
            <span class:text-outline={isOutline}>{currentWord}</span>
        </div>
        <div class="loader-counter">{counter}%</div>
    </div>
{/if}

<style>
    :root {
        --bg-chocolate: #2D1B0E;
        --text-cream: #F5E6D3;
        --ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);
    }

    .intro-curtain {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000000;
        z-index: 1000;
        transform: translateY(0%);
        transition: transform 1.2s var(--ease-out-expo);
        will-change: transform;
    }

    .loader-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--bg-chocolate);
        color: var(--text-cream);
        z-index: 999;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: translateY(0%);
        transition: transform 1.2s var(--ease-out-expo);
        will-change: transform;
        cursor: wait;
        font-family: 'Archivo Black', sans-serif;
    }

    .slide-up {
        transform: translateY(-100%) !important;
    }

    .noise-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 10;
        opacity: 0.07;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    }

    .static-label {
        font-size: clamp(1.5rem, 7vw, 6rem);
        line-height: 0.9;
        text-transform: uppercase;
        text-align: center;
        width: 100%;
        padding: 0 5vw;
        margin-bottom: 0.5rem;
        position: relative;
        z-index: 20;
    }

    .strobe-text {
        font-size: clamp(2rem, 9vw, 8rem);
        text-transform: uppercase;
        text-align: center;
        line-height: 0.9;
        width: 100%;
        padding: 0 5vw;
        position: relative;
        z-index: 20;
    }

    .strobe-text span {
        display: block;
    }

    .text-outline {
        color: transparent;
        -webkit-text-stroke: 2px var(--text-cream);
    }

    .loader-counter {
        position: absolute;
        bottom: 3rem;
        right: 3rem;
        font-size: clamp(2rem, 5vw, 4rem);
        font-weight: 400;
        letter-spacing: -2px;
        font-variant-numeric: tabular-nums;
        z-index: 20;
    }

    @media (max-width: 768px) {
        .strobe-text {
            font-size: clamp(1.5rem, 10vw, 3.5rem);
        }
        .static-label {
            font-size: clamp(1rem, 8vw, 2.2rem);
        }
        .loader-counter {
            bottom: 2rem;
            right: 2rem;
            font-size: 1.5rem;
        }
    }
</style>
