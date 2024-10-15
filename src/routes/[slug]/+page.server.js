// import { request } from "graphql-request";

export async function load({ params }) {
  const endpoint = "http://sveltekit-wordpress-template.local/graphql";
  const query = `
    query GetPage($slug: String!) {
      pageBy(uri: $slug) {
        title
        content
      }
    }
  `;

  const variables = { slug: params.slug };

  try {
    const data = await request(endpoint, query, variables);
    return {
      props: {
        page: data.pageBy,
      },
    };
  } catch (error) {
    return {
      status: 500,
      error: "Failed to fetch data from WordPress: " + error.message,
    };
  }
}
