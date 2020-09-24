import React from "react";

import Logo from "./Logo";
import Desktop from "./Desktop";
import UserIconContainer from "../../containers/UserIconContainer";

const Navigation = () => {
  return (
    <nav className="navigation">
      <Logo />
      <Desktop />
      <UserIconContainer />
    </nav>
  );
};

export default Navigation;
