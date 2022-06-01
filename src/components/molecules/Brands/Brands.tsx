import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { getImage } from "../../../utils/getImage";
import { ChildImageSharp } from "../../../interfaces/childImageSharp";

const StyledWrapper = styled.div`
  background: ${({ theme }) => theme.secondaryBackground};
  height: 250px;

  @media (max-width: 1024px) {
    height: unset;
    padding: 60px 0;
  }
`;

const StyledInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 90%;
  max-width: 1000px;
  margin: auto;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledGatsbyImage = styled(GatsbyImage)`
  width: 160px;
  height: auto;

  @media (max-width: 1024px) {
    margin-bottom: 60px;

    :last-of-type {
      margin-bottom: 0;
    }
  }
`;

const Brands = () => {
  const { allFile } = useStaticQuery<{
    allFile: { nodes: ChildImageSharp[] };
  }>(query);
  return (
    <StyledWrapper>
      <StyledInnerWrapper>
        {allFile.nodes.map((item) => (
          <StyledGatsbyImage
            alt=""
            image={getImage(item.childImageSharp.gatsbyImageData)}
            objectFit="contain"
          />
        ))}
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

const query = graphql`
  {
    allFile(
      filter: { name: { regex: "/brand/" } }
      sort: { fields: name, order: ASC }
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(quality: 100, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

export default Brands;
