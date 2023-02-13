const path = require('path');

const express = require('express');

const transactionController = require('../controllers/transaction');

const router = express.Router();

router.get('/form', transactionController.getAddMobile);

//router.post('/transactions', transactionController.getAddMobile);
router.get('/transactions', transactionController.getRecords);

module.exports = router;