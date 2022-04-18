const express = require('express');
const productRouter = require('./products.router');
const userRouter = require('./users.router');
const orderRouter = require('./orders.router');
const inventoryRouter = require('./inventories.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productRouter);
  router.use('/users', userRouter);
  router.use('/orders', orderRouter);
  router.use('/inventories', inventoryRouter);
}

module.exports = routerApi;
