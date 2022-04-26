import React from "react";
import clsx from "clsx";

const Section = ({ children, pageClassName, className, ...rest }) => {
  return (
    <div className={clsx("section", className)} {...rest}>
      <div className={clsx(pageClassName, "page-container")}>{children}</div>
    </div>
  );
};

export default Section;
