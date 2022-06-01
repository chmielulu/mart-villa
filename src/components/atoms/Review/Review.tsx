import React, { FC } from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { Icon } from "@iconify/react";
import { ReactComponent as Stars } from "../../../assets/vector/stars.svg";
import { quoteIcon } from "../../../assets/icons/quote.icon";
import { ReactComponent as ReviewBg } from "../../../assets/vector/review-bg.svg";
import { StaticQueryDocument, useStaticQuery } from "gatsby";
import {
  ChildImageSharp,
  SimpleFileQuery,
} from "../../../interfaces/childImageSharp";
import { getImage } from "../../../utils/getImage";

const StyledWrapper = styled.article`
  position: relative;
  width: 370px;
  height: 380px;
  display: flex;
  flex-direction: column-reverse;
  padding: 80px 25px 80px;

  @media (max-width: 430px) {
    width: 100%;
  }
`;

const StyledBg = styled(ReviewBg)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  filter: drop-shadow(10px 25px 60px rgba(0, 0, 0, 0.06));
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  margin-top: auto;
`;

const StyledAvatar = styled(GatsbyImage)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 15px;
`;

const StyledNameWrapper = styled.div``;

const StyledName = styled.h3`
  margin: 0 0 5px;
  font-family: Gilroy, sans-serif;
  font-weight: 500;
  font-size: 2rem;
`;

const StyledPosition = styled.h4`
  margin: 0;
  font-size: 1.3rem;
  font-weight: 400;
  color: ${({ theme }) => theme.washMedium};
`;

const StyledContent = styled.p`
  color: ${({ theme }) => theme.washMedium};
  line-height: 1.5;
  margin: 0;
`;

const StyledIcon = styled(Icon)`
  font-size: 4rem;
  color: ${({ theme }) => theme.washLight};
  position: absolute;
  left: 25px;
  top: 60px;
  z-index: -1;
`;

const StyledStars = styled(Stars)`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Review: FC<Props> = ({ name, position, content, avatar }) => {
  return (
    <StyledWrapper>
      <StyledBg />
      <StyledHeader>
        <StyledAvatar
          image={getImage(avatar.childImageSharp.gatsbyImageData)}
          alt={name}
        />
        <StyledNameWrapper>
          <StyledName>{name}</StyledName>
          <StyledPosition>{position}</StyledPosition>
        </StyledNameWrapper>
      </StyledHeader>
      <StyledContent>{content}</StyledContent>

      <StyledIcon icon={quoteIcon} />
      <StyledStars />
    </StyledWrapper>
  );
};

interface Props {
  name: string;
  position: string;
  content: string;
  avatar: ChildImageSharp;
}

export default Review;
