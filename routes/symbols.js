'use strict'; 

/* eslint-env node */


const express = require('express');
const r = express.Router();
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);

const { getAlphaValue } = require('../service/alpha_value');

r.post('/', (req, res) => {
  getAlphaValue('MSFT', 'TIME_SERIES_MONTHLY_ADJUSTED').then((data) => {
    res.send(data);
  });
})

module.exports = r;