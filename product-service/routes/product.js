const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Get all products
router.get('/', async(req, res) => {
    const products = await Product.findAll();
    res.json(products);
});

// Create a new product
router.post('/', async(req, res) => {
    const { name, price, description, stock } = req.body;
    const newProduct = await Product.create({ name, price, description, stock });
    res.status(201).json(newProduct);
});

module.exports = router;