const express = require('express');
const router = express.Router();
const knex = require('../database/knex');
// const verify = require('../middleware/verify');
const passport = require('passport');
const Card = require('../database/models/Card');
const User = require('../database/models/User');

router.get('/', (req, res) => {
  new Card()
    .fetchAll({
      withRelated: ['priorities', 'statuses', 'created_by', 'assigned_to'],
    })
    .then((cards) => {
      cardList = cards.models;
      cards = [];

      cardList.forEach((card) => {
        let relations = card.relations;
        const priorities = relations.priorities.attributes;
        const statuses = relations.statuses.attributes;
        const created_by = relations.created_by.attributes;
        const assigned_to = relations.assigned_to.attributes;

        const cardData = {
          id: card.id,
          title: card.attributes.title,
          body: card.attributes.body,
          priority: priorities.name,
          priority_id: priorities.id,
          status: statuses.name,
          status_id: statuses.id,
          created_by: created_by.first_name,
          created_by_id: created_by.id,
          assigned_to: assigned_to.first_name,
          assigned_to_id: assigned_to.id,
        };

        cards.push(cardData);
      });
      res.json(cards);
    });
});

router.post('/', (req, res) => {
  console.log('$%$@##$^#@^ youve reached the post');
  new Card({
    title: req.body.title,
    body: req.body.body,
    priority_id: req.body.priority_id,
    status_id: req.body.status_id,
    created_by: req.body.created_by,
    assigned_to: req.body.assigned_to,
  })
    .save()
    .then((result) => {
      return res.json(result);
    });
});

// router.post('/', (req, res) => {

//   new User
//   .where({id:req.body.created_by})
//   .fetch()
//   .then((created) =>{
//     let createdUser = created.first_name
//     console.log('@%@$%$^%#$^', created)
//     new Card({
//       title: req.body.title,
//       body: req.body.body,
//       priority_id: req.body.priority_id,
//       status_id: req.body.status_id,
//       // created_by: req.body.created_by,
//       created_by: createdUser,
//       assigned_to: req.body.assigned_to,
//     })
//       .save()
//       .then((result) => {
//         return res.json(result);
//       });
//   })
// });

router.delete('/', (req, res) => {
  console.log(req.body.id);
  new Card({
    id: req.body.id,
  })
    .destroy()
    .then(() => {
      new Card()
        .fetchAll({
          withRelated: ['priorities', 'statuses', 'created_by', 'assigned_to'],
        })
        .then((cards) => {
          cardList = cards.models;
          cards = [];

          cardList.forEach((card) => {
            let relations = card.relations;
            const priorities = relations.priorities.attributes;
            const statuses = relations.statuses.attributes;
            const created_by = relations.created_by.attributes;
            const assigned_to = relations.assigned_to.attributes;

            const cardData = {
              id: card.id,
              title: card.attributes.title,
              body: card.attributes.body,
              priority: priorities.name,
              priority_id: priorities.id,
              status: statuses.name,
              status_id: statuses.id,
              created_by: created_by.first_name,
              created_by_id: created_by.id,
              assigned_to: assigned_to.first_name,
              assigned_to_id: assigned_to.id,
            };

            cards.push(cardData);
          });
          res.json(cards);
        });
      // return res.redirect('/api/cards/');
    });
});

router.post('/edit', (req, res) => {
  const body = req.body;
  console.log(body);
  new Card({
    id: req.body.id,
  })
    .destroy()
    .then(() => {
      // new Card({ id: body.id })
      //   .save(
      //     {
      //       id: body.id,
      //       title: req.body.title,
      //       body: req.body.body,
      //       priority_id: req.body.priority_id,
      //       status_id: req.body.status_id,
      //       created_by: req.body.created_by,
      //       assigned_to: req.body.assigned_to,
      //     },
      //     { patch: true },
      //   )
      //   .then((card) => {
      //     res.json(card);
      //   });
      console.log('$%$@##$^#@^ youve reached the post');
      console.log(body);
      new Card({
        id: body.id,
        title: req.body.title,
        body: req.body.body,
        priority_id: req.body.priority_id,
        status_id: req.body.status_id,
        created_by: req.body.created_by,
        assigned_to: req.body.assigned_to,
      })
        .save(null, { method: 'insert' })
        .then((result) => {
          // return res.json(result);
          new Card()
            .fetchAll({
              withRelated: ['priorities', 'statuses', 'created_by', 'assigned_to'],
            })
            .then((cards) => {
              cardList = cards.models;
              cards = [];

              cardList.forEach((card) => {
                let relations = card.relations;
                const priorities = relations.priorities.attributes;
                const statuses = relations.statuses.attributes;
                const created_by = relations.created_by.attributes;
                const assigned_to = relations.assigned_to.attributes;

                const cardData = {
                  id: card.id,
                  title: card.attributes.title,
                  body: card.attributes.body,
                  priority: priorities.name,
                  priority_id: priorities.id,
                  status: statuses.name,
                  status_id: statuses.id,
                  created_by: created_by.first_name,
                  created_by_id: created_by.id,
                  assigned_to: assigned_to.first_name,
                  assigned_to_id: assigned_to.id,
                };

                cards.push(cardData);
              });
              res.json(cards);
            });
          // return res.redirect('/api/cards/');
        });
    });
});

module.exports = router;

// router.get('/', (req, res) => {
//   return res.json({ hi: 'test' });
// });
