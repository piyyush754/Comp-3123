if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config(); // Load environment variables only in development
}

const express = require('express');
const serverless = require('serverless-http'); // Import serverless-http
const app = express();
const connectDB = require('./config/db');

// Middleware to parse JSON
app.use(express.json());

// Routes
const userRoutes = require('./routes/userRoutes');
const empRoutes = require('./routes/empRoutes');
const { default: mongoose } = require('mongoose');

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/emp', empRoutes);

// Handle undefined routes
app.use((req, res) => {
  res.status(404).json({ 
    status: false, 
    message: 'Route not found.' 
  });
});

// // Start the Server after successful DB connection
// const PORT = process.env.PORT || 3000;

// // Export the Express app wrapped with serverless-http
// const handler = serverless(app);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // Exit process with failure
  });


// Export the handler wrapped with serverless-http
module.exports.handler = serverless(app);