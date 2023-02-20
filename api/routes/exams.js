
const express = require('express');
const router = express.Router();

const MongodbController = require('../controllers/mongodb-controller');


router.post('/create', MongodbController.createExam);
router.get('/get/:examid', MongodbController.getByExam);
router.post('/update/:exam/:members', MongodbController.updateExam);
router.post('/delete/:exam', MongodbController.deleteExam);

module.exports = router;