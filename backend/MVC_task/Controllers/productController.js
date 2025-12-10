/*
Product Controller
==================

This file contains the controller logic for handling HTTP requests and responses.
Controllers act as intermediaries between Routes and Models.
*/

import ProductModel from '../Modals/productModel.js';

// Get all products
const getAllProducts = (req, res) => {
    try {
        const products = ProductModel.getAllProducts();
        
        res.status(200).json({
            success: true,
            message: 'Products retrieved successfully',
            count: products.length,
            data: products
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error retrieving products',
            error: error.message
        });
    }
};

// Get product by ID
const getProductById = (req, res) => {
    try {
        const { id } = req.params;
        const product = ProductModel.getProductById(id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: `Product with ID ${id} not found`
            });
        }

        res.status(200).json({
            success: true,
            message: 'Product retrieved successfully',
            data: product
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error retrieving product',
            error: error.message
        });
    }
};

// Create new product
const createProduct = (req, res) => {
    try {
        const productData = req.body;

        // Validate product data
        const validation = ProductModel.validateProduct(productData);
        
        if (!validation.isValid) {
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: validation.errors
            });
        }

        const newProduct = ProductModel.createProduct(productData);

        res.status(201).json({
            success: true,
            message: 'Product created successfully',
            data: newProduct
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error creating product',
            error: error.message
        });
    }
};

// Update product
const updateProduct = (req, res) => {
    try {
        const { id } = req.params;
        const productData = req.body;

        // Check if product exists
        const existingProduct = ProductModel.getProductById(id);
        
        if (!existingProduct) {
            return res.status(404).json({
                success: false,
                message: `Product with ID ${id} not found`
            });
        }

        // Update product
        const updatedProduct = ProductModel.updateProduct(id, productData);

        res.status(200).json({
            success: true,
            message: 'Product updated successfully',
            data: updatedProduct
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating product',
            error: error.message
        });
    }
};

// Delete product
const deleteProduct = (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = ProductModel.deleteProduct(id);

        if (!deletedProduct) {
            return res.status(404).json({
                success: false,
                message: `Product with ID ${id} not found`
            });
        }

        res.status(200).json({
            success: true,
            message: 'Product deleted successfully',
            data: deletedProduct
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting product',
            error: error.message
        });
    }
};

// Search products
const searchProducts = (req, res) => {
    try {
        const { q } = req.query;

        if (!q || q.trim() === '') {
            return res.status(400).json({
                success: false,
                message: 'Search query is required'
            });
        }

        const results = ProductModel.searchProducts(q);

        res.status(200).json({
            success: true,
            message: 'Search completed',
            count: results.length,
            data: results
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error searching products',
            error: error.message
        });
    }
};

// Get products by category
const getProductsByCategory = (req, res) => {
    try {
        const { category } = req.params;
        const products = ProductModel.getProductsByCategory(category);

        res.status(200).json({
            success: true,
            message: `Products in category '${category}' retrieved successfully`,
            count: products.length,
            data: products
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error retrieving products by category',
            error: error.message
        });
    }
};

export {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    searchProducts,
    getProductsByCategory
};
