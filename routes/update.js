const express = require('express');
const router = express.Router();

const updateController = require('../controllers/updateController');

router.get('/', updateController.update_list);

router.post('/delete/', updateController.update_delete);

router.post('/create/', updateController.update_create);

module.exports = router;