exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards', (table) => {
    table.increments('id');
    table.string('title', 255).notNull();
    table.string('body', 1024).notNull();
    table
      .integer('priority_id')
      .references('id')
      .inTable('priorities')
      .onDelete('CASCADE')
      .notNull();
    table
      .integer('status_id')
      .references('id')
      .inTable('statuses')
      .onDelete('CASCADE')
      .notNull();
    table
      .integer('created_by')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
    table
      .integer('assigned_to')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cards');
};
