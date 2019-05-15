exports.up = function(knex, Promise) {
  return knex.schema.createTable('statuses', (table) => {
    table.increments('id');
    table.string('name', 255).notNull();
    table.integer('rank').notNull();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('statuses');
};
