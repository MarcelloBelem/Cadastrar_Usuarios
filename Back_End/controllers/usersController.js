    require('dotenv').config();
    const UsersModel = require("../models/users");
    const bcrypt = require("bcryptjs")
    const JWt = require("jsonwebtoken")

    // Funcionalidades das nossas requisições
    const JWT_SECRET = process.env.JWT_SECRET;

    const usersController = {

        // Função - Cadastrar Usuários
        create: async(req, res) => {
            try {

                const {user, email, password} = req.body; // Pegas as informações da requisição

                //Verifica email ja existente
                const checkUser = await UsersModel.findOne({email});
                if (checkUser) {
                    return res.status(400).json({msg: "E-mail já cadastrado!"})
                }

                //Criptografa a senha
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(password, salt);

                const newUser = await UsersModel.create({
                    user,
                    email,
                    password: hashedPassword,
                }) // Cria o registro no banco de dados

                res.status(201).json({newUser, msg: "Cadastro criado com sucesso!"}) // Responde a requisição
                
            } catch (error) {
                console.log(error);
            };
        },

        // Função - Login do Usúario
        login: async (req, res) => {
            try {
                
                const{email, password} = req.body;

                // Verificar se o usúario existe
                const user = await UsersModel.findOne({email});
                if (!user) {
                    return res.status(404).json({msg: "Usúario não encontrado"});
                };

                // Verificar se a senha está correta
                const isMatch = await bcrypt.compare(password, user.password);
                if(!isMatch) {
                    return res.status(400).json({msg: "Senha incorreta"})
                }

                // Gera o Token JWT
                const token = JWt.sign({id: user.id}, JWT_SECRET, {expiresIn: "10m"})
                

                res.status(200).json({user: {id: user._id, email: user.email, user: user.user}, token});

            } catch (error) {
                console.log(error)
            }
        },

        // Função - Resgatar todos os Usuários
        getALL: async (req, res) => {
            try {
                
                const users = await UsersModel.find().select('-password'); // Pega todos os registro, menos o password

                res.json(users); // Retorna os registros

            } catch (error) {
                console.log(error);
                res.status(500).json({error: 'Erro ao buscar usuário'})
            }
        },

        //Função - Resgatar Usuários selecionado
        get: async(req, res) => {
            try {

                const id = req.params.id;
                const users = await UsersModel.findById(id);

                if(!users) {
                    res.status(404).json({msg: "Usúario não encontrado"});
                    return;
                };

                res.json(users);
            
            } catch (error) {
                console.log(error)
            }
        },

        //Função - Deletar Usuários
        delete: async(req, res) => {
            try {

                const id = req.params.id;
                const users = await UsersModel.findById(id);

                if(!users) {
                    res.status(404).json({msg: "Usúario não encontrado"});
                    return;
                };

                const deleteUsers = await UsersModel.findByIdAndDelete(id);

                res.status(200).json({deleteUsers, msg: "Usúario excluido com sucesso"})
                
            } catch (error) {
                console.log(error)
            }
        }
    };

    module.exports = usersController;