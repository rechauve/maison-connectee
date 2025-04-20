const allowedUsers = ["rechauve@gmail.com", "maximech91@gmail.com"];

module.exports = async function (context, req) {
  const token = req.headers["authorization"]?.replace("Bearer ", "");

  if (!token) {
    context.res = {
      status: 401,
      body: { error: "Missing token" }
    };
    return;
  }

  try {
    const jwt = require("jsonwebtoken");
    const decoded = jwt.decode(token, { complete: true });

    const email =
      decoded?.payload?.emails?.[0] || decoded?.payload?.preferred_username;

    if (allowedUsers.includes(email)) {
      context.res = {
        status: 200,
        body: { access: true }
      };
    } else {
      context.res = {
        status: 403,
        body: { access: false }
      };
    }
  } catch (err) {
    context.res = {
      status: 500,
      body: { error: "Token decode error", details: err.message }
    };
  }
};
