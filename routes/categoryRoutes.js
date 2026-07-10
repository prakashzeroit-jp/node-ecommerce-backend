const express = require('express');
const router = express.Router();
const { createCategory,getCategories } = require('../controllers/categoryController');
const { protect, admin } = require('../middleware/authMiddleware'); 

router.post('/', protect,admin, createCategory);
router.get('/',getCategories);

module.exports = router;