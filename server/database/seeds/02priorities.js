exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('priorities')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('priorities').insert([
        { name: 'Low Priority', rank: 1 },
        { name: 'Medium Priority', rank: 2 },
        { name: 'High Priority', rank: 3 },
        { name: 'Blocked', rank: 4 },
      ]);
    });
};
