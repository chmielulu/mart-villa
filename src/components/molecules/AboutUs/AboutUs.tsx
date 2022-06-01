import React from "react";
import styled from "styled-components";
import SectionHeader from "../../atoms/SectionHeader/SectionHeader";
import Button from "../../atoms/Button/Button";
import StyledItem from "./StyledItem/StyledItem";
import { GatsbyImage } from "gatsby-plugin-image";
import { getImage } from "../../../utils/getImage";
import { graphql, useStaticQuery } from "gatsby";
import { ChildImageSharp } from "../../../interfaces/childImageSharp";

const StyledWrapper = styled.section`
  width: 90%;
  margin: 120px auto 0;
  max-width: 1270px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

const StyledLeftWrapper = styled.div`
  max-width: 562px;
`;

const StyledSectionHeader = styled(SectionHeader)``;

const StyledParagraph = styled.p`
  margin: 35px 0 0;
  color: ${({ theme }) => theme.washMedium};
  line-height: 1.5;
`;

const StyledList = styled.ul`
  margin: 40px 0;
  list-style-type: none;
  padding: 0;
`;

const StyledImage = styled(GatsbyImage)`
  margin-left: 30px;

  @media (max-width: 1260px) {
    :last-of-type {
      display: none;
    }
  }

  @media (max-width: 1024px) {
    margin-left: 0;

    :last-of-type {
      display: block;
      margin-left: 30px;
    }
  }
`;

const StyledImagesWrapper = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    margin-bottom: 40px;
  }
`;

const AboutUs = () => {
  const { aboutUs1, aboutUs2 } = useStaticQuery<{
    aboutUs1: ChildImageSharp;
    aboutUs2: ChildImageSharp;
  }>(query);

  return (
    <StyledWrapper>
      <StyledLeftWrapper>
        <StyledSectionHeader
          title="We Specialize In Quality
  Home Renovations"
          subtitle="About us"
        />
        <StyledParagraph>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum.
        </StyledParagraph>

        <StyledList>
          <StyledItem>Outstanding property</StyledItem>
          <StyledItem>Professional and experienced human resources</StyledItem>
          <StyledItem>Provide the best services for users</StyledItem>
          <StyledItem>
            Modern city locations and exceptional lifestyle
          </StyledItem>
        </StyledList>

        <Button>Read more</Button>
      </StyledLeftWrapper>

      <StyledImagesWrapper>
        <StyledImage
          image={getImage(aboutUs1.childImageSharp.gatsbyImageData)}
          alt=""
        />

        <StyledImage
          image={getImage(aboutUs2.childImageSharp.gatsbyImageData)}
          alt=""
        />
      </StyledImagesWrapper>
    </StyledWrapper>
  );
};

const query = graphql`
  {
    aboutUs1: file(name: { eq: "about_us_1" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, placeholder: DOMINANT_COLOR)
      }
    }

    aboutUs2: file(name: { eq: "about_us_2" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, placeholder: DOMINANT_COLOR)
      }
    }
  }
`;

export default AboutUs;
