import React from "react";
import styled from "styled-components";
import SectionHeader from "../../atoms/SectionHeader/SectionHeader";
import { ARTICLES } from "./data";
import BlogCard from "../../atoms/BlogCard/BlogCard";

const StyledWrapper = styled.section`
  width: 90%;
  max-width: 1170px;
  margin: 100px auto 0;
`;

const StyledSectionHeader = styled(SectionHeader)`
  max-width: 450px;
  margin: 0 auto 40px;
`;

const StyledInnerWrapper = styled.div`
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  gap: 30px;

  @media (max-width: 1260px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
  }
`;

const StyledBlogCard = styled(BlogCard)`
  @media (max-width: 1260px) {
    margin-bottom: 40px;
  }
`;

const Blog = () => (
  <StyledWrapper>
    <StyledSectionHeader title="Latest new feeds" subtitle="Blog post" center />
    <StyledInnerWrapper>
      {ARTICLES().map(
        ({ title, category, dateAndAuthor, image, link, content }) => (
          <StyledBlogCard
            image={image}
            title={title}
            category={category}
            dateAndAuthor={dateAndAuthor}
            content={content}
            link={link}
          />
        )
      )}
    </StyledInnerWrapper>
  </StyledWrapper>
);

export default Blog;
