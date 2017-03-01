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

router.get('/', (req, res) => res.json({hello: 'from category.js'}));

module.exports = router;
