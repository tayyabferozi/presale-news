import React from "react";
import Footer from "../../pages/Invest/Footer";
import Header from "./Header";

const MainLayout = ({ children }) => {
  return (
    <div id="main-layout">
      <div className="gradient one"></div>
      <div className="gradient two"></div>
      <div className="gradient three"></div>
      <Header />

      <div id="main-body">{children}</div>

      <Footer />
    </div>
  );
};

export default MainLayout;
