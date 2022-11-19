import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";

import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import "./styles/main.css";
import { router } from "./router";

const rootElement = document.getElementById("root");

render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
