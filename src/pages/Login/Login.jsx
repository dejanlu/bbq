import React from "react";

import Navigation from "../../common/layout/Navigation/Navigation";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <>
      <div className="wrapper wrapper--left">
        <section className="container container--left">
          <Navigation />
          <LoginForm />
        </section>
      </div>
      <div className="wrapper wrapper--right">
        <section className="container container--right">register</section>
      </div>
    </>
  );
};

export default Login;
