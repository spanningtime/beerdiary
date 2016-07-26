'use strict';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ silent: true });
}

const express = require('express');
const path = require('path');
const router = express.Router();
const { camelizeKeys, decamelizeKeys } = require('humps');
const knex = require('../knex');
const bcrypt = require('bcrypt-as-promised');
const ev = require('express-validation');

router.post('/users', (req, res, next) => {
  const {
    email,
    password
  } = req.body;

  knex('users')
    .select(knex.raw('1=1'))
    .where('email', email)
    .first()
    .then((exists) => {
      if (exists) {
        return res
          .status(409)
          .set('Content-Type', 'text/plain')
          .send('Email already exists.');
      }

      return bcrypt.hash(password, 12);
    })
    .then((hashedPassword) => {
      const { firstName, lastName } = req.body;
      const user = { firstName, lastName, email, hashedPassword };
      const newUser = decamelizeKeys(user);

      return knex('users').insert(newUser, '*');
    })
    .then((users) => {
      const user = camelizeKeys(users[0])

      delete user.hashedPassword;

      res.send(user);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
