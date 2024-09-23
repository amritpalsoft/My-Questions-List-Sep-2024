import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

let initialState = {
  name: "amrit",
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "change_name":
      return { ...state, name: action.payload };
    case "change_count":
      return { ...state, count: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools(applyMiddleware()));

export default store;
