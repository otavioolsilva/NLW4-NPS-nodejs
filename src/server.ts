import express from 'express';

const app = express();

app
    .get("/", (request, response) => {
        return response.json({ message: "Hello World!" });
    })
    .post("/", (request, response) => {
        //Data received
        return response.json({ message: "Dados salvos com sucesso!"});
    });

app.listen(5500, () => console.log("Server is running!"));
