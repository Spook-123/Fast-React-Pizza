import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* React redux component to provide the state to whole application -> global data store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
