import React from "react";
import MainTemplate from "../templates/MainTemplate";
import styled from "styled-components";
import GatsbyLink from "../components/atoms/GatsbyLink/GatsbyLink";
import { TITLE } from "../config";

const StyledHeadline = styled.h1`
  margin: 210px 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Gilroy, sans-serif;
  font-weight: 500;
  text-align: center;
  line-height: 1;

  span:first-of-type {
    font-size: 20rem;

    span {
      color: ${({ theme }) => theme.primary};
      font-size: 20rem;
    }
  }

  span:last-of-type {
    font-size: 7rem;
  }
`;

const StyledParagraph = styled.p`
  text-align: center;
  margin: 0 auto;
  line-height: 1.5;
  max-width: 420px;

  a {
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`;

const NotFoundPage = () => (
  <MainTemplate title={`Page not found | ${TITLE}`}>
    <StyledHeadline>
      <span>
        4<span>0</span>4
      </span>
      <span>Page Not Found!</span>
    </StyledHeadline>
    <StyledParagraph>
      We are really sorry but the page you requested is missing or back to go to{" "}
      <GatsbyLink to="/">Homepage</GatsbyLink>
    </StyledParagraph>
  </MainTemplate>
);

export default NotFoundPage;
