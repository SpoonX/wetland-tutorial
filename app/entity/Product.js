class Product {
  static setMapping(mapping) {
    mapping.forProperty('id').primary().increments();

    mapping.field('name', {type: 'string'});

    mapping.field('stock', {type: 'integer', defaultTo: 0});

    mapping.manyToMany('categories', {targetEntity: 'Category', mappedBy: 'products'});
  }
}

module.exports = Product;
