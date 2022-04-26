import React from "react";

import GridContainer from "../../../components/GridContainer";
import Section from "../../../components/Section";

const Hero = () => {
  return (
    <Section id="landing-hero" pageClassName="h-100">
      <GridContainer className="h-100" rowClassName="main-row">
        <div className="col-xl-6 col-lg-7 text text-lg-start text-center">
          <div>
            <h1 className="md">
              Commitment to <br /> technology &amp; innovation. We invest in the
              future.
            </h1>
            <p className="fs-20 text-light-2 my-30 pb-10">
              We promote the growth and expansion of cutting-edge startups in
              the blockchain ecosystem, supporting them from their beginnings.
            </p>

            <div className="btn btn-gradient-2 md">
              <div className="btn-text">Connect Wallet</div>
            </div>
          </div>
        </div>
      </GridContainer>
    </Section>
  );
};

export default Hero;
