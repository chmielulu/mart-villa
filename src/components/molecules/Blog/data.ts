import { graphql, useStaticQuery } from "gatsby";
import { ChildImageSharp } from "../../../interfaces/childImageSharp";

export const ARTICLES = () => {
  const { architecture, interior1, interior2, coreDesign } = useStaticQuery<{
    architecture: ChildImageSharp;
    interior1: ChildImageSharp;
    interior2: ChildImageSharp;
    coreDesign: ChildImageSharp;
  }>(graphql`
    {
      architecture: file(name: { eq: "architecture" }) {
        childImageSharp {
          gatsbyImageData(quality: 80, placeholder: DOMINANT_COLOR)
        }
      }

      interior1: file(name: { eq: "interior" }) {
        childImageSharp {
          gatsbyImageData(quality: 80, placeholder: DOMINANT_COLOR)
        }
      }

      interior2: file(name: { eq: "interior2" }) {
        childImageSharp {
          gatsbyImageData(quality: 80, placeholder: DOMINANT_COLOR)
        }
      }

      coreDesign: file(name: { eq: "core-design" }) {
        childImageSharp {
          gatsbyImageData(quality: 80, placeholder: DOMINANT_COLOR)
        }
      }
    }
  `);
  console.log(architecture, interior2, interior1, coreDesign);

  return [
    {
      title: "Agency is the capacity of an actor to act in a given",
      dateAndAuthor: "DECEMBER 06, 2021 / ADMIN",
      content:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound.",
      link: "/blog/agency-is-the-capacity-of-an-actor-to-act-in-a-given",
      category: "Architecture",
      image: architecture,
    },
    {
      title: "What to do a year before buying apartment",
      dateAndAuthor: "DECEMBER 06, 2021 / ADMIN",
      content:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound.",
      link: "/blog/what-to-do-a-year",
      category: "Interior",
      image: interior1,
    },
    {
      title: "The most inspiring interior design 2021",
      dateAndAuthor: "DECEMBER 06, 2021 / ADMIN",
      content:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound.",
      link: "/blog/the-most-inspiring",
      category: "Core design",
      image: coreDesign,
    },
    {
      title: "Renovating a living roo? Expeats shere their secrets",
      dateAndAuthor: "DECEMBER 06, 2021 / ADMIN",
      content:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound.",
      link: "/blog/renovating-a-living-roo",
      category: "Interior",
      image: interior2,
    },
  ];
};
