import React, { useState, useEffect } from "react";
import clsx from "clsx";

import Section from "../../../components/Section";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", null);
    };
  });
  return (
    <Section id="header" className={clsx({ scrolled })}>
      <img src="/assets/vectors/logo.svg" alt="logo" />
      <div className="nav">
        <a href="#0">Home</a>
        <a className="active" href="#0">
          Presales
        </a>
        <a href="#0">Calender</a>
        <a href="#0">Contact</a>
      </div>
      <div className="options">
        <button className="btn btn-transparent">
          <img src="/assets/vectors/btn-icon-globe.svg" alt="globe" />
          <div className="btn-text mx-2 px-1">English</div>
          <img src="/assets/vectors/btn-icon-arrow.svg" alt="btn-icon-arrow" />
        </button>
        <button className="btn btn-white">
          <div className="btn-text">Connect Wallet</div>
        </button>
      </div>
    </Section>
  );
};

export default Header;
