export const prerender = true;

const query = `
query Home {
  page(id: "home", idType: URI) {
    slug
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
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const json = await response.json();
  const home = json.data.page;
  return home;
}

export async function load() {
  const home = await fetchhome();

  return {
    home,
  };
}
