import express from 'express';
import productRoutes from './Routes/productRoutes.js';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// CORS middleware (for frontend integration)
app.use(cors());

const dburl = 'mongodb+srv://nathi_mike:df5HJ9QTCnmM1rRu@cluster0.r7t7urn.mongodb.net/';

// DB connection
mongoose.connect(dburl, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
});

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
app.use((err, req, res) => {
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
