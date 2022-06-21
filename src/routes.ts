import express from "express";
import knex, {Knex} from "knex";

const routes = express.Router();

routes.get("/", (request,response) => {
    console.log("Servidor Subiu com Sucesso!");
    response.json({
        setor:"Cooperativa",
        tipoPatologia:"Infiltração",
        tempoPatologia:"Viu pela primeira vez",
        urgencia:"Sim",
    });
});

routes.post("/registraPatologiaEncontrada", (request, response) => {
    const dadosPatologia = request.body; 

    console.log(dadosPatologia['setor']);
    return response.json(dadosPatologia);
});

export default routes;