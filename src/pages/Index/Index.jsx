import React from "react";

import Navigation from "../../common/containers/Navigation/Navigation";
import Video from "./Video";
import Hero from "./Hero";

const Index = () => {
  return (
    <>
      <div className="wrapper wrapper--left">
        <section className="container container--left">
          <Navigation />
          <Video />
          <Hero />
        </section>
      </div>
      <div className="wrapper wrapper--right">
        <section className="container container--right">right</section>
      </div>
    </>
  );
};

export default Index;
