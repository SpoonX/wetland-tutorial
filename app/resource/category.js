const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => res.json({hello: 'from category.js'}));

module.exports = router;
