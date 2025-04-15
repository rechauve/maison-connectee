// src/authConfig.js
export const msalConfig = {
    auth: {
      clientId: "0fb342ca-5c8f-41e9-b48c-c9391689fe9a", // Remplace par ton vrai client ID
      authority: "https://remaxb2ctenant.b2clogin.com/remaxb2ctenant.onmicrosoft.com/B2C_1_signupsignin", // Le nom du user flow ici
      knownAuthorities: ["remaxb2ctenant.b2clogin.com"],
      redirectUri: "http://localhost:3000/", // Ou https://home.chvt.fr/ en prod
    },
    cache: {
      cacheLocation: "localStorage", // ou "sessionStorage"
      storeAuthStateInCookie: false,
    }
  };
  
  export const loginRequest = {
    scopes: ["openid", "profile", "email"],
  };
  