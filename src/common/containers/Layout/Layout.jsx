import React from "react";

import Navigation from "../Navigation/Navigation";

import "../../../styles/main.scss";

const Layout = (props) => {
  return (
    <div className="grid">
      <div className="wrapper wrapper--left">
        <section className="container container--left">
          <Navigation />
          left
        </section>
      </div>
      <div className="wrapper wrapper--right">
        <section className="container container--right">right</section>
      </div>
    </div>
  );
};

export default Layout;
