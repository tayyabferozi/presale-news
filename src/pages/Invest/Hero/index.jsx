import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTimer } from "react-timer-hook";

import Section from "../../../components/Section";

const slidesData = [
  {
    title: "Invest into Cryptore.",
    subTitle:
      "We promote the growth and expansion of cutting-edge startups in the blockchain ecosystem, supporting them from their beginnings.",
  },
  {
    title: "Invest into Cryptore.",
    subTitle:
      "We promote the growth and expansion of cutting-edge startups in the blockchain ecosystem, supporting them from their beginnings.",
  },
  {
    title: "Invest into Cryptore.",
    subTitle:
      "We promote the growth and expansion of cutting-edge startups in the blockchain ecosystem, supporting them from their beginnings.",
  },
];

const Hero = () => {
  const { seconds, minutes, hours } = useTimer({
    expiryTimestamp: new Date(2022, 12, 12),
  });

  return (
    <Section id="invest-hero">
      <Swiper navigation modules={[Navigation]} spaceBetween={30}>
        {slidesData.map((el, idx) => {
          const { title, subTitle } = el;

          return (
            <SwiperSlide key={"slide" + idx}>
              <div className="hero-wrap">
                <div className="main-left">
                  <div>
                    <h1>{title}</h1>
                    <div className="fs-20 text-light-2 mt-30">{subTitle}</div>
                  </div>
                  <div className="social-links">
                    <a className="blue" href="#0">
                      <img
                        src="/assets/vectors/social-telegram.svg"
                        alt="telegram"
                      />
                    </a>
                    <a className="pink" href="#0">
                      <img
                        src="/assets/vectors/social-twitter.svg"
                        alt="twitter"
                      />
                    </a>
                    <a className="red" href="#0">
                      <img
                        src="/assets/vectors/social-reddit.svg"
                        alt="reddit"
                      />
                    </a>
                    <a className="blue" href="#0">
                      <img src="/assets/vectors/social-web.svg" alt="web" />
                    </a>
                    <a className="pink" href="#0">
                      <img
                        src="/assets/vectors/social-youtube.svg"
                        alt="youtube"
                      />
                    </a>
                  </div>
                </div>
                <div className="main-right">
                  <div className="bg">
                    <div className="main-content">
                      <h2 className="mb-50">INVEST INTO CRYPTO</h2>
                      <h1 className="lg">START IN</h1>

                      <div className="timer d-flex justify-content-between gap-30 gap-575-10 mt-30">
                        <h1 className="timer-item text-glowy-pink text-gradient-pink">
                          {hours}H
                        </h1>
                        <h1 className="timer-item text-glowy-pink text-gradient-pink">
                          {minutes}MIN
                        </h1>
                        <h1 className="timer-item text-glowy-pink text-gradient-pink">
                          {seconds}SEC
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
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Section>
  );
};

export default Hero;
