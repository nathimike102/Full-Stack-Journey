/*
Product Routes
==============

This file defines all the API endpoints (routes) for product operations.
Routes map HTTP requests to their corresponding controller functions.
*/

import express from 'express';
import {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    searchProducts,
    getProductsByCategory
} from '../Controllers/productController.js';

const router = express.Router();

// Product Routes

// GET /api/products - Get all products
router.get('/products', getAllProducts);

// GET /api/products/search?q=query - Search products
router.get('/products/search', searchProducts);

// GET /api/products/category/:category - Get products by category
router.get('/products/category/:category', getProductsByCategory);

// GET /api/products/:id - Get product by ID
router.get('/products/:id', getProductById);

// POST /api/products - Create new product
router.post('/products', createProduct);

// PUT /api/products/:id - Update product
router.put('/products/:id', updateProduct);

// DELETE /api/products/:id - Delete product
router.delete('/products/:id', deleteProduct);

export default router;
