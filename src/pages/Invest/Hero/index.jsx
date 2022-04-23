import React from "react";
import Section from "../../../components/Section";

const Hero = () => {
  return (
    <Section id="invest-hero">
      <div className="hero-wrap">
        <div className="main-left">
          <div>
            <h1>Invest into Cryptore.</h1>
            <div className="fs-20 text-light-2 mt-30">
              We promote the growth and expansion of cutting-edge startups in
              the blockchain ecosystem, supporting them from their beginnings.
            </div>
          </div>
          <div className="social">
            <a className="blue" href="#0">
              <img src="/assets/vectors/social-telegram.svg" alt="telegram" />
            </a>
            <a className="pink" href="#0">
              <img src="/assets/vectors/social-twitter.svg" alt="twitter" />
            </a>
            <a className="red" href="#0">
              <img src="/assets/vectors/social-reddit.svg" alt="reddit" />
            </a>
            <a className="blue" href="#0">
              <img src="/assets/vectors/social-web.svg" alt="web" />
            </a>
            <a className="pink" href="#0">
              <img src="/assets/vectors/social-youtube.svg" alt="youtube" />
            </a>
          </div>
        </div>
        <div className="main-right">
          <div className="bg">
            <div className="main-content">
              <h2 className="mb-50">INVEST INTO CRYPTO</h2>
              <h1>START IN</h1>

              <div className="timer d-flex justify-content-between gap-30 mt-30">
                <h1 className="timer-item text-glowy-pink text-gradient-pink">
                  2H
                </h1>
                <h1 className="timer-item text-glowy-pink text-gradient-pink">
                  35MIN
                </h1>
                <h1 className="timer-item text-glowy-pink text-gradient-pink">
                  24SEC
                </h1>
              </div>

              <div className="progress-wrap mt-40">
                <div className="progress"></div>
                <div className="progress-text">99%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
