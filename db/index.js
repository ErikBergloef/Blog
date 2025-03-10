const mongoose = require('mongoose');
require('dotenv').config();

// Skapar en funktion som hanterar MongoDB-anslutningen

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected...');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); 
  }
};

module.exports = connectToDatabase;
