class Product {
  static setMapping(mapping) {
    mapping.forProperty('id').primary().increments();

    mapping.field('name', {type: 'string'});

    mapping.field('created', {type: 'timestamp', defaultTo: mapping.now()});

    mapping.field('stock', {type: 'integer', defaultTo: 0});

    mapping.manyToMany('categories', {targetEntity: 'Category', mappedBy: 'products'});
  }

  beforeCreate() {
    // Make sure the first character is upper case.
    this.name = this.name[0].toUpperCase() + this.name.substr(1);
  }
}

module.exports = Product;
