import React from "react";
import clsx from "clsx";

const Section = ({ children, className, ...rest }) => {
  return (
    <div className={clsx("section", className)} {...rest}>
      <div className="page-container">{children}</div>
    </div>
  );
};

export default Section;
