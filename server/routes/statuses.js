const express = require('express');
const router = express.Router();
const knex = require('../database/knex');
// const verify = require('../middleware/verify');
const passport = require('passport');
const Status = require('../database/models/Status');

router.get('/', (req, res) => {
  new Status().fetchAll().then((results) => {
    let resultsObj = results.toJSON();

    return res.send(resultsObj);
  });
});

router.get('/new', (req, res) => {
  return res.send('/api/status/new smoke test');
});

router.get('/:id/edit', (req, res) => {
  new Status()
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
