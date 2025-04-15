import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";

const LoginButton = () => {
  console.log("✅ LoginButton loaded");

  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginRedirect(loginRequest);
  };

  return (
    <button
      onClick={handleLogin}
      style={{ background: "lime", padding: "10px", fontSize: "1rem" }}
    >
      Se connecter avec Google
    </button>
  );
};

export default LoginButton;