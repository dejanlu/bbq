import React from "react";

import Navigation from "../../common/layout/Navigation/Navigation";
import CartIcon from "../../common/components/Cart/CartIcon";

const Login = () => {
  return (
    <>
      <div className="wrapper wrapper--left">
        <section className="container container--left">
          <Navigation />
        </section>
      </div>
      <div className="wrapper wrapper--right">
        <section className="container container--right">
          <CartIcon />
        </section>
      </div>
    </>
  );
};

export default Login;
