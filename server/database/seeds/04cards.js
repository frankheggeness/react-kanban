exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('cards').insert([
        {
          title: 'Grate Cheese',
          body: 'You need to grate the cheese.',
          priority_id: 2,
          status_id: 2,
          created_by: 2,
          assigned_to: 1,
        },
        {
          title: 'Put on Pants',
          body: 'Dude everyone is staring.',
          priority_id: 4,
          status_id: 1,
          created_by: 1,
          assigned_to: 3,
        },
        {
          title: 'Eat grass',
          body: 'Moo',
          priority_id: 3,
          status_id: 3,
          created_by: 3,
          assigned_to: 2,
        },
      ]);
    });
};
