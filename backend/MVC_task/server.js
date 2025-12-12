/*
MVC Task - Product Management API
===================================

This is a complete MVC (Model-View-Controller) backend implementation using Express.js.

Components:
1. Models: Define data structure and business logic (Modals/productModel.js)
2. Controllers: Handle request/response logic (Controllers/productController.js)
3. Routes: Define API endpoints (Routes/productRoutes.js)
4. Server: Main application entry point (server.js)

API Endpoints:
- GET    /api/products        - Get all products
- GET    /api/products/:id    - Get product by ID
- POST   /api/products        - Create new product
- PUT    /api/products/:id    - Update product
- DELETE /api/products/:id    - Delete product

Structure:
Backend/MVC_task/
 ├── Modals/
 │   └── productModel.js
 ├── Controllers/
 │   └── productController.js
 ├── Routes/
 │   └── productRoutes.js
 ├── server.js
 └── package.json
*/

import express from 'express';
import productRoutes from './Routes/productRoutes.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());

// CORS middleware (for frontend integration)
app.use(cors());

// Root route
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to MVC Task API',
        endpoints: {
            getAllProducts: 'GET /api/products',
            getProductById: 'GET /api/products/:id',
            createProduct: 'POST /api/products',
            updateProduct: 'PUT /api/products/:id',
            deleteProduct: 'DELETE /api/products/:id'
        }
    });
});

// API Routes
app.use('/api', productRoutes);

// 404 Handler
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Something went wrong!',
        error: err.message
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
