const axios = require("axios");

const capApi = axios.create({
  baseURL: `http://api.reimaginebanking.com/`,
  timeout: 1000
});

const krakenApi = axios.create({
  baseURL: "https://api.kraken.com/0/public/",
  timeout: 10000
});

export { capApi, krakenApi };
