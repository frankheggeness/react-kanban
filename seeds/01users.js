'use strict';

const bcrypt = require('bcryptjs');
const saltRounds = 12;

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          first_name: 'banana',
          last_name: 'man',
          email: 'banana@man.com',
          password: bcrypt.hashSync('1', saltRounds),
        },
        {
          first_name: 'apple',
          last_name: 'bro',
          email: 'apple@bro.com',
          password: bcrypt.hashSync('2', saltRounds),
        },
        {
          first_name: 'kiwi',
          last_name: 'cuz',
          email: 'kiwi@cuz.com',
          password: bcrypt.hashSync('3', saltRounds),
        },
      ]);
    });
};
