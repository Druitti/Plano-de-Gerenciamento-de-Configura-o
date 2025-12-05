const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController');

router.post('/', OrderController.create);
router.get('/', OrderController.list);
router.get('/:id', OrderController.get);
router.put('/:id/status', OrderController.updateStatus);
router.post('/:id/items', OrderController.addItem);

module.exports = router;
