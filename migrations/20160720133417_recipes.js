
exports.up = function(knex) {
  return knex.schema.createTable('recipes', (table) => {
    table.increments();
    table.string('name')
      .notNullable()
      .defaultTo('');
    table.string('style')
      .notNullable()
      .defaultTo('');
    table.text('grains')
      .defaultTo('');
    table.text('hops')
      .defaultTo('');
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
    table.integer('hydro_pre_boil');
    table.integer('hydro_post_boil');
    table.integer('hydro_racked');
    table.integer('hydro_final');
    table.string('yeast_type')
      .notNullable()
      .defaultTo('');
    table.integer('yeast_avg_attenuation');
    table.integer('yeast_optimum_temperature');
    table.boolean('starter')
      .defaultTo('false');
    table.decimal('cost_grains', 5, 2)
      .defaultTo(0);
    table.decimal('cost_hops', 5, 2)
      .defaultTo(0);
    table.decimal('cost_yeast', 5, 2)
      .defaultTo(0);
    table.decimal('cost_other', 5, 2)
      .defaultTo(0);
    table.text('other_notes');
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('recipes');
};
