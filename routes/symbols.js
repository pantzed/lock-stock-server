'use strict'; 

/* eslint-env node */


const express = require('express');
const r = express.Router();
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);

r.get('/', (req, res) => {
  if (req !== null) {
    res.send('winning')
  }
})

module.exports = r;