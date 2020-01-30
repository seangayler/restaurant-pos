const express = require('express');
const router = express.Router();

const orderController = require('../controllers/orderController');

router.get('/', orderController.order_list);
router.post('/delete', orderController.order_delete);

module.exports = router;