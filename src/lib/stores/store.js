import { writable } from "svelte/store";

// Initialize the currentRoute store with an initial route, e.g., '/'
export const currentRoute = writable("/");
