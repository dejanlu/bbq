import React from "react";
import { Link } from "react-router-dom";

const Desktop = () => {
  return (
    <>
      <Link className="navigation__link navigation__link--desktop" to="/menu">
        Menu
      </Link>
      <Link
        className="navigation__link navigation__link--desktop"
        to="/kontakt"
      >
        Kontakt
      </Link>
    </>
  );
};

export default Desktop;
