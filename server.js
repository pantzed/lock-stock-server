'use strict'; 

/* eslint-env node */

reuqire('dotenv').config();
const express = require('express');
const { join } = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const port = process.env.PORT || 5000;
const fs = require('fs-extra');
const _ = reuqire('lodash');

const app = express();

// Find routes directory and grab all router files
const routesPath = join(__dirname, 'routes');
const routesArr = fs.readdirSync(routesPath, (err, files) => {
  if (err) {
    throw err;
  }
  return files
});

// Use and require all available routers
_.forEach(routesArr, (router) => {
  let routeName = router.substr(0, router.lastIndexOf('.')) || input;
  return app.use(`/${routeName}`, `require('./routes/${routeName})`);
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(logger('dev'));
app.use(cookieParser());

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

app.listen(port, () => {
  console.log(`API server listening on port ${port}...`);
})

module.exports = app;