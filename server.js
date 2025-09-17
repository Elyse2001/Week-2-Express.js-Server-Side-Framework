require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json()); // Parse JSON

// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Sample in-memory products
let products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 800 }
];

// Authentication middleware
const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ error: "Unauthorized" });
  next();
};

// Routes
app.get('/api/products', (req, res) => {
  let result = products;
  const { search, minPrice, page = 1, limit = 2 } = req.query;

  if (search) result = result.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
  if (minPrice) result = result.filter(p => p.price >= parseFloat(minPrice));

  const start = (page - 1) * limit;
  const end = start + parseInt(limit);
  result = result.slice(start, end);

  res.json(result);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json(product);
});

app.post('/api/products', authMiddleware, (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) return res.status(400).json({ error: "Name and price required" });
  const newProduct = { id: products.length + 1, name, price };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.put('/api/products/:id', authMiddleware, (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ error: "Product not found" });
  const { name, price } = req.body;
  if (name) product.name = name;
  if (price) product.price = price;
  res.json(product);
});

app.delete('/api/products/:id', authMiddleware, (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Product not found" });
  products.splice(index, 1);
  res.status(204).send();
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
