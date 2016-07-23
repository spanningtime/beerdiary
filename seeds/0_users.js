
exports.seed = function(knex) {
  return knex('users').del()
  .then(() => knex('users').insert([{
    id: 1,
    email: 'kniwilliam@gmail.com',
    first_name: 'William',
    last_name: 'Knight',
    hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS'
  },
  {
    id: 2,
    email: 'stanley@assbook.com',
    first_name: 'Stanley',
    last_name: 'Knight',
    hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS'
  }
  ]))
  .then (() => knex.raw(
    "SELECT setval ('users_id_seq', (SELECT MAX(id) FROM users))"
  ));
};
