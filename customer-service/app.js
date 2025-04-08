const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const customerRoutes = require('./routes/customer');

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/customers', customerRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Customer Service running on port ${PORT}`);
});