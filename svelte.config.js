import adapterNetlify from "@sveltejs/adapter-netlify";

export default {
  kit: {
    adapter: adapterNetlify(),

    // Optional: If you want to prerender all static pages during the build process
    prerender: {
      entries: ["*"], // This will prerender all static routes
    },
  },
};
