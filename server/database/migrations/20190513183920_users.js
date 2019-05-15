exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.string('first_name', 255).notNull();
    table.string('last_name', 255).notNull();
    table.string('email', 255).notNull();
    table.string('password', 255).notNull();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
