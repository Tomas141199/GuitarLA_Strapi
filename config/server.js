module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 3001),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "42bd27ce267cacef33394c9680b3e484"),
    },
  },
});
