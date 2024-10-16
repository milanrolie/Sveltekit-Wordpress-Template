import * as server from '../entries/pages/about/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/about/+page.server.js";
export const imports = ["_app/immutable/nodes/3.BIejo0Z9.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/index.Bl_JVcRZ.js"];
export const stylesheets = [];
export const fonts = [];
