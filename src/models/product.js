const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  title: String,
  required: true,
},
{
  description: String,
  required: true,
},
{
  price: Number,
  required: true,
},
{
  category: String,
  required: true,
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
