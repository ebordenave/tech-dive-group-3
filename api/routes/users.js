const express = require('express');
const router = express.Router();
const MongodbController = require('../controllers/mongodb-controller');
const patientController = require('../controllers/patientController')

router.get('/', UserController.getUser);


module.exports = router;
