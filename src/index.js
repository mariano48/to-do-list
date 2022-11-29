import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import todoApp from "./redux/reducers";
import { createStore } from "redux";

let store = createStore(todoApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
