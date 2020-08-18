import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./common/containers/Layout/Layout";

import Index from "./pages/Index/Index";
import Menu from "./pages/Menu/Menu";
import NotFound from "./pages/NotFound/NotFound";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Layout>
            <Route path="/" exact component={Index}></Route>
          </Layout>
          <Layout>
            <Route path="/menu" exact component={Menu}></Route>
          </Layout>
          <Layout>
            <Route path="*" component={NotFound}></Route>
          </Layout>
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
