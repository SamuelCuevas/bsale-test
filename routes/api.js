const { Router } = require('express');
const router = Router();

const { getProducts, search } = require('../controllers/products');

router.get('/', getProducts);

router.post('/search', search);


module.exports = router;