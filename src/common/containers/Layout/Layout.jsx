import React from "react";

import "../../../styles/main.scss";

const Layout = () => {
  return (
    <div className="grid">
      <div className="wrapper wrapper--left">
        <section className="container container--left">left</section>
      </div>
      <div className="wrapper wrapper--right">
        <section className="container container--right">right</section>
      </div>
    </div>
  );
};

export default Layout;
