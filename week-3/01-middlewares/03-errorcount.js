const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
let errorCount = 0;

// Middleware to handle errors globally
app.use((err, req, res, next) => {
  // Increment errorCount on each exception
  errorCount++;
  
  // Send a 404 status code to the end user
  res.status(404).json({ error: 'Not Found' });
});

app.get('/user', function(req, res, next) {
  // Wrap the code in a try-catch block to catch exceptions
  try {
    throw new Error("User not found");
    res.status(200).json({ name: 'john' });
  } catch (error) {
    // Pass the error to the global error handler middleware
    next(error);
  }
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/errorCount', function(req, res) {
  res.status(200).json({ errorCount });
});

module.exports = app;
