const express = require('express');
const router = express.Router();
const knex = require('../database/knex');
// const verify = require('../middleware/verify');
const passport = require('passport');
const User = require('../database/models/User');

router.get('/', (req, res) => {
  // return res.send('/api/users smoke test');
  new User().fetchAll().then((results) => {
    let resultsObj = results.toJSON();

    return res.send(resultsObj);
  });
});

router.get('/new', (req, res) => {
  return res.send('/api/users/new smoke test');
});

router.get('/:id', (req, res) => {
  new User()
    .where({ id: req.params.id })
    .fetchAll()
    .then((results) => {
      let resultsObj = results.toJSON();

      return res.send(resultsObj);
    });
});

router.get('/:id/edit', (req, res) => {
  return res.send('/api/users/:id/edit smoke test');
});
module.exports = router;
