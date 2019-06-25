'use strict'; 

/* eslint-env node */


const express = require('express');
const router = express.router();
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex');