
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('name')
      .notNullable()
      .defaultTo('');
    table.string('style')
      .notNullable()
      .defaultTo('');
    table.string('grain_types')
      .defaultTo('');
    table.string('grain_amounts')
      .defaultTo('');
    table.string('hop_amounts')
      .defaultTo('');
    table.decimal('hop_acids', 3, 1);
    table.integer('target_OG');
    table.integer('target_FG');
    table.decimal('ABV', 3, 1);
    table.integer('IBUs');
    table.string('mash_type')
      .notNullable()
      .defaultTo('');
    table.integer('mash_temp')
      .notNullable();
    table.integer('mash_time')
      .notNullable();
    table.integer('hydro_pre-boil');
    table.integer('hydro_post-boil');
    table.integer('hydro_racked');
    table.string('yeast_type')
      .notNullable()
      .defaultTo('');
    table.integer('yeast_avg_attenuation');
    table.integer('yeast_optimum_temperature');
    table.boolean('starter')
      .defaultTo('false');
    table.decimal('cost_grains', 5, 2)
      .defaultTo('0.00');
    table.decimal('cost_hops', 5, 2)
      .defaultTo('0.00');
    table.decimal('cost_other', 5, 2)
      .defaultTo('0.00');
    table.text('other_notes');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('recipes');
};
