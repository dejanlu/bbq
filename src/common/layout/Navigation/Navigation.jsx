import React from "react";

import Logo from "./Logo";
import Desktop from "./Desktop";
import UserIcon from "./UserIcon";

const Navigation = () => {
  return (
    <nav className="navigation">
      <Logo />
      <Desktop />
      <UserIcon />
    </nav>
  );
};

export default Navigation;
