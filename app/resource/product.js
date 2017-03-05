const express = require('express');
const router  = express.Router();
const Product = require('../entity/Product');

// Get depleted products
router.get('/depleted', (req, res) => {
  req.getRepository(Product)
    .findDepleted()
    .then(result => res.json(result || []))
    .catch(error => res.status(500).json({error}));
});

// Get a specific product
router.get('/:id', (req, res) => {
  req.getRepository(Product)
    .findOne(req.params.id)
    .then(result => {
      if (!result) {
        return res.status(404).json(null)
      }

      return res.json(result);
    })
    .catch(error => res.status(500).json({error}));
});

// List all products
router.get('/', (req, res) => {
  req.getRepository('Product').find()
    .then(result => res.json(result || []))
    .catch(error => res.status(500).json({error}));
});

// Create a new product
router.post('/', (req, res) => {
  let manager = req.getManager();
  let product = new Product;

  product.name  = req.body.name;
  product.stock = parseInt(req.body.stock);

  manager.persist(product).flush()
    .then(() => res.json(product))
    .catch(error => res.status(500).json({error}));
});

module.exports = router;
