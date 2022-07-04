const axios = require("axios");

const api = axios.create({
    baseURL:"https://edbf-200-131-11-6.sa.ngrok.io",
});

api.post("/patologias", {
    tipoPatologia: 0,
    tempoPatologia: 1,
    urgencia: 1,
}).then(response => console.log("Sucesso!"))
.catch(error => {
    if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    }
})