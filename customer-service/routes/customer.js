const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');

// Get all customers
router.get('/', async(req, res) => {
    const customers = await Customer.findAll();
    res.json(customers);
});

// Create a new customer
router.post('/', async(req, res) => {
    const { name, address, contactInfo } = req.body;
    const newCustomer = await Customer.create({ name, address, contactInfo });
    res.status(201).json(newCustomer);
});

module.exports = router;