const express =  require('express');
const router = express.Router();
const {addToCart,viewCart,updateQuantity,removeItemFromCart,clearCart} = require('../controllers/cartController');
const {protect} = require('../middleware/authMiddleware');
const { route } = require('./authRoutes');


router.post('/',protect ,addToCart);
router.get('/',protect,viewCart);
router.put('/',protect,updateQuantity);
router.delete('/item/:productId',protect,removeItemFromCart);
router.delete('/',protect,clearCart);
module.exports = router;
