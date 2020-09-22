import React from "react";

import "../../styles/main.scss";

const Layout = ({ children }) => {
  console.log(children);
  return <div className="grid">{children}</div>;
};

export default Layout;
