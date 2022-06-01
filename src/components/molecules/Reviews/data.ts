import { graphql, useStaticQuery } from "gatsby";
import {
  ChildImageSharp,
  SimpleFileQuery,
} from "../../../interfaces/childImageSharp";

export const REVIEWS = (): {
  name: string;
  position: string;
  content: string;
  avatar: ChildImageSharp;
}[] => {
  const { allFile } = useStaticQuery<{
    allFile: { nodes: ChildImageSharp[] };
  }>(graphql`
    {
      allFile(
        filter: { name: { regex: "/avatar/" } }
        sort: { order: ASC, fields: name }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData(quality: 80, placeholder: BLURRED)
          }
        }
      }
    }
  `);

  return [
    {
      name: "Roy Bennett",
      position: "Sales Manager, Envato",
      content:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati",
      avatar: allFile.nodes[0],
    },
    {
      name: "Kathleen Peterson",
      position: "Marketing Manager, Envato",
      content:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati",
      avatar: allFile.nodes[1],
    },
    {
      name: "Bariam Adam",
      position: "Sales Manager, Envato",
      content:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati",
      avatar: allFile.nodes[2],
    },
  ];
};
