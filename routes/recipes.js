'use strict';

const express = require('express');
const path = require('path');
const router = express.Router();
const { camelizeKeys, decamelizeKeys } = require('humps');
const knex = require('../knex');
const bcrypt = require('bcrypt-as-promised');

router.post('/recipes', (req, res, next) => {
  return knex('recipes')
  .insert(req.body, '*')
  .then((recipes) => {
    res.send(recipes[0]);
  })
  .catch((err) => {
    next(err);
  });
});

router.get('/recipes', (req, res, next) => {
  return knex('recipes')
  .orderBy('id', 'desc')
  .then((recipes) => {
    res.send(recipes);
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;
