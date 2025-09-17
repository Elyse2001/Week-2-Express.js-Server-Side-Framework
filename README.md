# Week-2-Express.js-Server-Side-Framework
assignment 
# PLP Hackathon Project

## MongoDB Setup
1. Install MongoDB or use MongoDB Atlas
2. Create database: `plp_bookstore`
3. Create collection: `books`
4. Insert sample data:
```bash
mongo insert_books.js

 Run queries: mongo queries.js
API Endpoints:

GET /api/products - list products

GET /api/products/:id - get product by ID

POST /api/products - create product (auth required)

PUT /api/products/:id - update product (auth required)

DELETE /api/products/:id - delete product (auth required)

Advanced Features

Filtering: /api/products?minPrice=500

Search: /api/products?search=laptop

Pagination: /api/products?page=1&limit=2

Middleware

Logging

Authentication (Authorization header)

Validation for POST/PUT requests
