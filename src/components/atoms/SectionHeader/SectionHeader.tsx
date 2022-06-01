import React, { FC } from "react";
import styled, { css } from "styled-components";
import bg from "../../../assets/vector/button-bg.svg";

const StyledWrapper = styled.header<{ $center?: true }>`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;

  ${({ $center }) =>
    $center &&
    css`
      align-items: center;
    `}
`;

const StyledHeadline = styled.h2<{ $center?: true }>`
  font-size: 5rem;
  font-family: "Gilroy", sans-serif;
  margin: 20px 0 0;
  line-height: 60px;

  ${({ $center }) =>
    $center &&
    css`
      text-align: center;
    `}

  @media (max-width: 620px) {
    font-size: 4rem;
  }
`;

const StyledSubHeadline = styled.h3`
  margin: 0;
  width: fit-content;
  position: relative;
  color: ${({ theme }) => theme.primary};
  text-transform: uppercase;
  padding: 8px 18px;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 1px;

  ::before {
    position: absolute;
    left: 0;
    top: 0;
    content: "";
    width: 100%;
    height: 100%;
    opacity: 0.1;
    z-index: -1;
    background: url(${bg});
  }
`;

const SectionHeader: FC<Props> = ({ title, subtitle, center, className }) => (
  <StyledWrapper $center={center} className={className}>
    <StyledHeadline $center={center}>{title}</StyledHeadline>
    <StyledSubHeadline>{subtitle}</StyledSubHeadline>
  </StyledWrapper>
);

interface Props {
  title: string;
  subtitle: string;
  center?: true;
  className?: string;
}

export default SectionHeader;
