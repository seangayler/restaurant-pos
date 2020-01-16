const express = require('express');
const router = express.Router();

const menuController = require('../controllers/menuController');

/* GET menu page */
router.get('/', menuController.menu_list);

module.exports = router;