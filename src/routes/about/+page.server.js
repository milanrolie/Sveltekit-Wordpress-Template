const query = `
query About {
  page(id: "about", idType: URI) {
    title {
      title
    }
    slug
    content
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
  const about = json.data.page;
  return about;
}

export async function load() {
  const about = await fetchhome();

  console.log(about);
  return {
    about,
  };
}
