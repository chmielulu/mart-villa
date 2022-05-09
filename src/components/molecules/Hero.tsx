import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { SimpleFileQuery } from "../../interfaces/childImageSharp";
import { getImage } from "../../utils/getImage";
import Button from "../atoms/Button";
import arrowRightShort from "@iconify/icons-bi/arrow-right-short";
import { ReactComponent as Shape } from "../../assets/vector/shape.svg";

const StyledWrapper = styled.div`
  display: flex;
  padding-top: 170px;
  max-width: 1170px;
  width: 90%;
  margin: auto;
  justify-content: space-between;
  //align-items: center;
`;

const StyledLeftWrapper = styled.div`
  max-width: 544px;
  padding-top: 70px;

  position: relative;
`;

const StyledTitle = styled.h1`
  font-family: "Gilroy", sans-serif;
  font-weight: 600;
  font-size: 6.5rem;
  margin: 0 0 30px;
`;

const StyledDescription = styled.p`
  line-height: 2.4rem;
  max-width: 500px;
  color: ${({ theme }) => theme.washStrong};
  margin: 0 0 35px;
`;

const StyledImage = styled(GatsbyImage)`
  max-width: 470px;
`;

const StyledSecondaryButton = styled(Button)`
  width: 60px;
  height: 60px;
  padding: 0;
  margin-left: 15px;
`;

const StyledButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const StyledShape = styled(Shape)`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const Hero = () => {
  const { file } = useStaticQuery<SimpleFileQuery>(query);

  return (
    <StyledWrapper>
      <StyledLeftWrapper>
        <StyledTitle>Find Your Dream Home Right Away.</StyledTitle>
        <StyledDescription>
          The experience and commitment to rewarding landowners with their dream
          architectural developments has made them earn trust within and beyond
          borders.
        </StyledDescription>
        <StyledButtonsWrapper>
          <Button>Find property</Button>
          <StyledSecondaryButton secondary icon={arrowRightShort} />

          <StyledShape />
        </StyledButtonsWrapper>
      </StyledLeftWrapper>
      <StyledImage
        image={getImage(file.childImageSharp.gatsbyImageData)}
        alt=""
      />
    </StyledWrapper>
  );
};

const query = graphql`
  {
    file(name: { eq: "hero" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, placeholder: DOMINANT_COLOR, width: 470)
      }
    }
  }
`;

export default Hero;
