import express from 'express';
// import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../Controllers/productController.js';
import { getAllProducts, getProductById, createProduct } from '../Controllers/productController.js';

const router = express.Router();

// Product Routes

// GET /api/products - Get all products
router.get('/products', getAllProducts);

// GET /api/products/:id - Get product by ID
router.get('/products/:id', getProductById);

// POST /api/products - Create new product
router.post('/products', createProduct);

// PUT /api/products/:id - Update product
// router.put('/products/:id', updateProduct);

// DELETE /api/products/:id - Delete product
// router.delete('/products/:id', deleteProduct);

export default router;
