const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = require('./app.js');
const router = require('./router');

const PORT = 3000;
const HOST = 'localhost';

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', router);

// MongoDB connection
const url = 'mongodb+srv://Manohara:Uvi%402018@cluster0.99hzwty.mongodb.net/?appName=Cluster0';

const connect = async () => {
  try {
    await mongoose.connect(url);
    console.log('✅ Connected to the database successfully');
  } catch (err) {
    console.log('❌ Error connecting to the database:', err.message);
  }
};

connect();

// Start server
app.listen(PORT, HOST, () => {
  console.log(`🚀 Server running at http://${HOST}:${PORT}`);
});
