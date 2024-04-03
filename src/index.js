// index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Make sure to link to the CSS file for global styles
import App from "./App"; // Assuming your main App component is in App.js

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
