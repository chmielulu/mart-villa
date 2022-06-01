import React from "react";
import styled from "styled-components";
import { StyledLink } from "../Footer";

const StyledWrapper = styled.div`
  background: ${({ theme }) => theme.secondaryBackground};
  padding: 50px 0;
`;

const StyledHeadline = styled.h2`
  text-align: center;
  font-family: Gilroy, sans-serif;
  margin: 0 0 30px;
`;

const StyledInnerWrapper = styled.div`
  max-width: 1170px;
  width: 90%;
  margin: auto;
  column-count: 4;

  @media (max-width: 1260px) {
    column-count: 3;
    max-width: 1100px;
  }

  @media (max-width: 860px) {
    column-count: 2;
  }

  @media (max-width: 620px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      margin-bottom: 10px;
    }
  }
`;

const FirstRow = () => (
  <StyledWrapper>
    <StyledHeadline>Zobacz nieruchomości w Polsce</StyledHeadline>
    <StyledInnerWrapper>
      {[
        "Warszawie",
        "Gdańsku",
        "Gdyni",
        "Sopocie",
        "Szczecinie",
        "Zielonej Górze",
        "Gorzowie Wielkopolskim",
        "Wrocławie",
        "Kołobrzegu",
        "Koszalinie",
        "Krakowie",
        "Rzeszowie",
        "Opolu",
        "Olstynie",
        "Białystoku",
        "Pile",
        "Toruniu",
        "Bydgoszczy",
      ].map((item) => (
        <StyledLink to={`/lorem-ipsum-dolor-sit-amet`} key={item}>
          Zobacz nieruchomości w {item}
        </StyledLink>
      ))}
    </StyledInnerWrapper>
  </StyledWrapper>
);

export default FirstRow;
