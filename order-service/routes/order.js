const express = require('express');
const router = express.Router();
const Order = require('../models/order');

// Create an order
router.post('/', async(req, res) => {
    const { customerId, products } = req.body;
    const newOrder = await Order.create({ customerId, products });
    res.status(201).json(newOrder);
});

// Get all orders
router.get('/', async(req, res) => {
    const orders = await Order.findAll();
    res.json(orders);
});

module.exports = router;