const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('product get all');
});

router.get('/:id', (req, res) => {
  res.send('product get one');
});

router.post('/', (req, res) => {
  res.send('product post');
});

router.patch('/:id', (req, res) => {
  res.send('product patch');
});

router.delete('/:id', (req, res) => {
  res.send('product delete');
});

module.exports = router;
