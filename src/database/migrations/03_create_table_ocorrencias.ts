import { Knex } from 'knex';

export async function up(knex:Knex){
    return knex.schema.createTable('Ocorrencia', table => {
        table.increments("idOcorrencia").primary();
        table.integer("idPatologia").references('idPatologia').inTable('Patologia')
        table.integer("idSetor").references('idSetor').inTable('Setor');
        table.dateTime("dataHoraRegistro");
        table.string("haQuantoTempoVe").notNullable();
        table.integer("achaUrgente").notNullable();
        table.string("observacoes");
    });
}

export async function down(knex:Knex) {
    return knex.schema.dropTable('Ocorrencia');
}