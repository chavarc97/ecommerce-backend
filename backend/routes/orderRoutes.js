const express = require("express");
const router = express.Router();
const {setOrder, getOrders, updateOrder, deleteOrder} = require('../controllers/ordersControllers');


router.get('/', getOrders);
router.post('/', setOrder);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);

module.exports = router;