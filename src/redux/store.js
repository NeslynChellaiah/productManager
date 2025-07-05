import { createStore, combineReducers, applyMiddleware } from "redux";
import productReducer from "./reducers/productReducers";
import { thunk } from "redux-thunk";
import authReducer from "./reducers/authReducers";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
