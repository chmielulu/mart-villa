import React, { FC } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { checkIcon } from "../../../../assets/icons/check.icon";

const StyledWrapper = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-weight: 700;

  :last-of-type {
    margin-bottom: 0;
  }
`;

const StyledIconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 100, 0, 0.1);
  color: ${({ theme }) => theme.primary};
  margin-right: 14px;
  font-size: 1.2rem;
`;

const StyledItem: FC = ({ children }) => (
  <StyledWrapper>
    <StyledIconWrapper>
      <Icon icon={checkIcon} />
    </StyledIconWrapper>
    {children}
  </StyledWrapper>
);

export default StyledItem;
