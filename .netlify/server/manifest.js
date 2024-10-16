export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.DWq4iwrX.js","app":"_app/immutable/entry/app.Df33zqFl.js","imports":["_app/immutable/entry/start.DWq4iwrX.js","_app/immutable/chunks/entry.CjFdDHWX.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/index._VMp3gXv.js","_app/immutable/entry/app.Df33zqFl.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/index.Bl_JVcRZ.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
