const express = require('express');
const router = express.Router();
const knex = require('../database/knex');
// const verify = require('../middleware/verify');
const passport = require('passport');
const Priority = require('../database/models/Priority');

router.get('/', (req, res) => {
  new Priority().fetchAll().then((results) => {
    let resultsObj = results.toJSON();

    return res.send(resultsObj);
  });
});

router.get('/new', (req, res) => {
  return res.send('/api/priorities/new smoke test');
});

router.get('/:id/edit', (req, res) => {
  new Priority()
    .where({ id: req.params.id })
    .fetchAll({ withRelated: ['cards'] })
    .then((results) => {
      let resultsObj = results.toJSON();

      return res.send(resultsObj);
    });
});

// router.get('/:id/edit', (req, res) => {
//   return res.send('/api/users/:id/edit smoke test');
// });

module.exports = router;
