import React from "react";

import Section from "../../../components/Section";

const Community = () => {
  return (
    <Section id="community">
      <div className="sub-container">
        <h1 className="xlg text-glowy-white">The Power of community</h1>
        <p className="mt-40">
          We are fully aware of the value of community. Presale News leverages
          its full potential by connecting investors with top-tier blockchain
          projects.
        </p>

        <p className="my-20">
          In this way, our community can invest in private rounds that would
          otherwise be inaccessible and projects can benefit from a powerful
          marketing tool that will help promote them in order to achieve a
          successful future together.
        </p>

        <p>
          Building a healthy, tight-knit and constantly growing community is a
          priority.
        </p>

        <img
          className="w-100 mt-50"
          src="/assets/imgs/community.png"
          alt="community"
        />
      </div>
    </Section>
  );
};

export default Community;
