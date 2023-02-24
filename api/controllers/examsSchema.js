// Import mongoose and the Schema class from mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a new exam schema using the Schema class
const examSchema = new Schema({
  // Define the patientId field as a required string
  patientId: {
    type: String,
    required: true
  },
  // Define the age field as a required number
  age: {
    type: Number,
    required: true
  },
  // Define the sex field as a required string
  sex: {
    type: String,
    required: true
  },
  // Define the zipCode field as a required string
  zipCode: {
    type: String,
    required: true
  },
  // Define the bmi field as a required number
  bmi: {
    type: Number,
    required: true
  },
  // Define the examId field as a required string
  examId: {
    type: String,
    required: true
  },
  // Define the keyFindings field as a required string
  keyFindings: {
    type: String,
    required: true
  },
  // Define the brixiaScores field as a required string
  brixiaScores: {
    type: String,
    required: true
  },
  // Define the imageURL field as a required string
  imageURL: {
    type: String,
    required: true
  },
});

// Create a new model for the exam schema called Exam
const Exam = mongoose.model('Exam', examSchema);

// Export the Exam model so that it can be used in other files
module.exports = Exam;
