import * as server from '../entries/pages/projects/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/projects/+page.server.js";
export const imports = ["_app/immutable/nodes/6.Ku_KOzXa.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/index.Bl_JVcRZ.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = [];
export const fonts = [];
