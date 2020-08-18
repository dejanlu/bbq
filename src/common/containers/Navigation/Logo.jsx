import React from "react";
import { Link } from "react-router-dom";

import BBQ from "../../../assets/images/logo.svg";

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <img src={BBQ} alt="BBQ" className="logo__image" />
    </Link>
  );
};

export default Logo;
