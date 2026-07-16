const express = require("express");
const router = express.Router();

const { placeOrder,getOrderHistory } = require("../controllers/orderController");
const { protect } = require("../middleware/authMiddleware");

router.post('/', protect, placeOrder);
router.get('/',protect,getOrderHistory);

module.exports = router;
