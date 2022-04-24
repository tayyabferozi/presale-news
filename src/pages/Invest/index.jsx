import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Hero from "./Hero";
import Completed from "./Completed";
import MailList from "./MailList";

const Invest = () => {
  return (
    <MainLayout>
      <Hero />
      <Completed />
      <MailList />
    </MainLayout>
  );
};

export default Invest;
