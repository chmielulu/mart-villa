import React, { FC } from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { Icon } from "@iconify/react";
import { ChildImageSharp } from "../../../interfaces/childImageSharp";
import { getImage } from "../../../utils/getImage";
import { doubleArrowIcon } from "../../../assets/icons/double-arrow.icon";
import blogCategoryBg from "../../../assets/vector/blog-category-bg.svg";
import { cssEaseOutExpo } from "../../../theme/easings";

const StyledWrapper = styled.article`
  display: flex;
  width: 570px;
  cursor: pointer;

  @media (max-width: 620px) {
    width: 100%;
    flex-direction: column;
  }
`;

const StyledImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 230px;
  border-radius: 20px;

  @media (max-width: 620px) {
    width: 100%;
  }
`;

const StyledImage = styled(GatsbyImage)`
  border-radius: 20px;
  width: 230px;
  height: 330px;
  transition: transform 1s ${cssEaseOutExpo};

  ${StyledWrapper}:hover & {
    transform: scale(1.2);
  }

  @media (max-width: 620px) {
    width: 100%;
  }
`;

const StyledCategory = styled.div`
  background: url(${blogCategoryBg}) no-repeat;
  background-size: contain;
  padding: 5px 10px;
  color: ${({ theme }) => theme.background};
  font-size: 1.3rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: absolute;
  right: 0;
  top: 50%;
  transform-origin: bottom right;
  transform: translate(0, -300%) rotate(-90deg);
`;

const StyledRightWrapper = styled.div`
  padding: 40px 30px 40px 60px;
  border: 1px solid ${({ theme }) => theme.washLight};
  border-left: 0;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-left: -20px;
  flex: 1;

  @media (max-width: 620px) {
    border: 0;
    border-bottom: 1px solid ${({ theme }) => theme.washLight};
  }
`;

const StyledTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  font-family: Gilroy, sans-serif;
  margin: 0 0 15px;

  ${StyledWrapper}:hover & {
    text-decoration: underline;
  }
`;

const StyledDateAndAuthor = styled.span`
  font-size: 11px;
  letter-spacing: 1px;
  margin-bottom: 12px;
  display: block;
`;

const StyledContent = styled.p`
  margin: 0 0 22px;
  color: ${({ theme }) => theme.washMedium};
  line-height: 1.5;
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-size: 1.4rem;

  svg {
    margin-left: 7px;
    font-size: 1rem;
  }

  ${StyledWrapper}:hover & {
    text-decoration: underline;
  }
`;
const BlogCard: FC<Props> = ({
  image,
  title,
  dateAndAuthor,
  content,
  category,
  link,
  className,
}) => (
  <StyledWrapper className={className}>
    <StyledImageWrapper>
      <StyledImage
        image={getImage(image.childImageSharp.gatsbyImageData)}
        alt={title}
      />
      <StyledCategory>{category}</StyledCategory>
    </StyledImageWrapper>

    <StyledRightWrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledDateAndAuthor>{dateAndAuthor}</StyledDateAndAuthor>
      <StyledContent>{content}</StyledContent>
      <StyledLink href={link}>
        Read more <Icon icon={doubleArrowIcon} />
      </StyledLink>
    </StyledRightWrapper>
  </StyledWrapper>
);

interface Props {
  image: ChildImageSharp;
  title: string;
  category: string;
  dateAndAuthor: string;
  content: string;
  link: string;
  className?: string;
}

export default BlogCard;
