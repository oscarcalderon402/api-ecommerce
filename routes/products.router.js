const express = require('express');
const ProductsService = require('../services/product.service');
const router = express.Router();

const service = new ProductsService();

router.get('/', (req, res) => {
  const products = service.findAll();
  res.json(products);
});

router.get('/:id', (req, res) => {
  res.send('product get one');
});

router.post('/', (req, res) => {
  const product = service.create(req.body);

  res.json(product);
});

router.patch('/:id', (req, res) => {
  res.send('product patch');
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.delete(id);
  res.json(product);
});

module.exports = router;
