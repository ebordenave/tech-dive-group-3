const express = require('express');
const router = express.Router();
// const named router 
const MongodbController = require('../controllers/mongodb-controller');

router.get('/', MongodbController.getExams);
router.post('/create', MongodbController.createExam);
router.get('/:examid', MongodbController.getByExam);
router.put('/:exam', MongodbController.updateExam);
router.delete('/:examid', MongodbController.deleteExam);

module.exports = router;
