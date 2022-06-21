import {Knex} from 'knex';

export async function seed(knex:Knex) {
    await knex('Patologia').insert([
        { nomePatologia : 'Rachadura', descricaoPatologia : 'Trincas que aparecem nas paredes de construções.'}
    ]);
}