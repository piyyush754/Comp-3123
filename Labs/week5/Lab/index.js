const express = require('express');
const empRouter = require('./emp');
const userRouter = require('./users');
const errorHandlerMiddleware = require('./errorHandlerMiddleware');
const app = express();
const SERVER_PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const loggerMiddleware  = (req, res, next) => {
    console.log(`Logged  ${req.url}  ${req.method} -- ${new Date()}`);
    next();
}

// Apply the middleware to all requests - Application Level Middleware
app.use('/user',loggerMiddleware)

app.use('/user',userRouter)
app.use('/emp', empRouter)

// Error end point
// http://localhost:3000/error
app.get('/error', (req, res) => {
    try{
        throw new Error('This is a forced error');
    } catch (error) {
        next
    }

    res.send('Welcome to Express errror handling');
})

// Error handling middleware
app.use(errorHandlerMiddleware);

app.listen(SERVER_PORT, () => {
    console.log('Server is running on port 3000');
})