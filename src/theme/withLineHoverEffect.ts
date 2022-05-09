import { css } from "styled-components";
import { cssEaseOutExpo } from "./easings";

export const withLineHoverEffect = (background?: string) => css`
  @media (min-width: 1025px) {
    position: relative;
    ::before {
      width: 100%;
      height: 2px;
      background: ${({ theme }) => background || theme.foreground};
      position: absolute;
      content: "";
      bottom: -4px;
      transition: transform 0.5s ${cssEaseOutExpo};
      transform: scaleX(0);
    }
    :hover::before {
      transform: scaleX(1);
    }
  }
`;
