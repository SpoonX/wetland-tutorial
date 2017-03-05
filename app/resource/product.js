const express           = require('express');
const router            = express.Router();
const Product           = require('../entity/Product');
const {ArrayCollection} = require('wetland');

// Get depleted products
router.get('/depleted', (req, res) => {
  req.getRepository(Product)
    .findDepleted()
    .then(result => res.json(result || []))
    .catch(error => res.status(500).json({error}));
});

// Get abundant products
router.get('/abundant', (req, res) => {
  req.getRepository(Product)
    .findAbundant()
    .then(result => res.json(result || []))
    .catch(error => res.status(500).json({error}));
});

// Get abundant products count
router.get('/abundant/count', (req, res) => {
  req.getRepository(Product)
    .findAbundantCount()
    .then(result => res.json({count: result}))
    .catch(error => res.status(500).json({error}));
});

// Get depleted products count
router.get('/depleted/count', (req, res) => {
  req.getRepository(Product)
    .findDepletedCount()
    .then(result => res.json({count: result}))
    .catch(error => res.status(500).json({error}));
});

// Get a specific product
router.get('/:id', (req, res) => {
  req.getRepository(Product)
    .findOne(req.params.id, {populate: 'categories'})
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
  req.getRepository('Product').find(null, {populate: 'categories'})
    .then(result => res.json(result || []))
    .catch(error => res.status(500).json({error}));
});

// Create a new product
router.post('/', (req, res) => {
  let manager = req.getManager();
  let product = new Product;

  product.name       = req.body.name;
  product.stock      = parseInt(req.body.stock);
  product.categories = new ArrayCollection;

  let category = manager.getReference('Category', req.body.category);

  product.categories.add(category);

  manager.persist(product).flush()
    .then(() => res.json(product))
    .catch(error => res.status(500).json({error}));
});

module.exports = router;
