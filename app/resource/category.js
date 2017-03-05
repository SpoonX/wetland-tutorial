const express  = require('express');
const router   = express.Router();
const Category = require('../entity/Category');

// Get a specific category
router.get('/:id', (req, res) => {
  req.getRepository(Category)
    .findOne(req.params.id, {populate: 'products'})
    .then(result => {
      if (!result) {
        return res.status(404).json(null)
      }

      return res.json(result);
    })
    .catch(error => res.status(500).json({error}));
});

// List all categories
router.get('/', (req, res) => {
  req.getRepository('Category').find(null, {populate: 'products'})
    .then(result => res.json(result || []))
    .catch(error => res.status(500).json({error}));
});

// Create a new category
router.post('/', (req, res) => {
  let manager  = req.getManager();
  let category = new Category;

  category.name = req.body.name;

  manager.persist(category).flush()
    .then(() => res.json(category))
    .catch(error => res.status(500).json({error}));
});

module.exports = router;
