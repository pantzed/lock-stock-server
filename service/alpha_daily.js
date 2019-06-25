'use strict'; 

/* eslint-env node */

const axios = require('axios');

const getDaily = (value) => {
  return axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=MSFT&apikey=demo')
  .then((response) => {
    return response.data;
  });
}

module.exports = {
  getDailyValue: getDaily
}