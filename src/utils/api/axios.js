const axios = require('axios');

const capApi = axios.create({
    baseURL: `http://api.reimaginebanking.com/`,
    timeout: 1000
});

export { capApi };