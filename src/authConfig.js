// src/authConfig.js

const tenantDomain = "remaxb2ctenant.b2clogin.com";
const tenantName = "remaxb2ctenant";
const userFlow = "B2C_1_signupsigninmaison"; // à adapter avec ton nom de user flow
const clientId = "050584ad-9aba-4c4d-a40d-249d19da7bb6"; // ton App Registration

export const msalConfig = {
  auth: {
    clientId: clientId,
    authority: `https://${tenantDomain}/${tenantName}.onmicrosoft.com/${userFlow}`,
    knownAuthorities: [tenantDomain],
    redirectUri: "https://home.chvt.fr", // à adapter
    postLogoutRedirectUri: "https://home.chvt.fr",
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  },
};

export const loginRequest = {
  scopes: ["openid", "profile", "email"],
};
  