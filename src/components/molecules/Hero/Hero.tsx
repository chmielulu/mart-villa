import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { SimpleFileQuery } from "../../../interfaces/childImageSharp";
import { getImage } from "../../../utils/getImage";
import Button from "../../atoms/Button/Button";
import arrowRightShort from "@iconify/icons-bi/arrow-right-short";
import { motion } from "framer-motion";
import { ReactComponent as Shape } from "../../../assets/vector/shape.svg";
import { easeOutCirc } from "../../../theme/easings";

const StyledWrapper = styled.div`
  display: flex;
  padding-top: 170px;
  max-width: 1170px;
  width: 90%;
  min-height: 100vh;
  margin: auto;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    justify-content: center;
    padding-top: 140px;
  }
`;

const StyledLeftWrapper = styled.div`
  max-width: 544px;
  position: relative;
`;

const StyledTitle = styled.h1`
  font-family: "Gilroy", sans-serif;
  font-weight: 600;
  font-size: 6.5rem;
  margin: 0 0 30px;

  @media (max-width: 1024px) {
    text-align: center;
  }

  @media (max-width: 620px) {
    font-size: 4rem;
  }
`;

const StyledDescription = styled.p`
  max-width: 500px;
  color: ${({ theme }) => theme.washStrong};
  margin: 0 0 35px;
  line-height: 1.5;

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

const StyledImageWrapper = styled(motion.div)`
  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }
`;

const StyledImage = styled(GatsbyImage)`
  max-width: 470px;
  border-radius: 30px;
  margin-left: 70px;

  @media (max-width: 1024px) {
    width: 100%;
    height: 70vw;
    margin-left: 0;
    max-height: 395px;
  }
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

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const StyledShape = styled(Shape)`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 1024px) {
    display: none;
  }
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
      <StyledImageWrapper
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: easeOutCirc }}
      >
        <StyledImage
          image={getImage(file.childImageSharp.gatsbyImageData)}
          alt=""
        />
      </StyledImageWrapper>
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
