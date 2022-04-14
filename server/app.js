const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');

// logging middleware
app.use(morgan('dev'));

// body parsing middleware
app.use(express.json());

// auth and api routes
// app.use('/auth', require('./auth'));
// app.use('/api', require('./api'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
});

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

// sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

// error handling endware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

module.exports = app;