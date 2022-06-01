import React from "react";
import styled from "styled-components";
import GatsbyLink from "../../atoms/GatsbyLink/GatsbyLink";
import FirstRow from "./FirstRow/FirstRow";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Icon } from "@iconify/react";
import { getImage } from "../../../utils/getImage";
import { locationIcon } from "../../../assets/icons/location.icon";
import { SimpleFileQuery } from "../../../interfaces/childImageSharp";

const StyledWrapper = styled.footer`
  margin-top: 100px;

  @media (max-width: 1024px) {
    margin-top: 60px;
  }
`;

const StyledInnerWrapper = styled.div`
  max-width: 1170px;
  width: 90%;
  margin: auto;
  display: flex;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledLink = styled(GatsbyLink)`
  display: block;
  line-height: 2;
  color: ${({ theme }) => theme.washMedium};
  text-decoration: none;
  width: fit-content;

  :hover {
    text-decoration: underline;
  }
`;

const StyledSecondRow = styled.div`
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.background};
  padding: 60px 0 10px;
`;

const StyledFirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 370px;
  margin-right: 30px;

  @media (max-width: 1024px) {
    order: 4;
    align-items: center;
    margin-top: 40px;
    margin-right: 0;
  }
`;

const StyledLogo = styled(GatsbyImage)`
  width: 220px;
  height: auto;
  margin-bottom: 25px;
`;

const StyledDescription = styled.p`
  margin: 0;
  line-height: 1.5;
  color: ${({ theme }) => theme.washRegular};

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

const StyledSecondColumn = styled.div`
  margin-right: 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  :last-of-type {
    margin-right: 0;
  }

  @media (max-width: 1024px) {
    align-items: center;
    margin-right: 0;
    margin-bottom: 40px;

    :last-of-type {
      margin-bottom: 0;
    }
  }
`;

const StyledColumnHeadline = styled.h2`
  font-family: Gilroy, sans-serif;
  font-weight: 700;
  margin: 0 0 30px;
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledItem = styled.li`
  margin-bottom: 10px;

  a {
    color: ${({ theme }) => theme.washRegular};
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`;

const StyledContactItem = styled.div`
  color: ${({ theme }) => theme.washRegular};
  margin-bottom: 10px;

  b {
    color: ${({ theme }) => theme.background};
  }
`;

const StyledStreet = styled.div`
  margin-top: 5px;
  display: flex;
  line-height: 1.5;
  color: ${({ theme }) => theme.washRegular};

  svg {
    color: ${({ theme }) => theme.primary};
    margin-right: 10px;
    margin-top: 15px;
  }

  span {
    max-width: 220px;
  }
`;

const StyledBottomWrapper = styled.div`
  max-width: 1170px;
  width: 90%;
  display: flex;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin: 40px auto 0;
  padding: 20px 0;
  color: ${({ theme }) => theme.washRegular};
  align-items: center;

  a:first-of-type {
    margin-left: auto;
  }

  b {
    color: ${({ theme }) => theme.primary};
  }

  a {
    color: ${({ theme }) => theme.washRegular};
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 620px) {
    flex-direction: column;

    a:first-of-type {
      margin-left: 0;
      margin-top: 20px;
    }
  }
`;

const StyledSpacer = styled.span`
  width: 2px;
  height: 16px;
  background: ${({ theme }) => theme.washRegular};
  display: block;
  margin: 0 15px;

  @media (max-width: 620px) {
    width: 100%;
    height: 1px;
    margin: 5px 0;
  }
`;

const Footer = () => {
  const { file } = useStaticQuery<SimpleFileQuery>(query);

  return (
    <StyledWrapper>
      <FirstRow />
      <StyledSecondRow>
        <StyledInnerWrapper>
          <StyledFirstColumn>
            <StyledLogo
              image={getImage(file.childImageSharp.gatsbyImageData)}
              alt=""
            />

            <StyledDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </StyledDescription>
          </StyledFirstColumn>

          <StyledSecondColumn>
            <StyledColumnHeadline>Quick Link</StyledColumnHeadline>
            <StyledList>
              {[
                "About Us",
                "Services",
                "Team",
                "Blog",
                "FAQs",
                "Contact Us",
              ].map((item) => (
                <StyledItem key={item}>
                  <a href="#">{item}</a>
                </StyledItem>
              ))}
            </StyledList>
          </StyledSecondColumn>

          <StyledSecondColumn>
            <StyledColumnHeadline>Services</StyledColumnHeadline>
            <StyledList>
              {[
                "Order tracking",
                "Wish List",
                "My account",
                "Terms of Use",
                "Privacy Policy",
                "Contact Support",
              ].map((item) => (
                <StyledItem key={item}>
                  <GatsbyLink to="#">{item}</GatsbyLink>
                </StyledItem>
              ))}
            </StyledList>
          </StyledSecondColumn>

          <StyledSecondColumn>
            <StyledColumnHeadline>Contact info</StyledColumnHeadline>
            <StyledContactItem>
              <b>phone:</b> +1-202-555-0179
            </StyledContactItem>
            <StyledContactItem>
              <b>Fax:</b> 1 (888) 637-7262
            </StyledContactItem>
            <StyledContactItem>
              <b>Email:</b> info@styleixthemes.com
            </StyledContactItem>

            <StyledStreet>
              <Icon icon={locationIcon} />
              <span>
                1840 E Garvey Avenue Street West Covina, CA 91791, U.S.
              </span>
            </StyledStreet>
          </StyledSecondColumn>
        </StyledInnerWrapper>

        <StyledBottomWrapper>
          <span>
            2022 © All right reserved by <b>Martvilla</b>
          </span>
          <GatsbyLink to="/">Terms of Use</GatsbyLink>
          <StyledSpacer />
          <GatsbyLink to="/">Privacy Policy</GatsbyLink>
        </StyledBottomWrapper>
      </StyledSecondRow>
    </StyledWrapper>
  );
};

export const query = graphql`
  {
    file(name: { eq: "logo_white" }) {
      childImageSharp {
        gatsbyImageData(quality: 100, placeholder: DOMINANT_COLOR)
      }
    }
  }
`;

export default Footer;
