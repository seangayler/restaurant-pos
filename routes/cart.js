const express = require('express');
const router = express.Router();

const cartController = require('../controllers/cartController');

router.get('/', cartController.cart_list);

module.exports = router;