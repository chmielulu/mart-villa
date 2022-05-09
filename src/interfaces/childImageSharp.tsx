import { ImageDataLike } from "gatsby-plugin-image";

export interface ChildImageSharp {
  childImageSharp: {
    gatsbyImageData: ImageDataLike;
  };
}

export interface File {
  file: ChildImageSharp;
}

export type SimpleFileQuery = File;
