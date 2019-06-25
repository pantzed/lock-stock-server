'use strict'; 

/* eslint-env node */

const axios = require('axios');
const apiKey = process.env.ALPHA_KEY;

const getValue = (sym, value) => {
  return axios.get(`https://www.alphavantage.co/query?function=${value}&symbol=${sym}&apikey=${apiKey}`)
  .then((response) => {
    return response.data;
  });
}

module.exports = {
  getAlphaValue: getValue
}