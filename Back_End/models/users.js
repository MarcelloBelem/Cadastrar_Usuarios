const mongoose = require("mongoose");

const { Schema } = mongoose;

// Define o esquema do Banco de Dados
const usersSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
}, 
{timestamps: true} // Registra horario de criação e alteração
);

// Define o modelo 'Users', que representa a coleção no banco de dados
const Users = mongoose.model("Users", usersSchema);

// Exporta o modelo, atraves da const users
module.exports = Users;