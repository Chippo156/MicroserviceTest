const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const productRoutes = require('./routes/product');

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/products', productRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Product Service running on port ${PORT}`);
});