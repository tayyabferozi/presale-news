import React from "react";
import GridContainer from "../../../components/GridContainer";

import Section from "../../../components/Section";

const About = () => {
  return (
    <Section id="about">
      <div className="sub-container">
        <h1 className="xlg">About Us</h1>

        <div className="mt-40">
          <p className="mb-30">
            Presale News Investments was born in 2021 with the goal of pushing
            the best blockchain projects to the next level.
          </p>

          <p className="mb-30">
            After successfully managing an important private fund for several
            years, making all kinds of physical and financial investments, the
            executive team decides to take a step forward to create in parallel
            a new specialized Venture Capital structure to support the projects
            with the greatest potential in the blockchain ecosystem.
          </p>

          <img
            className="d-block mt-100 mb-40 w-100"
            src="/assets/vectors/about-us.svg"
            alt="about-us"
            title="About us"
          />

          <p className="mb-30">
            Presale News is formed by a multidisciplinary team with profiles as
            varied as economists, financiers, analysts, engineers, programmers,
            designers, editors, marketing professionals or experts in law and
            taxation.
          </p>

          <p className="mb-30">
            We have employees and collaborators all over the world, but our core
            is located in Andorra, Spain, Portugal and Luxembourg.
          </p>
        </div>
      </div>

      <div className="goals">
        <GridContainer rowClassName="justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="goal-item">
              <img
                className="bg"
                src="/assets/imgs/bg-about-mission.png"
                alt="mission"
              />
              <div className="text">
                <img
                  className="top-img"
                  src="/assets/vectors/about-mission-vector.svg"
                  alt="about-mission"
                />
                <h3>Mission</h3>
                <p className="mt-20">
                  Research, study and analyze projects and the market. Filter
                  and efficiently detect the best ideas and new projects to
                  transform them into real products that are useful and have an
                  impact on the world.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="goal-item">
              <img
                className="bg"
                src="/assets/imgs/bg-about-vision.png"
                alt="vision"
              />
              <div className="text">
                <img
                  className="top-img"
                  src="/assets/vectors/about-vision-vector.svg"
                  alt="about-vision"
                />
                <h3>Vision</h3>
                <p className="mt-20">
                  We support innovation and technology to help make the world a
                  better place.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="goal-item">
              <img
                className="bg"
                src="/assets/imgs/bg-about-purpose.png"
                alt="purpose"
              />
              <div className="text">
                <img
                  className="top-img"
                  src="/assets/vectors/about-purpose-vector.svg"
                  alt="about-purpose"
                />
                <h3>Purpose</h3>
                <p className="mt-20">
                  We aim to open up a world of new opportunities to all
                  investors, create a community with great impact and become a
                  global benchmark.
                </p>
              </div>
            </div>
          </div>
        </GridContainer>
      </div>
    </Section>
  );
};

export default About;
