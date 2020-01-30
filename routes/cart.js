const express = require('express');
const router = express.Router();

const cartController = require('../controllers/cartController');

router.get('/', cartController.cart_list);

router.post('/create', cartController.cart_create);

module.exports = router;