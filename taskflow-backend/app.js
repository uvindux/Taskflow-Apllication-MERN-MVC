const express = require('express');
const cors = require('cors');
const controller = require('./controller');

const app = express();

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Create user (POST)
app.post('/createuser', (req, res) => {
  controller.addUser(req.body, (callback) => {
    res.send(callback);
  });
});

// Get all users (GET)
app.get('/users', (req, res) => {
  controller.getUsers((callback) => {
    res.send(callback);
  });
});

// Update user (POST or PUT)
app.post('/updateuser', (req, res) => {
  controller.updateUser(req.body, (callback) => {
    res.send(callback);
  });
});

// Delete user (POST or DELETE)
app.post('/deleteuser', (req, res) => {
  controller.userDelete(req.body, (callback) => {
    res.send(callback);
  });
});

module.exports = app;
