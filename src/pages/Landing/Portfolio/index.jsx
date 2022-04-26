import React from "react";

import Section from "../../../components/Section";
import GridContainer from "../../../components/GridContainer";

const portofolioData = [
  {
    img: "/assets/imgs/portfolio-1.png",
    name: "Seascape",
  },
  {
    img: "/assets/imgs/portfolio-2.png",
    name: "PolkaPet World",
  },
  {
    img: "/assets/imgs/portfolio-3.png",
    name: "Anyswap",
  },
  {
    img: "/assets/imgs/portfolio-4.png",
    name: "Seascape",
  },
  {
    img: "/assets/imgs/portfolio-5.png",
    name: "PolkaPet World",
  },
  {
    img: "/assets/imgs/portfolio-6.png",
    name: "Anyswap",
  },
  {
    img: "/assets/imgs/portfolio-7.png",
    name: "Seascape",
  },
  {
    img: "/assets/imgs/portfolio-8.png",
    name: "PolkaPet World",
  },
  {
    img: "/assets/imgs/portfolio-9.png",
    name: "Anyswap",
  },
];

const Portfolio = () => {
  return (
    <Section id="portoflio">
      <h1 className="xlg text-glowy-white text-center">Portfolio</h1>

      <GridContainer rowClassName="main-row mt-40 justify-content-center">
        {portofolioData.map((el, idx) => {
          const { img, name } = el;

          return (
            <div className="col-lg-4 col-md-6" key={"portfolio-item" + idx}>
              <div className="portfolio-item">
                <img src={img} alt={name} />
                <h3>{name}</h3>
              </div>
            </div>
          );
        })}
      </GridContainer>
    </Section>
  );
};

export default Portfolio;
