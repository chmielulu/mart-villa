import React, { FC } from "react";
import styled, { css } from "styled-components";
import { graphql, useStaticQuery, Link } from "gatsby";
import { SimpleFileQuery } from "../../interfaces/childImageSharp";
import { GatsbyImage } from "gatsby-plugin-image";
import { NAVIGATION_ITEMS } from "../../config";
import { useWindowScroll } from "react-use";
import GatsbyLink from "../atoms/GatsbyLink";
import { getImage } from "../../utils/getImage";
import { cssEaseOutExpo } from "../../theme/easings";
import { withLineHoverEffect } from "../../theme/withLineHoverEffect";

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
    `}
`;

const StyledInnerWrapper = styled.div`
  width: 90%;
  max-width: 1170px;
  display: flex;
  justify-content: space-between;
`;

const StyledLogo = styled(GatsbyImage)`
  width: 226px;
`;

const StyledList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  align-items: center;
`;

const StyledItem = styled.li`
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

  :first-of-type {
    font-weight: 600;
    color: ${({ theme }) => theme.primary};

    a {
      ${({ theme }) => withLineHoverEffect(theme.primary)}
    }
  }
`;

const Navigation: FC = () => {
  const { file } = useStaticQuery<SimpleFileQuery>(query);
  const { y } = useWindowScroll();

  const isScrolled = y > 150;

  return (
    <StyledWrapper $isScrolled={isScrolled}>
      <StyledInnerWrapper>
        <GatsbyLink to="/">
          <StyledLogo
            image={getImage(file.childImageSharp.gatsbyImageData)}
            alt=""
          />
        </GatsbyLink>

        <StyledList>
          {NAVIGATION_ITEMS.map(({ to, name }) => (
            <StyledItem key={name}>
              <GatsbyLink to={to}>{name}</GatsbyLink>
            </StyledItem>
          ))}
        </StyledList>
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
