const { v4: uuidv4 } = require('uuid');

class productService {
  constructor() {
    this.products = [];
  }

  create(data) {
    const newProduct = { id: uuidv4(), ...data };
    this.products.push(newProduct);
    return newProduct;
  }
  findAll() {
    return this.products;
  }
  findOne(id) {
    const product = this.products.filter((product) => product.id === id);
    return product;
  }
  update(id, data) {
    const product = this.findOne(id);
    const updateProduct = { ...product, data };
    const _data = this.products.filter((product) => product !== id);

    this.products = [..._data, updateProduct];
    return updateProduct;
  }
  delete(id) {
    const products = this.products.filter((product) => product !== id);
    this.products = products;
    return id;
  }
}

module.exports = productService;
