const express = require('express');
const router = express.Router();

const MongodbController = require('../controllers/mongodb-controller');

router.get('/', MongodbController.getExams);
router.post('/create', MongodbController.createExam);
router.get('/:examid', MongodbController.getByExam);
router.put('/:exam', MongodbController.updateExam);
router.delete('/:exam', MongodbController.deleteExam);

module.exports = router;
