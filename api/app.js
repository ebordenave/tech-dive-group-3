// Import required modules
require('dotenv').config()
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const createError = require('http-errors');

// Import required routes
const indexRouter = require('./routes/index');
const patientsRouter = require('./routes/users');
const examsRouter = require('./routes/exams');

// Create the Express application
const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB using the Mongoose library
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected!'))
.catch((err) => console.log(`MongoDB connection error: ${err.message}`));

// Use middleware to set up logging, CORS, JSON and URL encoded request bodies, and cookie parsing
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Set up routes for the application
app.use('/', indexRouter);
app.use('/exams', examsRouter);
app.use('/patient', patientsRouter);


// If no route is matched, create a 404 error and forward it to the error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Define the error handler middleware for the application
app.use(function(err, req, res, next) {
  // Set locals for the error message and error object
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render({
    message: err.message,
    error: err
  });
});

// Export the Express application
module.exports = app;
