import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./pages/App/App";
import Menu from "./pages/Menu/Menu";
import NotFound from "./pages/NotFound/NotFound";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={App}></Route>
          <Route path="/menu" exact component={Menu}></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
