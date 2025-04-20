import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./authConfig";

const msalInstance = new PublicClientApplication(msalConfig);
const onRedirectCallback = (response) => {
  if (response) {
    window.history.replaceState({}, document.title, "/");
  }
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <MsalProvider instance={msalInstance} onRedirectCallback={onRedirectCallback}>
        <App />
      </MsalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
