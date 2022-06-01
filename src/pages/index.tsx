import React from "react";
import MainTemplate from "../templates/MainTemplate";
import Hero from "../components/molecules/Hero/Hero";
import AboutUs from "../components/molecules/AboutUs/AboutUs";
import Services from "../components/molecules/Services/Services";
import Statistics from "../components/molecules/Statistics/Statistics";
import Reviews from "../components/molecules/Reviews/Reviews";
import Brands from "../components/molecules/Brands/Brands";
import Blog from "../components/molecules/Blog/Blog";
import { TITLE } from "../config";

const Index = () => (
  <MainTemplate renderHero={Hero} title={TITLE}>
    <AboutUs />
    <Services />
    <Statistics />
    <Reviews />
    <Brands />
    <Blog />
  </MainTemplate>
);

export default Index;
