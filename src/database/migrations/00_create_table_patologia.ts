import { Knex } from 'knex';

export async function up(knex:Knex){
    return knex.schema.createTable('Patologia', table => {
        table.increments("idPatologia").primary();
        table.string("nomePatologia").notNullable();
        table.string("descricaoPatologia")
    });
}

export async function down(knex:Knex) {
    return knex.schema.dropTable('Patologia');
}