import React from "react";
import ReactDOM  from "react-dom/client";
import { StrictMode } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { App } from "./App";

const domRootElement = document.getElementById("root");
const reactDomRoot = ReactDOM.createRoot(domRootElement);

reactDomRoot.render(

  <StrictMode>
    <App />
  </StrictMode>
)
