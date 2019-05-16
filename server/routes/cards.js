const express = require('express');
const router = express.Router();
const knex = require('../database/knex');
// const verify = require('../middleware/verify');
const passport = require('passport');
const Card = require('../database/models/Card');

router.get('/', (req, res) => {
  // console.log('hi');
  // return res.send('hi');
  new Card().fetchAll({ withRelated: ['priorities', 'statuses', 'created_by', 'assigned_to'] }).then((results) => {
    let resultsObj = results;

    return res.json(resultsObj);
  });
});

router.get('/new', (req, res) => {
  return res.send('/api/card/new smoke test');
});

router.get('/:id/edit', (req, res) => {
  new Card()
    .where({ id: req.params.id })
    .fetchAll({ withRelated: ['priorities', 'statuses', 'created_by', 'assigned_to'] })
    .then((results) => {
      let resultsObj = results.toJSON();

      return res.json(resultsObj);
    });
});

router.delete('/:id', (req, res) => {
  new Card({
    id: req.params.id,
  })
    .fetch()
    .then((card) => {
      let cardObj = card.toJSON();
      if (req.user.id === cardObj.created_by) {
        new Card({
          id: req.params.id,
        })
          .destroy()
          .then(() => {
            return res.redirect(`/`);
          });
      } else {
        return res.send('brah this aint yours');
      }
    });
});

module.exports = router;

// router.get('/', (req, res) => {
//   return res.json({ hi: 'test' });
// });

// router.get('/', (req, res) => {
//   new Card()
//     .fetchAll({
//       withRelated: ['priorities', 'statuses', 'created_by', 'assigned_to'],
//     })
//     .then((cards) => {
//       cardList = cards.models;
//       cards = [];

//       cardList.forEach((card) => {
//         let relations = card.relations;
//         const priorities = relations.priorities.attributes;
//         const statuses = relations.statuses.attributes;
//         const created_by = relations.created_by.attributes;
//         const assigned_to = relations.assigned_to.attributes;

//         const cardData = {
//           id: card.id,
//           title: card.attributes.title,
//           body: card.attributes.body,
//           priorities: priorities.name,
//           priority_id: priorities.id,
//           statuses: statuses.name,
//           status_id: statuses.id,
//           created_by: created_by.first_name,
//           created_by_id: created_by.id,
//           assigned_to: assigned_to.first_name,
//           assigned_to_id: assigned_to.id,
//         };

//         cards.push(cardData);
//       });
//       res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//       res.json(cards);
//     });
// });
