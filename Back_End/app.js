// Importações das bibliotecas necessárias
const express = require("express");
const cors = require("cors");

const app = express(); // Inicializa o servidor Express

// Adicionando o cors para permite a requisição do outros dominio
app.use(cors());

// Configura o Express para interpretar requisições no formato JSON
app.use(express.json());

// Conexão com o banco de Dados
const conn = require("./db/conn");

conn() // Executa a função main do arquivo conn.js

// Routes
const routes = require("./routes/router"); // Chama o router do arquivo router.js

app.use('/api', routes); // Rotas serão definidas apos /api/rotaexemplo

//Inicia o servidor na porta 3000
app.listen(3000, function() {
    console.log("Servidor Rodando!")
});