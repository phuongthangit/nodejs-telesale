const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID });
const express = require('express');

const app = express(); // initialize app
const route = require('./routes/main');
const database = require('./config/databases');


const config = {
  views: 'views', // Set views directory
  static: 'public', // Set static assets directory
  logging: true,
};

vertex.configureApp(app, config);
route(app);
database.connect();

module.exports = app;
