import React from "react";

import Navigation from "../../common/layout/Navigation/Navigation";
import LoginContainer from "../../common/containers/LoginContainer";
import RegisterContainer from "../../common/containers/RegisterContainer";
import CartIcon from "../../common/components/Cart/CartIcon";

const Login = () => {
  return (
    <>
      <div className="wrapper wrapper--left">
        <section className="container container--left">
          <Navigation />
          <div className="login-wrapper">
            <LoginContainer />
          </div>
        </section>
      </div>
      <div className="wrapper wrapper--right">
        <section className="container container--right">
          <div className="login-wrapper">
            <CartIcon />
            <RegisterContainer />
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
