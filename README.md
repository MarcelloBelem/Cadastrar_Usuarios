Cadastro de Usuários
Este é um sistema simples de cadastro de usuários, onde é possível criar, visualizar, fazer login e excluir usuários. A aplicação é dividida em duas partes: o back-end, desenvolvido com Node.js e Express, e o front-end, que utiliza HTML, CSS e JavaScript, sendo gerado pelo Vite.

Funcionalidades
Cadastro de usuários: Crie um novo usuário fornecendo um nome, email e senha. As senhas são armazenadas de forma segura, com criptografia.
Login de usuários: Realize o login utilizando o email e senha cadastrados.
Visualização de usuários: Lista todos os usuários cadastrados, com a possibilidade de visualização de detalhes.
Exclusão de usuários: Exclusão de usuários cadastrados a partir do seu ID.
Tecnologias Utilizadas
Back-end:
Node.js
Express
MongoDB (para persistência de dados)
bcryptjs (para criptografia de senhas)
jsonwebtoken (para autenticação via JWT)
Front-end:
HTML
CSS
JavaScript
Vite (para build e otimização)

Pré-requisitos
Antes de rodar o projeto, você precisa ter o Node.js e o MongoDB instalados em sua máquina. Para rodar a aplicação, siga os seguintes passos:

Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/MarcelloBelem/Cadastrar_Usuarios.git
Acesse o diretório do projeto:

bash
Copiar
Editar
cd Cadastrar_Usuarios
Instale as dependências:

Para o back-end:

bash
Copiar
Editar
cd backend
npm install
Para o front-end:

bash
Copiar
Editar
cd frontend
npm install
Crie o arquivo .env na raiz do back-end com as seguintes variáveis:

ini
Copiar
Editar
JWT_SECRET=seu_segredo_aqui
MONGO_URL=sua_url_do_banco_aqui
Para rodar o back-end:

bash
Copiar
Editar
npm run dev
Para rodar o front-end:

bash
Copiar
Editar
npm run dev
O front-end estará disponível na URL que aparecerá no terminal (geralmente http://localhost:3000 ou http://localhost:5173).

Endpoints da API
1. Cadastrar Usuário (POST)
URL: /api/cadastro
Body:
json
Copiar
Editar
{
  "user": "Nome do Usuário",
  "email": "email@exemplo.com",
  "password": "senha123"
}
Resposta: Status 201 e dados do novo usuário.
2. Login de Usuário (POST)
URL: /api/login
Body:
json
Copiar
Editar
{
  "email": "email@exemplo.com",
  "password": "senha123"
}
Resposta: Token JWT para autenticação e dados do usuário.
3. Listar Todos os Usuários (GET)
URL: /api/users
Autenticação: Requer token JWT no cabeçalho.
Resposta: Lista de todos os usuários (sem a senha).
4. Visualizar Usuário por ID (GET)
URL: /api/users/:id
Resposta: Dados do usuário com o ID fornecido.
5. Excluir Usuário (DELETE)
URL: /api/users/:id
Autenticação: Requer token JWT no cabeçalho.
Resposta: Status 200 e mensagem de sucesso.
Como Contribuir
Faça um fork deste repositório.
Crie uma branch com suas alterações (git checkout -b feature/novofeature).
Faça o commit das suas alterações (git commit -am 'Adiciona nova feature').
Envie para o repositório remoto (git push origin feature/novofeature).
Abra um Pull Request.
Licença
Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.
