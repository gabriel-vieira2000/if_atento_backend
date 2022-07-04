import { Knex } from 'knex';

export async function up(knex:Knex){
    return knex.schema.createTable('ExtremidadeAreaSetor', table => {
        table.increments("idExtremidade").primary();
        table.integer("idSetor").references('idSetor').inTable('Setor');
        table.double("latitudeExtremidade").notNullable();
        table.double("longitudeExtremidade").notNullable();
    });
}

export async function down(knex:Knex) {
    return knex.schema.dropTable('ExtremidadeAreaSetor');
}