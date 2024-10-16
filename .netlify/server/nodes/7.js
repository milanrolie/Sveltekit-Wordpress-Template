import * as server from '../entries/pages/projects/_slug_/_page.server.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/projects/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/7.DWqtaApG.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/index.Bl_JVcRZ.js"];
export const stylesheets = [];
export const fonts = [];
