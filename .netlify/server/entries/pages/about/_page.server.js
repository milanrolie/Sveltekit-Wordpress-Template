const prerender = true;
const query = `
query About {
  page(id: "about", idType: URI) {
    slug
    content
    acfPageTitle {
      title
    }
  }
}`;
const graphqlEndpoint = "http://sveltekit-wordpress-template.local/graphql";
async function fetchhome() {
  const response = await fetch(graphqlEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query })
  });
  const json = await response.json();
  const about = json.data.page;
  return about;
}
async function load() {
  const about = await fetchhome();
  return {
    about
  };
}
export {
  load,
  prerender
};
