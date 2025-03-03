const router = require("express").Router();

// Validar token do usuário
const auth = require("../middlewares/auth.js")

const usersController = require("../controllers/usersController");

router.route("/cadastro").post((req, res) => usersController.create(req, res)); // Recebe a requisição e envia para o arquivo que contem as funcionalidades para cada tipo de requisição. Requisição post, enviar/criar dados no servidor

router.route("/login").post((req, res) => usersController.login(req, res)); // Realiza o login do usúario

router.route("/users").get(auth, (req, res) => usersController.getALL(req, res)); // Requisição get, solicita dados do servidor

router.route("/users/:id").get((req, res) => usersController.get(req,res)) // Requisição get por id, solicita dados atraves do id

router.route("/users/:id").delete(auth, (req, res) => usersController.delete(req,res)) // Requisição delete por id, exclui dados atraves do id

module.exports = router;