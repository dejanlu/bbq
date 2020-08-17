import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./pages/App/App";
import { store } from "./createStore";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
