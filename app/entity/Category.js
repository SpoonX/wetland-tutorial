class Category {
  static setMapping(mapping) {
    mapping.forProperty('id').primary().increments();

    mapping.field('name', {type: 'string'});

    mapping.field('created', {type: 'datetime', nullable: true});

    mapping.manyToMany('products', {targetEntity: 'Product', inversedBy: 'categories'});
  }

  beforeCreate() {
    this.created = new Date();
  }
}

module.exports = Category;
