<script>
  import "../styles/globals.scss";
  import { gsap } from "gsap";
  import { afterUpdate, onMount } from "svelte";
  import { currentRoute } from "$lib/stores/store.js";

  // import Lenis from "$lib/components/particles/Lenis.svelte";
  // import Navigation from "$lib/components/structures/Navigation.svelte";

  let pageContainer;
  let links;

  $: $currentRoute, handleRouteChange();

  function handleRouteChange() {}
</script>

<!-- <Lenis /> -->
<!-- <Navigation /> -->

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
    z-index: 100;
    opacity: 0;
    pointer-events: none;
    z-index: 100;
    opacity: 0;
    pointer-events: none;
  }
</style>
