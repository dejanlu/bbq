import React from "react";

import ButtonInline from "../../common/components/button/ButtonInline";
import CartIcon from "../../common/components/Cart/CartIcon";

import cevapi from "../../assets/images/cevapi.png";
import flame from "../../assets/images/flame.svg";

const Action = () => {
  return (
    <article className="action">
      <div className="action__background">
        <img src={flame} alt="Flame" />
      </div>
      <CartIcon />
      <h2>Posebna ponuda za Oktobar:</h2>
      <p>Ćevapi velika porcija 7KM</p>
      <ButtonInline onClick={() => console.log("add")}>
        Dodaj u korpu +
      </ButtonInline>
      <div className="action__image">
        <img src={cevapi} alt="Cevapi" />
      </div>
    </article>
  );
};

export default Action;
