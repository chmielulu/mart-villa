import React, { FC } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../theme/GlobalStyles";
import { theme } from "../theme/theme";
import Navigation from "../components/molecules/Navigation";
import { Helmet } from "react-helmet";
import { TITLE } from "../config";

const MainTemplate: FC<Props> = ({ children, renderHero: Hero }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
        <GlobalStyles />
        <header>
          <Navigation />
          {Hero && <Hero />}
        </header>

        {children}
      </>
    </ThemeProvider>
  );
};

interface Props {
  renderHero?: FC;
}
export default MainTemplate;
