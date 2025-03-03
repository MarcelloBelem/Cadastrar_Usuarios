require('dotenv').config();
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET

const auth = (req, res, next) => {

    
    const token = req.headers.authorization
    if(!token) {
        res.status(401).json({msg: "Acesso Negado"})
    }

    try {

        const decode = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET)

    } catch (error) {
        return res.status(401).json({msg: "Token Inválido"})
    }

    next()
}

module.exports = auth;