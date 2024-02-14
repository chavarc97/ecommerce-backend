const express = require("express");
const router = express.Router();
const { getProducts, getProductById, updateProduct, deleteProduct, createProduct} = require("../controllers/productsControllers");

router.get('/', getProducts);
router.post('/', createProduct);

router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;