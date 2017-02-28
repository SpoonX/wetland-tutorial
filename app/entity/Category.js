class Category {
  static setMapping(mapping) {
    mapping.forProperty('id').primary().increments();

    mapping.field('name', {type: 'string'});

    mapping.manyToMany('products', {targetEntity: 'Product', inversedBy: 'categories'});
  }
}

module.exports = Category;
