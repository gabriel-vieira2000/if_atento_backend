import {Knex} from 'knex';

export async function seed(knex:Knex) {
    await knex('Patologia').insert([
        { nomePatologia : 'Infiltração', descricaoPatologia : 'Danos causados em paredes por umidade.'},
        { nomePatologia : 'Carbonatação ou Corrosão do Aço', descricaoPatologia : 'Também conhecido com corrosão das armaduras de aço, é causada por agentes químicos. O concreto, então, atua como protetor do aço, evitando que a estrutura seja acometida por processos corrosivos.'},
        { nomePatologia : 'Deslocamento no revestimento', descricaoPatologia : 'Manifestação patológica caracterizada pela perda de aderência entre peças cerâmicas e substrato ou argamassa. É o descolamento parcial ou total de ladrilhos, pisos e porcelanatos da superfície.'},
        { nomePatologia : 'Fissura ou Trincas', descricaoPatologia : 'Ranhuras que aparecem nas paredes de construções.'},
        { nomePatologia: 'Bolhas', descricaoPatologia: 'São representadas pela presença de água ou ar sob uma película de tinta, gesso ou textura'},
        { nomePatologia: 'Vidro Quebrado', descricaoPatologia: 'Problema Adicional.'},
        { nomePatologia: 'Falta de iluminação', descricaoPatologia: 'Problema Adicional.'},
        { nomePatologia: 'Lixo ou sujeira acumulada', descricaoPatologia: 'Problema adicional.'}
    ]);
}