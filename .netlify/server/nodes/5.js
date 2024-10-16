import * as server from '../entries/pages/posts/_slug_/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/posts/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/5.lXElMhQj.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/index.Bl_JVcRZ.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/5.LHQgX25f.css"];
export const fonts = [];
