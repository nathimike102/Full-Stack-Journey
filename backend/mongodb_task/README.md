# MVC Task - Product Management API

A complete backend implementation using the MVC (Model-View-Controller) design pattern with Express.js.

## Project Structure

```
MVC_task/
├── Modals/
│   └── productModel.js      # Data layer and business logic
├── Controllers/
│   └── productController.js # Request/Response handlers
├── Routes/
│   └── productRoutes.js     # API endpoint definitions
├── server.js                # Application entry point
├── package.json             # Project dependencies
└── README.md                # Project documentation
```

## MVC Architecture

### Model (Modals/)

- Manages data and business logic
- Defines data structure
- Handles data validation
- Performs CRUD operations
- In this example: Uses in-memory storage (can be replaced with database)

### Controller (Controllers/)

- Processes incoming requests
- Interacts with models
- Sends responses back to client
- Contains business logic flow
- Handles error management

### Routes (Routes/)

- Defines API endpoints
- Maps URLs to controller functions
- Handles HTTP methods (GET, POST, PUT, DELETE)

## Installation

```bash
# Navigate to the project directory
cd backend/MVC_task

# Install dependencies
npm install
```

## Running the Server

```bash
# Production mode
npm start

# Development mode (with auto-reload)
npm run dev
```

The server will start at `http://localhost:5001`

## API Endpoints

### Get All Products

```
GET /api/products
```

### Get Product by ID

```
GET /api/products/:id
```

### Create New Product

```
POST /api/products
Content-Type: application/json

{
  "name": "Product Name",
  "description": "Product description",
  "price": 99.99,
  "category": "Electronics",
  "stock": 50
}
```

### Update Product

```
PUT /api/products/:id
Content-Type: application/json

{
  "name": "Updated Name",
  "price": 129.99,
  "stock": 30
}
```

### Delete Product

```
DELETE /api/products/:id
```

### Search Products

```
GET /api/products/search?q=laptop
```

### Get Products by Category

```
GET /api/products/category/Electronics
```

## Testing with cURL

```bash
# Get all products
curl http://localhost:5001/api/products

# Get product by ID
curl http://localhost:5001/api/products/1

# Create new product
curl -X POST http://localhost:5001/api/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Keyboard","description":"Mechanical keyboard","price":89.99,"category":"Electronics","stock":100}'

# Update product
curl -X PUT http://localhost:5001/api/products/1 \
  -H "Content-Type: application/json" \
  -d '{"price":1199.99,"stock":20}'

# Delete product
curl -X DELETE http://localhost:5001/api/products/1

# Search products
curl "http://localhost:5001/api/products/search?q=laptop"

# Get products by category
curl http://localhost:5001/api/products/category/Electronics
```

## Features

- ✅ Complete MVC architecture
- ✅ RESTful API design
- ✅ CRUD operations
- ✅ Data validation
- ✅ Error handling
- ✅ Search functionality
- ✅ Category filtering
- ✅ CORS enabled
- ✅ JSON responses
- ✅ In-memory database (easily replaceable with real DB)

## Next Steps (Optional Enhancements)

1. **Database Integration**: Replace in-memory storage with MongoDB, MySQL, or PostgreSQL
2. **Authentication**: Add JWT-based authentication
3. **Pagination**: Implement pagination for product listings
4. **File Upload**: Add image upload for products
5. **Testing**: Add unit and integration tests
6. **Environment Variables**: Use .env for configuration
7. **Logging**: Implement Winston or Morgan for logging
8. **API Documentation**: Add Swagger/OpenAPI documentation

## Dependencies

- **express**: Web framework for Node.js
- **nodemon**: Development tool for auto-restarting server

## License

ISC
