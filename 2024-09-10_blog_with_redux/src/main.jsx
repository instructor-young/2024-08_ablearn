import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import store from "./redux/store";
import { Router } from "./router";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router />
  </Provider>
);
