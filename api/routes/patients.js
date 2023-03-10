const express = require('express');
const router = express.Router();
const MongodbController = require('../controllers/mongodb-controller');
const { default: getPatient } = require('../controllers/patientController');

// GET a single patient
router.get('/:id', getPatient);

