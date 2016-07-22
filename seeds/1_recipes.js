'use strict';

exports.seed = function(knex) {
  return knex('recipes').del()
  .then(() =>
  knex('recipes').insert([{
    id: 1,
    name: 'Oil Can',
    style: 'American-Style Stout',
    grains: '[{grain_type: Marris Otter, grain_amount: 5 lbs}, {grain_type: Black Patent Malt, grain_amount: 3 }]',
    hops: '[{hop_type: Cascade, hop_amount: 2 oz}, {hop_type: Chinook, hop_amount: 2 oz}]',
    target_OG: 1060,
    target_FG: 1030,
    ABV: 5,
    IBUs: 40,
    mash_type: 'Single Infusion',
    mash_temp: 170,
    mash_time: 90,
    hydro_pre_boil: 1080,
    hydro_post_boil: 1060,
    hydro_racked: 1050,
    hydro_final: 1010,
    yeast_type: 'American Ale',
    yeast_avg_attenuation: 75,
    yeast_optimum_temperature: 68,
    starter: true,
    cost_grains: 18,
    cost_hops: 8,
    cost_yeast: 7,
    cost_other: 10,
    other_notes: 'n/a',
    user_id: 1
  }
  ]))
  .then(() => knex.raw(
    "SELECT setval('recipes_id_seq', (SELECT MAX(id) FROM recipes))"
  ));
};
