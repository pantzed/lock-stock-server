'use strict'; 

/* eslint-env node */


const express = require('express');
const r = express.Router();
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);

const { getDailyValue } = require('../service/alpha_daily');

r.get('/', (req, res) => {
  getDailyValue().then((data) => {
    res.send(data);
  });
  
})

module.exports = r;