const express = require('express');
const router = express.Router();
const knex = require('../database/knex');
// const verify = require('../middleware/verify');
const passport = require('passport');

router.get('/', (req, res) => {
  return res.send('/api/users smoke test');
});

router.get('/new', (req, res) => {
  return res.send('/api/users/new smoke test');
});

router.get('/:id', (req, res) => {
  return res.send('/api/users/:id smoke test');
});

router.get('/:id/edit', (req, res) => {
  return res.send('/api/users/:id/edit smoke test');
});
module.exports = router;
