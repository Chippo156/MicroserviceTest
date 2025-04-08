const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const orderRoutes = require('./routes/order');

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/orders', orderRoutes);

// Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Order Service running on port ${PORT}`);
});