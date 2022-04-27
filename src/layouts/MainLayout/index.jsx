import React from "react";
import Footer from "../../pages/Invest/Footer";
import Header from "./Header";
import MailList from "../../partials/MailList";

const MainLayout = ({ navGradient, navClassName, bodyClassName, children }) => {
  return (
    <div id="main-layout">
      <div className="gradient one"></div>
      <div className="gradient two"></div>
      <div className="gradient three"></div>
      <div className="gradient four"></div>
      <div className="gradient five"></div>
      <div className="gradient six"></div>
      <div className="gradient seven"></div>
      <Header navGradient navClassName={navClassName} />

      <div id="main-body" className={bodyClassName}>
        {children}
      </div>

      <MailList />
      <Footer />
    </div>
  );
};

export default MainLayout;
