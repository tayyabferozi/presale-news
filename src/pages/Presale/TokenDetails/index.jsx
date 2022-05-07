import React from "react";
import GridContainer from "../../../components/GridContainer";

import Section from "../../../components/Section";

const TokenDetails = () => {
  return (
    <Section id="token-details">
      <div className="details-head">
        <div className="head-img">
          <img src="/assets/vectors/logo-outerking-2.svg" alt="outer-king" />
        </div>
        <div className="head-text gap-30">
          <h3 className="mb-10">OUTERKING</h3>
          <div className="categories">
            <div className="category">
              <div className="text">Category 1</div>
            </div>
            <div className="category">
              <div className="text">Category 2</div>
            </div>
          </div>
        </div>
      </div>
      <div className="details-body mt-5">
        <GridContainer rowClassName="gy-5">
          <div className="col-lg-6">
            <div className="box box-1">
              <p className=" mb-3">
                We promote the growth and expansion of cutting-edge startups in
                the blockchain ecosystem, supporting them from their beginnings.
              </p>
              <p className=" mb-3">
                We promote the growth and expansion of cutting-edge startups in
                the blockchain ecosystem, supporting them from their beginnings.
              </p>
              <p className="">
                We promote the growth and expansion of cutting-edge startups in
                the blockchain ecosystem, supporting them from their beginnings.
              </p>

              <div className="social-links mt-5">
                <a className="blue" href="#0">
                  <img
                    src="/assets/vectors/social-telegram.svg"
                    alt="telegram"
                  />
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
          </div>
          <div className="col-lg-6">
            <div className="text-glowy-pink text-gradient-pink">
              Contributions will close on DATE
            </div>
          </div>
          <div className="col-xl-6">
            <div className="box box-3">
              <img
                className="bg"
                src="/assets/imgs/bg-token-info-box.png"
                alt="bg"
              />
              <h3>Token Information</h3>

              <div className="row gy-3 mt-4">
                <div className="col-lg-8">
                  <strong>Ticker :</strong>
                </div>
                <div className="col-lg-4">GQ</div>

                <div className="col-lg-8">
                  <strong>Blockchain Network :</strong>
                </div>
                <div className="col-lg-4">2,005,000</div>

                <div className="col-lg-8">
                  <strong>Initial Token Circulation : </strong>
                </div>
                <div className="col-lg-4">BSC</div>

                <div className="col-lg-8">
                  <strong>Initial Market Cap :</strong>
                </div>
                <div className="col-lg-4">9,000,000 $</div>

                <div className="col-lg-8">
                  <strong>Total Supply :</strong>
                </div>
                <div className="col-lg-4">10,000,000,000</div>

                <div className="col-lg-8">
                  <strong>Contract Address :</strong>
                </div>
                <div className="col-lg-4">0х…</div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="box box-4">
              <img
                className="bg"
                src="/assets/imgs/bg-token-info-box.png"
                alt="bg"
              />
              <h3>Conditions</h3>

              <div className="row gy-3 mt-4">
                <div className="col-lg-6">
                  <strong>Token price :</strong>
                </div>
                <div className="col-lg-6">GQ</div>

                <div className="col-lg-6">
                  <strong>$0.012</strong>
                </div>
                <div className="col-lg-6">12.00%</div>

                <div className="col-lg-6">
                  <strong>Vesting :</strong>
                </div>
                <div className="col-lg-6">
                  0% THE | CLIFF: 2 Months | VESTING: 24 Months
                </div>

                <div className="col-lg-6">
                  <strong>Min. Contribution :</strong>
                </div>
                <div className="col-lg-6">$100</div>

                <div className="col-lg-6">
                  <strong>Max. Contribution :</strong>
                </div>
                <div className="col-lg-6">$10,000</div>

                <div className="col-lg-6">
                  <strong>Start date :</strong>
                </div>
                <div className="col-lg-6">...</div>

                <div className="col-lg-6">
                  <strong>End date :</strong>
                </div>
                <div className="col-lg-6">...</div>
              </div>
            </div>
          </div>
        </GridContainer>

        <div className="project-info">
          <h1 className="xlg">Project Information</h1>

          <div className="info-head">
            <div className="tabs">
              <div className="tab">Overview</div>
              <div className="tab">Team</div>
              <div className="tab">Partners</div>
              <div className="tab">Roadmap</div>
              <div className="tab">Tokenmoics</div>
            </div>

            <div className="btn btn-gradient">Whitepaper</div>
          </div>

          <div className="info-body">
            <h3>WHAT IS GANIUM?</h3>
            <p className="mt-10">
              Gamium is a web 3 and metaverse technology company whose mission
              is to create the first metaverse that interconnects all of them,
              making avatars and assetsmulti-metaverse compatible.
            </p>

            <h3 className="mt-50">Gamium is building:</h3>

            <div className="d-flex gap-1 mt-10">
              <strong className="text-white flex-shrink-0 mt-1">
                The Avatar :{" "}
              </strong>
              <p>
                A digital identity that can be used across all web 3 and
                metaverse applications, allowing unique interoperability and
                usabillity.
              </p>
            </div>

            <p className="mt-20">
              <strong className="text-white mt-1">
                The Decentralized Social Metaverse :{" "}
              </strong>
              A virtual world to allow everyone build whatever they want through
              the Gamium SDK.
            </p>

            <h3 className="mt-50">The Avatar</h3>
            <p className="mt-10">
              The Avatar is a digital identity represented by a soul mate NOT
              taht brings all the digital fingerprints of a user in a uinfied
              entity. These digital fingerprints include 3D anatomies, and
              on-chain and off-chain data.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TokenDetails;
