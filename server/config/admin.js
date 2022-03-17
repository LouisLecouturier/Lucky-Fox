module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '523b26dd4e529004a54ae2e12111c710'),
  },
});
