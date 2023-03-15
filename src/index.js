import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Weather from "./Weather";
import "./Weather.css";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "./App.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <Weather />
    </div>
  </StrictMode>
);
