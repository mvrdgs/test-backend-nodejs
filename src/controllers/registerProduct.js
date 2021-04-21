/* utilizei diversos videos, sites e resultados de buscas como referência
ainda não entrei no módulo de backend no curso que faço então nunca tinha visto
conteúdo de db e não sabia nem por onde começar a desenvolver uma API */

const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

router.post('/registerproduct', async (req, res) => {
  const { title } = req.body;
  try {
    if (await Product.findOne({ title }))
      return res.send(400).send({ error: 'Product already exists'});

    const product = await Product.create(req.body);
    
    return res.send({ product });
  } catch (error) {
    return res.status(400).send({ error: 'Registration failed' });
  };
});

router.get('/productlist', (req, res) => {
  Product.find({}, (err, products) => {
    res.send({ products: products });
  });
});

module.exports = (app) => app.use('/', router);
