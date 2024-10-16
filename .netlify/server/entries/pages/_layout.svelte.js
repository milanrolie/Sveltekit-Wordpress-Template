import { c as create_ssr_component, a as subscribe, b as add_attribute } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
const currentRoute = writable("/");
const css = {
  code: "#pageTransition.svelte-1m7fghw{position:fixed;top:0;left:0;width:100%;height:100vh;background:var(--bright);z-index:200;opacity:1;pointer-events:none;transform:translateY(0);z-index:99999}#pageTransition.svelte-1m7fghw{position:fixed;top:0;left:0;width:100%;height:100vh;background:rgba(18, 18, 18, 0.2);z-index:100;opacity:0;pointer-events:none;z-index:100;opacity:0;pointer-events:none}",
  map: '{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\n  import \\"../styles/globals.scss\\";\\n  import { gsap } from \\"gsap\\";\\n  import { afterUpdate, onMount } from \\"svelte\\";\\n  import { currentRoute } from \\"$lib/stores/store.js\\";\\n\\n  // import Lenis from \\"$lib/components/particles/Lenis.svelte\\";\\n  // import Navigation from \\"$lib/components/structures/Navigation.svelte\\";\\n\\n  let pageContainer;\\n  let links;\\n\\n  $: $currentRoute, handleRouteChange();\\n\\n  function handleRouteChange() {}\\n<\/script>\\n\\n<!-- <Lenis />\\n<Navigation /> -->\\n\\n<slot />\\n<div id=\\"pageTransition\\" bind:this={pageContainer}></div>\\n\\n<style>\\n  #pageTransition {\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100vh;\\n    background: var(--bright);\\n    z-index: 200;\\n    opacity: 1;\\n    pointer-events: none;\\n    transform: translateY(0);\\n    z-index: 99999;\\n  }\\n\\n  #pageTransition {\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100vh;\\n    background: rgba(18, 18, 18, 0.2);\\n    z-index: 100;\\n    opacity: 0;\\n    pointer-events: none;\\n    z-index: 100;\\n    opacity: 0;\\n    pointer-events: none;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAwBE,8BAAgB,CACd,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,IAAI,QAAQ,CAAC,CACzB,OAAO,CAAE,GAAG,CACZ,OAAO,CAAE,CAAC,CACV,cAAc,CAAE,IAAI,CACpB,SAAS,CAAE,WAAW,CAAC,CAAC,CACxB,OAAO,CAAE,KACX,CAEA,8BAAgB,CACd,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CACjC,OAAO,CAAE,GAAG,CACZ,OAAO,CAAE,CAAC,CACV,cAAc,CAAE,IAAI,CACpB,OAAO,CAAE,GAAG,CACZ,OAAO,CAAE,CAAC,CACV,cAAc,CAAE,IAClB"}'
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_currentRoute;
  $$unsubscribe_currentRoute = subscribe(currentRoute, (value) => value);
  let pageContainer;
  $$result.css.add(css);
  $$unsubscribe_currentRoute();
  return ` ${slots.default ? slots.default({}) : ``} <div id="pageTransition" class="svelte-1m7fghw"${add_attribute("this", pageContainer, 0)}></div>`;
});
export {
  Layout as default
};
