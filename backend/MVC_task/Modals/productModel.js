/*
Product Model
=============

This file defines the Product model and manages the data layer.
In a real application, this would interact with a database (MongoDB, MySQL, etc.).
For this example, we're using an in-memory array to simulate database operations.
*/

// In-memory database (simulated)
let products = [
    {
        id: 1,
        name: "Laptop",
        description: "High-performance laptop with 16GB RAM",
        price: 1299.99,
        category: "Electronics",
        stock: 25,
        createdAt: new Date('2024-01-15')
    },
    {
        id: 2,
        name: "Wireless Mouse",
        description: "Ergonomic wireless mouse with precision tracking",
        price: 29.99,
        category: "Electronics",
        stock: 150,
        createdAt: new Date('2024-02-10')
    },
    {
        id: 3,
        name: "Desk Chair",
        description: "Comfortable office chair with lumbar support",
        price: 249.99,
        category: "Furniture",
        stock: 40,
        createdAt: new Date('2024-03-05')
    }
];

// Counter for generating new IDs
let nextId = 4;

// Model class
class ProductModel {
    // Get all products
    static getAllProducts() {
        return products;
    }

    // Get product by ID
    static getProductById(id) {
        return products.find(product => product.id === parseInt(id));
    }

    // Create new product
    static createProduct(productData) {
        const newProduct = {
            id: nextId++,
            name: productData.name,
            description: productData.description || '',
            price: parseFloat(productData.price),
            category: productData.category || 'Uncategorized',
            stock: parseInt(productData.stock) || 0,
            createdAt: new Date()
        };
        
        products.push(newProduct);
        return newProduct;
    }

    // Update product
    static updateProduct(id, productData) {
        const index = products.findIndex(product => product.id === parseInt(id));
        
        if (index === -1) {
            return null;
        }

        const updatedProduct = {
            ...products[index],
            name: productData.name || products[index].name,
            description: productData.description || products[index].description,
            price: productData.price ? parseFloat(productData.price) : products[index].price,
            category: productData.category || products[index].category,
            stock: productData.stock !== undefined ? parseInt(productData.stock) : products[index].stock,
            updatedAt: new Date()
        };

        products[index] = updatedProduct;
        return updatedProduct;
    }

    // Delete product
    static deleteProduct(id) {
        const index = products.findIndex(product => product.id === parseInt(id));
        
        if (index === -1) {
            return null;
        }

        const deletedProduct = products[index];
        products.splice(index, 1);
        return deletedProduct;
    }

    // Search products by name or category
    static searchProducts(query) {
        const searchTerm = query.toLowerCase();
        return products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    }

    // Get products by category
    static getProductsByCategory(category) {
        return products.filter(product => 
            product.category.toLowerCase() === category.toLowerCase()
        );
    }

    // Validate product data
    static validateProduct(productData) {
        const errors = [];

        if (!productData.name || productData.name.trim() === '') {
            errors.push('Product name is required');
        }

        if (!productData.price || isNaN(productData.price) || productData.price <= 0) {
            errors.push('Valid product price is required');
        }

        return {
            isValid: errors.length === 0,
            errors
        };
    }
}

export default ProductModel;
