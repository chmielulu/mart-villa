import React, { FC, useState } from "react";
import styled, { css } from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { Rotate as Hamburger } from "hamburger-react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useWindowScroll } from "react-use";
import { useLocation } from "@reach/router";
import { SimpleFileQuery } from "../../../interfaces/childImageSharp";
import { NAVIGATION_ITEMS } from "../../../config";
import GatsbyLink from "../../atoms/GatsbyLink/GatsbyLink";
import { getImage } from "../../../utils/getImage";
import { withLineHoverEffect } from "../../../theme/withLineHoverEffect";
import { cssEaseOutExpo } from "../../../theme/easings";

const StyledWrapper = styled.nav<{ $isScrolled: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  background: ${({ theme }) => theme.background};
  box-shadow: 0 4px 60px rgba(0, 0, 0, 0.07);
  transition: height 0.5s ease-in-out;

  ${({ $isScrolled }) =>
    $isScrolled &&
    css`
      height: 80px;
    `};

  @media (min-width: 1025px) {
    .hamburger-react {
      display: none;
    }
  }
`;

const StyledInnerWrapper = styled.div`
  width: 90%;
  max-width: 1170px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLogo = styled(GatsbyImage)`
  width: 226px;

  @media (max-width: 620px) {
    width: 120px;
  }
`;

const StyledList = styled.ul<{ $isNavigationActive: boolean }>`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  align-items: center;

  @media (max-width: 1024px) {
    position: absolute;
    top: 100%;
    left: 0;
    flex-direction: column;
    align-items: center;
    background: ${({ theme }) => theme.background};
    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.washLight};
    box-shadow: 0 30px 30px -15px rgba(0, 0, 0, 0.1);
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    z-index: -1;
    transition: transform 0.5s ${cssEaseOutExpo}, opacity 0.5s ${cssEaseOutExpo};

    ${({ $isNavigationActive }) =>
      $isNavigationActive &&
      css`
        transform: translateY(0);
        opacity: 1;
        pointer-events: all;
      `}
  }
`;

const StyledItem = styled.li<{ $active: boolean }>`
  margin-right: 30px;
  font-weight: 500;

  a {
    color: inherit;
    text-decoration: none;
    ${withLineHoverEffect()}
  }

  :last-of-type {
    margin-right: 0;
  }

  ${({ $active }) =>
    $active &&
    css`
      font-weight: 600;
      color: ${({ theme }) => theme.primary};

      a {
        ${({ theme }) => withLineHoverEffect(theme.primary)}
      }
    `};

  @media (max-width: 1024px) {
    margin-right: 0;
    padding: 20px 0;
    border-bottom: 1px solid ${({ theme }) => theme.washLight};
    width: 100%;
    display: flex;
    justify-content: center;

    :last-of-type {
      border-bottom: 0;
    }
  }
`;

const Navigation: FC = () => {
  const { pathname } = useLocation();
  const { file } = useStaticQuery<SimpleFileQuery>(query);
  const { y } = useWindowScroll();
  const [isNavigationActive, setNavigationActive] = useState<boolean>(false);

  return (
    <StyledWrapper $isScrolled={y > 150}>
      <StyledInnerWrapper>
        <GatsbyLink to="/">
          <StyledLogo
            image={getImage(file.childImageSharp.gatsbyImageData)}
            alt=""
          />
        </GatsbyLink>

        <StyledList $isNavigationActive={isNavigationActive}>
          {NAVIGATION_ITEMS.map(({ to, name }) => (
            <StyledItem key={name} $active={pathname === to}>
              <GatsbyLink to={to}>{name}</GatsbyLink>
            </StyledItem>
          ))}
        </StyledList>

        <Hamburger toggled={isNavigationActive} toggle={setNavigationActive} />
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

const query = graphql`
  {
    file(name: { eq: "logo" }) {
      childImageSharp {
        gatsbyImageData(
          quality: 100
          placeholder: TRACED_SVG
          layout: FULL_WIDTH
          width: 226
        )
      }
    }
  }
`;

export default Navigation;
