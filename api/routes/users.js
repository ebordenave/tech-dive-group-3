const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user-controller');

// not sure if this is the correct path
router.get('/:patientId', UserController.getUser);


module.exports = router;

