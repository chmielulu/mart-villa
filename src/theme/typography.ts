import { css } from "styled-components";
import gilroyBold from "../assets/fonts/Gilroy-Bold.ttf";
import gilroySemiBold from "../assets/fonts/Gilroy-SemiBold.ttf";
import gilroyRegular from "../assets/fonts/Gilroy-Regular.ttf";

export const typography = css`
  @font-face {
    font-family: "Gilroy";
    font-weight: 600;
    font-style: normal;
    src: url(${gilroyBold}) format("truetype");
  }

  @font-face {
    font-family: "Gilroy";
    font-weight: 500;
    font-style: normal;
    src: url(${gilroySemiBold}) format("truetype");
  }

  @font-face {
    font-family: "Gilroy";
    font-weight: 400;
    font-style: normal;
    src: url(${gilroyRegular}) format("truetype");
  }
`;
