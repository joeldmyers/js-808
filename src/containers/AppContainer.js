import React from "react";
import Counter from "./Counter/Counter";
import "../styles/fonts.scss";
import "./App.scss";
import { Provider } from "react-redux";
import store from "../store";

const App = () => {
  console.log("store", store);
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
