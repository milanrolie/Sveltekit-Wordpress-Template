// src/routes/posts/[slug]/+page.server.js
export const prerender = true;

const query = `
  query getPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      date
      title
      content
      author {
        node {
          name
        }
      }
      categories {
        nodes {
          name
        }
      }
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

async function fetchPost(slug) {
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
  const post = json.data.post;
  return post;
}

export async function load({ params }) {
  const { slug } = params;
  const post = await fetchPost(slug);

  return {
    post,
  };
}
