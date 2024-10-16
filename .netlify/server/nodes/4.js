import * as server from '../entries/pages/posts/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/posts/+page.server.js";
export const imports = ["_app/immutable/nodes/4.CJpkb8rw.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/index.Bl_JVcRZ.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/4.2tBvihVS.css"];
export const fonts = [];
