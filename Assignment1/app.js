// Load environment variables in development
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
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

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/emp', empRoutes);

// Handle undefined routes
app.use((req, res) => {
  res.status(404).json({ 
    status: false, 
    message: 'Route not found.' 
  });
});

// Connect to the database
connectDB()
  .then(() => {
    console.log('MongoDB connected');
    // Start the server only if running locally
    if (require.main === module) {
      const PORT = process.env.PORT || 3000;
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    }
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // Exit process with failure
  });

// Export the handler wrapped with serverless-http
module.exports.handler = serverless(app);
