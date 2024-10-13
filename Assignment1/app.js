const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const user = require('./models/userModel');
const employee= require('./models/empModel');

app.use(express.json()); 
// TODO - Update your mongoDB Atals Url here to Connect to the database
mongoose.connect(
    "mongodb+srv://dbUser:userPassword@comp3123assign1.edlc7.mongodb.net/comp3123Assign1?retryWrites=true&w=majority&appName=comp3123Assign1"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Error connecting to MongoDB:", err.message));

app.use("/api/v1/user", user); // Change 'userRoutes' to 'userRouter'

app.use("/api/v1/emp", employee); // Define employee-related API routes

app.get('/', (req, res) => {
    res.send("<h1>Welcome to Assignment 1</h1>");
});


app.listen(8082, () => {
    console.log(`Server is listening on port 8082`);
});