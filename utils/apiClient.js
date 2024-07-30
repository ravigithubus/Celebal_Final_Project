const axios = require('axios');

const apiClient = axios.create({
  baseURL: 'https://api.example.com', // Replace with actual API base URL
  headers: {
    'Authorization': `Bearer ${process.env.API_KEY}`,
  },
});

module.exports = apiClient;
