import express from "express";
import knex from "./database/connection";

const routes = express.Router();

routes.get("/patologias", async (request,response) => {
    console.log("Servidor Subiu com Sucesso!");
    const patologias = await knex('Patologia').select('*');
    response.json(patologias);
});

routes.post("/patologias", async (request, response) => {
    const {
        nomePatologia,
        descricaoPatologia
    } = request.body; 

    await knex('Patologia').insert({
        nomePatologia,
        descricaoPatologia
    });

    const patologias = await knex('Patologia').select('*')
    return response.json(patologias);
});

export default routes;