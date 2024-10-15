// animationStore.js
import { writable } from "svelte/store";

export const animationStore = writable({
  switchAnimation: null,
  navAnimation: null,
});
