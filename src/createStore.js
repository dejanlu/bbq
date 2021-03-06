import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";
import { logger } from "./config/reduxLogger";

// easy access to middleware
export const middleware = [thunk, logger];
const appliedMiddleware = applyMiddleware(...middleware);

// create store for testing
export const createStoreWithMiddleware = createStore(
  reducers,
  appliedMiddleware
);

// redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export store
export const store = createStore(reducers, composeEnhancers(appliedMiddleware));
