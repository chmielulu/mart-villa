import React, { FC } from "react";
import styled, { css } from "styled-components";
import { ReactComponent as ButtonBg } from "../../../assets/vector/button-bg.svg";
import { ReactComponent as SecondaryButtonBg } from "../../../assets/vector/button-secondary-bg.svg";
import { Icon } from "@iconify/react";

const StyledButton = styled.button`
  background: transparent;
  border: 0;
  position: relative;
  padding: 18px 37px;
  color: ${({ theme }) => theme.background};
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1.5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  :active {
    transform: scale(0.95);
  }
`;

const bgStyles = css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: filter 0.2s ease-in-out;

  ${StyledButton}:hover & {
    filter: brightness(0.9);
  }
`;

const StyledButtonBg = styled(ButtonBg)`
  ${bgStyles};
`;

const StyledSecondaryButtonBg = styled(SecondaryButtonBg)`
  ${bgStyles};
`;

const StyledIcon = styled(Icon)`
  font-size: 3rem;
`;

const Button: FC<Props> = ({ children, className, secondary, icon }) => (
  <StyledButton className={className}>
    {secondary ? <StyledSecondaryButtonBg /> : <StyledButtonBg />}
    {icon ? <StyledIcon icon={icon} /> : children}
  </StyledButton>
);

interface Props {
  className?: string;
  secondary?: boolean;
  icon?: any;
}

export default Button;
