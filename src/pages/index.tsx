import React from "react";
import MainTemplate from "../templates/MainTemplate";
import styled from "styled-components";
import Hero from "../components/molecules/Hero";

const StyledWrapper = styled.div`
  height: 400vh;
`;

const Index = () => (
  <MainTemplate renderHero={Hero}>
    <StyledWrapper></StyledWrapper>
  </MainTemplate>
);

export default Index;
