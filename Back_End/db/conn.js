require('dotenv').config();
const mongoose = require("mongoose");

// Verifica a conexão do Banco de Dados com a Aplicação
async function main() {
    try {
        
        await mongoose.connect(process.env.MONGO_URL);

        console.log("Conectado ao Banco de Dados")
    } catch (error) {
        console.log(`Error ${error}`);
    }
};

// Exporta a função main
module.exports = main;