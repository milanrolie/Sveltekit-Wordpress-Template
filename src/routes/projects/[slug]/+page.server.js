export const prerender = true;

const query = `
 query getProjectBySlug($slug: ID!) {
    project(id: $slug, idType: SLUG) {
    date
      title
      content
      featuredImage {
        node {
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
    }
  }
`;

const graphqlEndpoint = "http://sveltekit-wordpress-template.local/graphql";

async function fetchProject(slug) {
  const response = await fetch(graphqlEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: { slug },
    }),
  });

  const json = await response.json();
  const project = json.data.project;
  return project;
}

export async function load({ params }) {
  const { slug } = params;
  const project = await fetchProject(slug);

  return {
    project,
  };
}
