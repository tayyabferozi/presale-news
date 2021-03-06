import React from "react";

import MainLayout from "../../layouts/MainLayout";
import Hero from "./Hero";
import DAOModel from "./DAOModel";
import About from "./About";
import Community from "./Community";
import Portfolio from "./Portfolio";

const Landing = () => {
  return (
    <MainLayout bodyClassName="pt-sm" navGradient>
      <Hero />
      <Community />
      <DAOModel />
      <About />
      <Portfolio />
    </MainLayout>
  );
};

export default Landing;
