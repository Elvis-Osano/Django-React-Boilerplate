import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialState = {};
const middleware = [thunk];
export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
