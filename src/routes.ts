import express, { response } from "express";
import knex from "./database/connection";

const routes = express.Router();

interface setorComExtremidades {
    idSetor: Number,
    nomeSetor: String,
    latitudeCentro: Number,
    longitudeCentro: Number,
    extremidadeSetor: [extremidadeSetor]
}

interface extremidadeSetor {
    idExtremidade: Number,
    idSetor: Number,
    latitude: Number,
    longitude: Number
}


routes.get("/patologias", async (request,response) => {
    console.log("Servidor Subiu com Sucesso!");
    const patologias = await knex('Patologia').select('*');
    response.send(patologias);
});

routes.post("/patologias", async (request, response) => {
    const {
        tipoPatologia,
        tempoPatologia,
        urgencia,
        detalhes
    } = request.body;

    console.log(`${tipoPatologia} - ${tempoPatologia} - ${urgencia} - ${detalhes}`);
    await knex('Ocorrencia').insert({
        idSetor:1,
        idPatologia:tipoPatologia,
        haQuantoTempoVe:tempoPatologia,
        dataHoraRegistro:Date.now(),
        achaUrgente:urgencia,
        observacoes:detalhes
    });

    const ocorrencias = await knex('Ocorrencia').select('*')
    return response.json(ocorrencias);
});

routes.get('/setores', async (request, response) => {
    const setores = await knex('Setor').select('*');
    var setoresComExtremidades = Array<setorComExtremidades>;

    setores.forEach(async (item, indiceArray, array) => {
        var {idSetor, nomeSetor, latitudeCentro, longitudeCentro} = item;
        latitudeCentro = Number(latitudeCentro);
        longitudeCentro = Number(longitudeCentro);
        const extremidadesSetores = await knex('ExtremidadeAreaSetor')
        .select('*').where('idSetor',idSetor);
        const extremidadesSetoresTransformada = [
            {name:extremidadesSetores[0].idExtremidade, latitude:extremidadesSetores[0].latitudeExtremidade, longitude:extremidadesSetores[0].longitudeExtremidade},
            {name:extremidadesSetores[1].idExtremidade, latitude:extremidadesSetores[1].latitudeExtremidade, longitude:extremidadesSetores[1].longitudeExtremidade},
            {name:extremidadesSetores[2].idExtremidade, latitude:extremidadesSetores[2].latitudeExtremidade, longitude:extremidadesSetores[2].longitudeExtremidade},
            {name:extremidadesSetores[3].idExtremidade, latitude:extremidadesSetores[3].latitudeExtremidade, longitude:extremidadesSetores[3].longitudeExtremidade},
        ];
        console.log({idSetor, nomeSetor, extremidadesSetoresTransformada})
        const setorComExtremidades = {idSetor, nomeSetor, latitudeCentro, longitudeCentro, extremidadesSetoresTransformada}
        response.send(setorComExtremidades);
    });
    //return response.json('Sucesso');
    //return response.json(extremidadesSetores);
});

export default routes;