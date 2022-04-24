import React from "react";

import GridContainer from "../../../components/GridContainer";
import Section from "../../../components/Section";

const MailList = () => {
  return (
    <Section id="mail-list">
      <GridContainer rowClassName="gy-5">
        <div className="col-lg-6">
          <img
            className="w-100 d-block mx-lg-0 mx-auto"
            style={{ maxWidth: 570 }}
            src="/assets/vectors/keep-in-touch-img.svg"
            alt="keep-in-touch"
          />
        </div>
        <div className="col-lg-6 d-flex align-items-center">
          <div className="">
            <h1 className="lg text-glowy-white">Keep in Touch</h1>
            <p className="mt-10">
              Subscribe to our newslatters and never miss on our Updates.
            </p>

            <div className="mail-list-main mt-30">
              <input type="email" placeholder="Your email here" />
              <button className="btn btn-gradient">
                <img
                  className="me-3"
                  src="/assets/vectors/btn-icon-mail.svg"
                  alt="mail"
                />
                <div className="btn-text fs-18">Subscribe</div>
              </button>
            </div>
            <div className="social-links mt-30">
              <a className="blue" href="#0">
                <img src="/assets/vectors/social-telegram.svg" alt="telegram" />
              </a>
              <a className="pink" href="#0">
                <img src="/assets/vectors/social-twitter.svg" alt="twitter" />
              </a>
              <a className="red" href="#0">
                <img src="/assets/vectors/social-reddit.svg" alt="reddit" />
              </a>
            </div>
          </div>
        </div>
      </GridContainer>
    </Section>
  );
};

export default MailList;
