import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.section`
  margin-top: 120px;
  background: ${({ theme }) => theme.secondary};
  width: 100%;
  height: 290px;

  @media (max-width: 1024px) {
    height: unset;
    padding: 60px 0;
  }
`;

const StyledInnerWrapper = styled.div`
  max-width: 1180px;
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.background};

  span:first-of-type {
    font-size: 6rem;
    text-transform: uppercase;
    font-family: Gilroy, sans-serif;
    margin-bottom: 10px;
  }

  span:last-of-type {
    font-weight: 700;
    font-size: 2rem;
  }

  @media (max-width: 1024px) {
    margin-bottom: 40px;

    :last-of-type {
      margin-bottom: 0;
    }
  }
`;

const Statistics = () => (
  <StyledWrapper>
    <StyledInnerWrapper>
      <StyledItem>
        <span>12K+</span>
        <span>Renovation Project</span>
      </StyledItem>

      <StyledItem>
        <span>100+</span>
        <span>Team Members</span>
      </StyledItem>

      <StyledItem>
        <span>15K+</span>
        <span>Project Completed</span>
      </StyledItem>

      <StyledItem>
        <span>100%</span>
        <span>Satisfied Client</span>
      </StyledItem>
    </StyledInnerWrapper>
  </StyledWrapper>
);

export default Statistics;
