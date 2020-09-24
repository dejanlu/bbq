import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import history from "./history";

import Layout from "./common/layout/Layout";

import Index from "./pages/Index/Index";
import Login from "./pages/Login/Login";
import Menu from "./pages/Menu/Menu";
import NotFound from "./pages/NotFound/NotFound";
import User from "./pages/User/User";

const Routes = () => {
  return (
    <>
      <Router history={history}>
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
          <Route path="/user/:id" exact>
            <Layout>
              <User />
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
