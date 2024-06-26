import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const reactElement = React.createElement(
  "a",
  {
    href: "https://reactjs.org",
    target: "_blank",
  },
  "Click me to learn React"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
