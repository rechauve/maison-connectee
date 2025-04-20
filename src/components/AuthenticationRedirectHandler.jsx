// // src/components/AuthenticationRedirectHandler.jsx
// import { useEffect } from "react";
// import { useMsal } from "@azure/msal-react";

// const AuthenticationRedirectHandler = () => {
//   const { instance } = useMsal();

//   useEffect(() => {
//     instance.handleRedirectPromise().catch((error) => {
//       console.error("Redirect error: ", error);
//     });
//   }, [instance]);

//   return null;
// };

// export default AuthenticationRedirectHandler;
