import React from "react";

import GridContainer from "../../../components/GridContainer";
import Section from "../../../components/Section";

const Hero = () => {
  return (
    <Section id="landing-hero">
      <GridContainer>
        <div className="col-lg-6">
          <h1>
            Commitment to <br /> technology &amp; innovation. We invest in the
            future.
          </h1>
          <p className="fs-20 text-light-2 mt-30">
            We promote the growth and expansion of cutting-edge startups in the
            blockchain ecosystem, supporting them from their beginnings.
          </p>
        </div>
      </GridContainer>
    </Section>
  );
};

export default Hero;
