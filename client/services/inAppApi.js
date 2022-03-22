import axios from "axios";

const inAppApi = axios.create({
  baseURL: "https://api.bdeluckyfox.fr/api/",

  headers: {
    Authorization:
      "Bearer f94e38ec416d526048c45df6cc51154b18e45f9567e7a57211721de65c3bcc5c896683099d0eeb07a80f61152ee2209a38290ec7057cc10f4b72a3c3bea79919cc0caf338f205427cbcd8ffcf0e729f8cae689d2f41298b66fec56abd9198ae0888ad088a60c4bd283fd83e7b8359e9df8b3d0a25bec2a04a8353a8f6df131ff",
  },
});

export default inAppApi;
