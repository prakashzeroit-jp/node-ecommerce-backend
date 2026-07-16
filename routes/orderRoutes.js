const express = require("express");
const router = express.Router();

const { placeOrder,getOrderHistory,getOrderDetails,cancelOrder } = require("../controllers/orderController");
const { protect } = require("../middleware/authMiddleware");

router.post('/', protect, placeOrder);
router.get('/',protect,getOrderHistory);
router.get('/:id',protect,getOrderDetails);
router.put('/:id/cancel',cancelOrder);

module.exports = router;
