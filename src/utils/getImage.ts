//! This util is created because there were problems with gatsby-plugin-image package types

import {
  IGatsbyImageData,
  ImageDataLike,
  getImage as image,
} from "gatsby-plugin-image";

export const getImage = (source: ImageDataLike): IGatsbyImageData => {
  // @ts-ignore
  return image(source);
};
