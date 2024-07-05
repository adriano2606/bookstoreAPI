import express from 'express';
import conectaDB from './config/dbConnect.js';
import routes from './routes/index.js'


// MONGO DB
const conexao = await conectaDB()

conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro)
})

conexao.once("open", () => {
    console.log("Conexão com MongoDB feita com sucesso!")
})

// FIM MONGO DB

const app = express();
routes(app)

export default app;

