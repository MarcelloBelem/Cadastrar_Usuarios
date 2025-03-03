// Arquivo que vai ta centralizando todas as rotas

const router = require("express").Router();

// Users router
const usersRouter = require("./users");

// Todas as rotas viram aparti de /
router.use("/", usersRouter);

module.exports = router;