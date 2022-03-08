import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./reducers";
import { fetchData } from "./actions";
import "./index.css";

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(fetchData());

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

render();

store.subscribe(() => {
  console.log(123);
  render();
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
