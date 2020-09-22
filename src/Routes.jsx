import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./common/layout/Layout";

import Index from "./pages/Index/Index";
import Login from "./pages/Login/Login";
import Menu from "./pages/Menu/Menu";
import NotFound from "./pages/NotFound/NotFound";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Layout>
              <Index />
            </Layout>
          </Route>
          <Route path="/login" exact>
            <Layout>
              <Login />
            </Layout>
          </Route>
          <Route path="/menu" exact>
            <Layout>
              <Menu />
            </Layout>
          </Route>
          <Route path="*">
            <Layout>
              <NotFound />
            </Layout>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
