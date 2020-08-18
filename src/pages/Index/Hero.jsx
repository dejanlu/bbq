import React from "react";
import { RiPhoneLine } from "react-icons/ri";

import ButtonOutline from "../../common/components/button/ButtonOutline";

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero__heading">Stari recepti u novom vremenu!</h1>
      <ButtonOutline onClick={() => console.log("pozovi")}>
        Pozovi
        <span className="hero__button-icon">
          <RiPhoneLine />
        </span>
      </ButtonOutline>
    </div>
  );
};

export default Hero;
