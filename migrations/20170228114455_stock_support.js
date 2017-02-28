class Migration {
  static up(migration) {
    let builder = migration.getBuilder('defaultStore');

    builder.schema.alterTable('product', table => {
      table.integer('stock').notNullable().defaultTo('0');
    });
  }

  static down(migration) {
    let builder = migration.getBuilder('defaultStore');

    builder.schema.alterTable('product', table => {
      table.dropColumn('stock');
    });
  }
}

module.exports.Migration = Migration;
