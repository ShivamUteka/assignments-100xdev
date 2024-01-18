const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = express();

// Rate limit configuration
const maxRequestsPerSecond = 5;
let numberOfRequestsForUser = {};

// Clear request count for each user every second
setInterval(() => {
  numberOfRequestsForUser = {};
}, 1000);

// Global middleware for rate limiting
app.use((req, res, next) => {
  const userId = req.headers['user-id'];

  // Initialize request count for the user if not present
  numberOfRequestsForUser[userId] = numberOfRequestsForUser[userId] || 0;

  // Check if the user has exceeded the rate limit
  if (numberOfRequestsForUser[userId] >= maxRequestsPerSecond) {
    return res.status(404).json({ error: 'Rate limit exceeded' });
  }

  // Increment request count for the user
  numberOfRequestsForUser[userId]++;

  // Continue with the next middleware
  next();
});

app.get('/user', function (req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function (req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;
