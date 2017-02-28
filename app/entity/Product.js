class Product {
  static setMapping(mapping) {
    mapping.forProperty('id').primary().increments();

    mapping.field('name', {type: 'string'});

    mapping.field('stock', {type: 'integer', defaultTo: 0});
  }
}

module.exports = Product;
