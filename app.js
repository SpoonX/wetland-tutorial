const express        = require('express');
const bodyParser     = require('body-parser');
const expressWetland = require('express-wetland');
const Wetland        = require('wetland').Wetland;
const app            = express();
const wetland        = new Wetland(require('./wetland'));

// Makes json prettier to read for the purpose of this tutorial
app.set('json spaces', 2);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressWetland(wetland));

// Resources
app.use('/product', require('./app/resource/product'));
app.use('/category', require('./app/resource/category'));

// Update the database schema
wetland.getMigrator().devMigrations().then(() => {
  // Start server
  app.listen(3000, () => console.log('Inventory manager ready! Available on http://127.0.0.1:3000'));
});
