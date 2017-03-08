class Migration {
  static up(migration) {
    let builder = migration.getBuilder('defaultStore');

    builder.schema.alterTable('category', table => {
      table.datetime('created').nullable();
    });

    builder.schema.alterTable('product', table => {
      table.timestamp('created').notNullable().defaultTo(builder.knex.raw('CURRENT_TIMESTAMP'));
    });

    builder.schema.createTable('category_product', table => {
      table.increments('id').notNullable().primary();
      table.integer('category_id').unsigned().nullable();
      table.integer('product_id').unsigned().nullable();
      table.index('category_id', 'idx_category_product_category_id');
      table.index('product_id', 'idx_category_product_product_id');
    });
  }

  static down(migration) {
    let builder = migration.getBuilder('defaultStore');

    builder.schema.alterTable('category', table => {
      table.dropColumn('created');
    });

    builder.schema.alterTable('product', table => {
      table.dropColumn('created');
    });

    builder.schema.dropTable('category_product');
  }
}

module.exports.Migration = Migration;
