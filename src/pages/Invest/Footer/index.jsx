import React from "react";
import Section from "../../../components/Section";

const Footer = () => {
  return (
    <Section id="footer">
      <img
        src="/assets/vectors/bg-mail-list.svg"
        alt="gradient"
        className="gradient"
      />
      <img src="/assets/vectors/bg-footer.svg" alt="web" className="web" />
      <img
        src="/assets/imgs/spider.png"
        alt="spider"
        className="spider d-block mx-auto mb-30"
      />

      <div className="links">
        <a href="#0">Changlog</a>
        <a href="#0">Terms of Service</a>
        <a href="#0">Privacy Policy</a>
        <a href="#0">Support</a>
      </div>

      <hr className="mt-30 mb-20" />

      <div className="copyright text-center">
        Copyright @ 2022 Dream-Theme. All rights reserved.
      </div>
    </Section>
  );
};

export default Footer;
