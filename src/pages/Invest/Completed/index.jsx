import React from "react";
import clsx from "clsx";

import GridContainer from "../../../components/GridContainer";
import Section from "../../../components/Section";

const Completed = () => {
  return (
    <Section id="completed">
      <h2 className="mb-40 text-glowy-white">Completed</h2>

      <GridContainer>
        {[
          {
            pink: true,
            icon: "/assets/vectors/logo-karmaverse.svg",
            name: "Karmaverse",
            tag: "KNOT",
            subTitle: "Rendimiento desde nuestro precio al ATH",
            power: "",
            price1: "0,0025",
            price2: "0,005",
            price3: "",
            percent: "100",
            total: "250,000",
            contrato: "TBA",
            coin: "Polygon",
            coinIcon: "/assets/vectors/logo-polygon.svg",
          },
          {
            blue: true,
            icon: "/assets/vectors/logo-outerking.svg",
            name: "OuterKing",
            tag: "GQ",
            subTitle: "Rendimiento desde nuestro precio al ATH",
            power: "26X",
            price1: "0,0025",
            price2: "0,005",
            price3: "",
            percent: "100",
            total: "250,000",
            contrato: "TBA",
            coin: "BSC",
            coinIcon: "/assets/vectors/logo-bsc.svg",
          },
          {
            blue: true,
            icon: "/assets/vectors/logo-karmaverse.svg",
            name: "Karmaverse",
            tag: "KNOT",
            subTitle: "Rendimiento desde nuestro precio al ATH",
            power: "",
            price1: "0,0025",
            price2: "0,005",
            price3: "",
            percent: "100",
            total: "250,000",
            contrato: "TBA",
            coin: "Polygon",
            coinIcon: "/assets/vectors/logo-polygon.svg",
          },
          {
            pink: true,
            icon: "/assets/vectors/logo-outerking-2.svg",
            name: "OuterKing",
            tag: "GQ",
            subTitle: "Rendimiento desde nuestro precio al ATH",
            power: "26X",
            price1: "0,0025",
            price2: "0,005",
            price3: "",
            percent: "100",
            total: "250,000",
            contrato: "TBA",
            coin: "BSC",
            coinIcon: "/assets/vectors/logo-bsc.svg",
          },
        ].map((el, idx) => {
          const {
            pink,
            blue,
            icon,
            name,
            tag,
            subTitle,
            power,
            price1,
            price2,
            price3,
            percent,
            total,
            contrato,
            coin,
            coinIcon,
          } = el;

          return (
            <div className="col-xl-6" key={"completed-item-" + idx}>
              <div className={clsx({ pink, blue }, "completed-item-wrap")}>
                <div className="completed-item-main">
                  <div className="item-head">
                    <div className="head-img">
                      <img src={icon} alt={name} />
                    </div>
                    <div className="head-text gap-30">
                      <div className="text-left">
                        <h3 className="mb-10">{name}</h3>{" "}
                        <small className="fs-20 fw-300 text-light-1">
                          {tag}
                        </small>
                        <div className="fs-20 text-light-1">{subTitle}</div>
                      </div>
                      <h1 className="text-right">{power || "N/A"}</h1>
                    </div>
                  </div>

                  <div className="item-body text-center mt-30">
                    <div>
                      <div className="title">Nuestro precio</div>
                      <div className="fs-20 mt-10">{price1} $</div>
                    </div>
                    <div>
                      <div className="title">Precio de IDO</div>
                      <div className="fs-20 mt-10">{price2} $</div>
                    </div>
                    <div>
                      <div className="title">Precio Actual</div>
                      <div className="fs-20 mt-10">
                        {price3 ? price3 + " $" : "N/A"}{" "}
                      </div>
                    </div>
                  </div>

                  <div className="item-foot mt-30 gap-20">
                    <div className="item-foot-left">
                      <div className="d-flex justify-content-between">
                        <div className="text-light-1">{percent}%</div>
                        <div className="text-light-1">
                          {total}/{total}
                        </div>
                      </div>
                      <div className={clsx({ blue }, "progress-wrap mt-10")}>
                        <div className="progress"></div>
                        <div className="progress-text">FINISHED</div>
                      </div>
                      <div className="mt-20 text-light-1">
                        Contrato: {contrato}
                      </div>
                    </div>

                    <div className="item-foot-right">
                      <div className="d-flex align-items-center">
                        <div className="coin-img">
                          <img src={coinIcon} alt={coin} />
                        </div>
                        <div>{coin}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </GridContainer>

      <div className="d-flex justify-content-center mt-50">
        <button className="btn btn-glow lg">
          <div className="btn-text">Load More......</div>
        </button>
      </div>
    </Section>
  );
};

export default Completed;
