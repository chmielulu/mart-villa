import React from "react";
import styled from "styled-components";
import businessOutline from "@iconify/icons-ion/business-outline";
import constructionWorkerOutline from "@iconify/icons-healthicons/construction-worker-outline";
import ibmSecurity from "@iconify/icons-carbon/ibm-security";
import homeIcon from "@iconify/icons-codicon/home";
import deciduousTree from "@iconify/icons-emojione-monotone/deciduous-tree";
import cameraDome20Regular from "@iconify/icons-fluent/camera-dome-20-regular";
import IconBlock from "../../atoms/IconBlock/IconBlock";
import SectionHeader from "../../atoms/SectionHeader/SectionHeader";

const StyledWrapper = styled.section`
  margin: 120px auto 0;
  width: 90%;
  max-width: 1120px;
`;

const StyledSectionHeader = styled(SectionHeader)`
  max-width: 816px;
  margin: 0 auto 50px;
`;

const StyledInnerWrapper = styled.div`
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(3, 1fr);
  gap: 30px;
  justify-content: center;

  @media (max-width: 1260px) {
    display: flex;
    flex-wrap: wrap;
    gap: unset;
  }
`;

const StyledIconBlock = styled(IconBlock)`
  margin: 15px;

  @media (max-width: 888px) {
    margin-bottom: 10px;

    :last-of-type {
      margin-bottom: 0;
    }
  }
`;

const Services = () => (
  <StyledWrapper>
    <StyledSectionHeader
      title="Specialists services provided in this
apartment building"
      subtitle="Services"
      center
    />

    <StyledInnerWrapper>
      <StyledIconBlock icon={businessOutline} title="Luxury Apartment">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore.
      </StyledIconBlock>

      <StyledIconBlock
        icon={constructionWorkerOutline}
        title="Architecture Design"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore.
      </StyledIconBlock>

      <StyledIconBlock icon={ibmSecurity} title="Extra Security">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore.
      </StyledIconBlock>

      <StyledIconBlock icon={homeIcon} title="Home Remodeling">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore.
      </StyledIconBlock>

      <StyledIconBlock icon={deciduousTree} title="Great location">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore.
      </StyledIconBlock>

      <StyledIconBlock icon={cameraDome20Regular} title="Monitoring">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore.
      </StyledIconBlock>
    </StyledInnerWrapper>
  </StyledWrapper>
);

export default Services;
