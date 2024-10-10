// app.js

require('dotenv').config(); // Load environment variables
const express = require('express');
const app = express();
const connectDB = require('./config/db');

// Connect to MongoDB Atlas
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Routes
const userRoutes = require('./routes/userRoutes');
const empRoutes = require('./routes/empRoutes');

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/emp', empRoutes);

// Handle undefined routes
app.use((req, res) => {
  res.status(404).json({ 
    status: false, 
    message: 'Route not found.' 
  });
});

// Start the Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
