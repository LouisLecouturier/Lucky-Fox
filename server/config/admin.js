module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0552ee1bae1b22be9f21a87ccfb1b4a0'),
  },
});
