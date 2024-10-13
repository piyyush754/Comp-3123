// Import Dependencies
const express = require('express');
const mongoose = require('mongoose');

// Initialize Express App
const app = express();

// Embedded Environment Variables
const MONGODB_URI = 'mongodb+srv://dbUser:userPassword@comp3123assign1.edlc7.mongodb.net/comp3123Assign1?retryWrites=true&w=majority&appName=comp3123Assign1';
const PORT = 3000;

// Middleware to Parse JSON
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Assignment 1</h1>");
});

const userRoutes = require('./routes/userRoutes');
const empRoutes = require('./routes/empRoutes');

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/emp', empRoutes);

// Handle Undefined Routes
app.use((req, res) => {
  res.status(404).json({ 
    status: false, 
    message: 'Route not found.' 
  });
});

// MongoDB Connection Function
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      retryWrites: true,
      w: 'majority'
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // Exit process with failure
  }
};

// Connect to the Database and Start Server
connectDB()
  .then(() => {
    console.log('MongoDB connected');
    // Start the server only if running locally
    if (require.main === module) {
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    }
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // Exit process with failure
  });

// Export the App for Serverless Deployment (e.g., Vercel)
module.exports = app;
