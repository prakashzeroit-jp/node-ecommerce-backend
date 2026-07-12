const express =  require('express');
const router = express.Router();
const {addToCart,viewCart} = require('../controllers/cartController');
const {protect} = require('../middleware/authMiddleware');
const { route } = require('./authRoutes');


router.post('/',protect ,addToCart);
router.get('/',protect,viewCart);
module.exports = router;
