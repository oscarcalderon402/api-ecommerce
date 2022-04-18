const Joi = require('joi');

// const id = Joi.number().integer();
const productName = Joi.string().min(3).max(15);
const description = Joi.string().min(10);
const style = Joi.string();
const brand = Joi.string();
const url = Joi.string().uri();
const productType = Joi.string();
const shippingPrice = Joi.number().integer().min(10);
const note = Joi.string();
const adminId = Joi.number().integer();

// id int
// product_name string
// description text
// style text
// brand text
// created_at timestamp
// updated_at timestamp
// url string
// product_type string
// shipping_price int
// note text
// admin_id int

const createProductSchema = Joi.object({
  productName: productName.required(),
  shippingPrice: shippingPrice.required(),
  description: description.required(),
  url: url.required(),
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image,
  description: description,
  categoryId,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
};
