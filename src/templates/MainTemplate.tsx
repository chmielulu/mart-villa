import React, { FC } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../theme/GlobalStyles";
import { theme } from "../theme/theme";
import Navigation from "../components/molecules/Navigation/Navigation";
import { Helmet } from "react-helmet";
import Footer from "../components/molecules/Footer/Footer";

const MainTemplate: FC<Props> = ({ children, renderHero: Hero, title }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <GlobalStyles />
        <header>
          <Navigation />
          {Hero && <Hero />}
        </header>

        <main style={{ paddingBottom: "50px" }}>{children}</main>

        <Footer />
      </>
    </ThemeProvider>
  );
};

interface Props {
  renderHero?: FC;
  title?: string;
}
export default MainTemplate;
