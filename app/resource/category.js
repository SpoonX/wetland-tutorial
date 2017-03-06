const express  = require('express');
const router   = express.Router();
const Category = require('../entity/Category');

router.post('/', (req, res) => {
  let wetland  = req.wetland;
  let manager  = wetland.getManager();
  let category = new Category;

  category.name = req.body.name;

  manager.persist(category).flush()
    .then(() => res.json(category))
    .catch(error => res.status(500).json({error}));
});

// Delete a category
router.delete('/:id', (req, res) => {
  let manager = req.getManager();

  manager.getRepository('Category')
    .findOne(req.params.id)
    .then(result => {
      if (!result) {
        return res.status(404).json(null)
      }

      return manager.remove(result).flush()
        .then(() => res.json(result));
    })
    .catch(error => res.status(500).json({error}));
});

// Update a category
router.patch('/:id', (req, res) => {
  let manager = req.getManager();

  manager.getRepository('Category')
    .findOne(req.params.id)
    .then(result => {
      if (!result) {
        return res.status(404).json(null)
      }

      result.name = req.body.name;

      return manager.flush().then(() => res.json(result));
    })
    .catch(error => res.status(500).json({error}));
});

router.get('/', (req, res) => res.json({hello: 'from category.js'}));

module.exports = router;
