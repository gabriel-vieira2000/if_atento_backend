import { Knex } from 'knex';

export async function up(knex:Knex){
    return knex.schema.createTable('Setor', table => {
        table.increments("idSetor").primary();
        table.string("nomeSetor").notNullable();
        table.string("latitudeCentro").notNullable();
        table.string("longitudeCentro").notNullable();
    });
}

export async function down(knex:Knex) {
    return knex.schema.dropTable('Setor');
}