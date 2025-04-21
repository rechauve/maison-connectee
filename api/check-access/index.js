module.exports = async function (context, req) {

  const allowedUsers = import.meta.env.VITE_ALLOWED_USERS;
  const user = req.headers['x-ms-client-principal'];

  if (!user) {
    context.res = {
      status: 401,
      body: { access: false, message: "Non authentifié" }
    };
    return;
  }

  const decoded = Buffer.from(user, 'base64').toString('utf8');
  const userInfo = JSON.parse(decoded);
  const userEmail = userInfo.userDetails;

  const isAuthorized = allowedUsers.includes(userEmail);

  context.res = {
    status: 200,
    body: { access: isAuthorized }
  };
};

