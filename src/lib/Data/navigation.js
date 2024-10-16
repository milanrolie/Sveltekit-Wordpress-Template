import { gql, request } from "graphql-request";

const endpoint = "http://sveltekit-wordpress-template.local/graphql";

const query = gql`
  query Navigation {
    menus {
      nodes {
        menuItems {
          edges {
            node {
              id
              label
              title
              url
              target
            }
          }
        }
      }
    }
  }
`;

export async function fetchMenuItems() {
  const data = await request(endpoint, query);
  return data.menus.nodes[0].menuItems.edges.map((edge) => edge.node);
}
