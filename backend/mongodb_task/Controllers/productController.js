import ProductModel from '../Modals/productModel.js';

// Get all products
const getAllProducts = async (req, res) =>  {
    try {
        const products = await ProductModel.find();
        res.status(200).json({
            success: true,
            message: 'Products retrieved successfully',
            data: products
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve products',
            error: error.message
        });
    }
}

// Get product by ID
const getProductById = async (req, res) =>  {
    try {
        const productId = req.params.id;
        // const product = await ProductModel.findById(productId);
        const product = await ProductModel.findOne({ id: productId });
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Product retrieved successfully',
            data: product
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve product',
            error: error.message
        });
    }
}

// Get product by Query Parameters
const getProductBYQuery = async (req, res) => {
    try {
        const queryParams = req.query;
        const product = await ProductModel.findOne(queryParams);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Product retrieved successfully',
            data: product
        })
    }catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve product',
            error: error.message
        });
    }
}

// Create new product
const createProduct = async (req, res) =>  {
    try {
        const productData = req.body;
        const newProduct = await ProductModel.create(productData);
        // const newProduct = await ProductModel.insertMany(productData);
        res.status(201).json({
            success: true,
            message: 'Product created successfully',
            data: newProduct
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to create product',
            error: error.message
        });
    }
}

// Update product

// Delete product

// export { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };

export { getAllProducts, getProductById, createProduct };
