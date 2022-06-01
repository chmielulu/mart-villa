import React, { FC } from "react";
import styled, { css } from "styled-components";
import { Icon } from "@iconify/react";
import { ReactComponent as IconBlockBg } from "../../../assets/vector/icon-block-bg.svg";
import { cssEaseOutExpo } from "../../../theme/easings";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 370px;
  height: 385px;
  justify-content: center;
  position: relative;
  padding: 25px;

  @media (max-width: 888px) {
    height: 325px;
  }
`;

const StyledIconBlockBg = styled(IconBlockBg)`
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  transition: filter 1s ${cssEaseOutExpo};

  ${StyledWrapper}:hover & {
    filter: drop-shadow(10px 25px 60px rgba(0, 0, 0, 0.06));
  }
`;

const StyledIconWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  background: rgba(255, 100, 0, 0.1);
  color: ${({ theme }) => theme.primary};
  transition: color 1s ${cssEaseOutExpo}, background 1s ${cssEaseOutExpo};

  ${StyledWrapper}:hover & {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.background};
  }
`;

const StyledHeadline = styled.h3`
  margin: 20px 0;
  text-align: center;
  font-size: 2.8rem;
  font-weight: 500;
  font-family: Gilroy, sans-serif;
`;

const StyledParagraph = styled.p`
  margin: 0;
  text-align: center;
  color: ${({ theme }) => theme.washMedium};
  line-height: 1.5;
`;

const IconBlock: FC<Props> = ({ icon, title, children, className }) => (
  <StyledWrapper className={className}>
    <StyledIconWrapper>
      <Icon icon={icon} />
    </StyledIconWrapper>
    <StyledHeadline>{title}</StyledHeadline>
    <StyledParagraph>{children}</StyledParagraph>
    <StyledIconBlockBg />
  </StyledWrapper>
);

interface Props {
  icon: any;
  title: string;
  className?: string;
}

export default IconBlock;
