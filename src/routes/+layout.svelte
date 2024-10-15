<script>
  import "../styles/globals.scss";
  import { gsap } from "gsap";
  import { afterUpdate, onMount } from "svelte";
  import { currentRoute } from "$lib/stores/store.js";

  import Lenis from "$lib/components/particles/Lenis.svelte";
  import Navigation from "../lib/Components/structures/Navigation.svelte";

  let pageContainer;

  // Auto-subscribe to the currentRoute store
  $: $currentRoute, handleRouteChange();

  // Function to handle route changes
  function handleRouteChange() {}

  afterUpdate(() => {
    const sentences = document.querySelectorAll("#sentence");
    gsap.to(sentences, {
      duration: 1.2,
      delay: 0.7,
      y: 0,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      stagger: 0.1,
      ease: "power4.out",
    });
  });

  afterUpdate(() => {
    links = document.querySelectorAll("a");
    links.forEach((link) => {
      if (
        !link.classList.contains("noTransition") &&
        link.getAttribute("href") !== window.location.pathname
      ) {
        link.addEventListener("click", animatePageTransition);
      }
    });

    gsap.from("#fadeUp", {
      y: 150,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2,
      delay: 1.2,
    });

    gsap.to("#fadeUp", {
      delay: 1.2,
      duration: 2,
      ease: "power4.out",
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    });
  });

  onMount(() => {
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent the link from navigating immediately
        gsap.fromTo(
          pageContainer,
          { y: "100vh" },
          {
            y: 0,
            duration: 1,
            ease: "power4.inOut",
            onComplete: () => {
              window.location.href = link.href; // Navigate after the animation completes
            },
          }
        );
      });
    });
  });

  afterUpdate(() => {
    gsap.to(pageContainer, {
      y: "-100vh",
      duration: 1,
      ease: "power4.inOut",
      delay: 0,
    });
  });
</script>

<Lenis />
<Navigation />

<slot />
<div id="pageTransition" bind:this={pageContainer}></div>

<style>
  #pageTransition {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: var(--bright);
    z-index: 200;
    opacity: 1;
    pointer-events: none;
    transform: translateY(0);
    z-index: 99999;
  }

  #pageTransition {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(18, 18, 18, 0.2);
    /* backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px); */
    z-index: 100;
    opacity: 0;
    pointer-events: none;
    z-index: 100;
    opacity: 0;
    pointer-events: none;
  }
</style>
