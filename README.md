# Cadastro de Usuários
Este é um sistema simples de cadastro de usuários, onde é possível criar, visualizar, fazer login e excluir usuários. A aplicação é dividida em duas partes: o back-end, desenvolvido com Node.js e Express, e o front-end, que utiliza HTML, CSS e JavaScript, sendo gerado pelo Vite.

## Funcionalidades
Cadastro de usuários: Crie um novo usuário fornecendo um nome, email e senha. As senhas são armazenadas de forma segura, com criptografia.
Login de usuários: Realize o login utilizando o email e senha cadastrados.
Visualização de usuários: Lista todos os usuários cadastrados, com a possibilidade de visualização de detalhes.
Exclusão de usuários: Exclusão de usuários cadastrados a partir do seu ID.
Tecnologias Utilizadas

### Back-end:
- **Node.js**
- **Express**
- **MongoDB** (para armazenar dados)
- **bcryptjs** (para criptografia de senhas)
- **jsonwebtoken** (para autenticação via JWT)
### Front-end:
- **HTML**
- **CSS**
- **JavaScript**
- **Vite** (para build e otimização)

# Pré-requisitos
Antes de rodar o projeto, você precisa ter o Node.js instalado em sua máquina, além de uma conta no MongoDB Atlas. Para rodar a aplicação, siga os seguintes passos:

### 1. Clone o repositório:

```bash
git clone https://github.com/MarcelloBelem/Cadastrar_Usuarios.git
```
### 2. Acesse o diretório do projeto:

```bash
cd Cadastrar_Usuarios
```
### 3. Instale as dependências:

#### Para o back-end:

```bash
cd Back_End
npm install
```

#### Para o front-end:

```bash
cd Front_End
npm install
```

#### 4. Crie o arquivo .env na raiz do back-end com as seguintes variáveis:

```ini
JWT_SECRET = "INSIRA_SUA_CHAVE_AQUI"
MONGO_URL = "INSIRA_SUA_URL_DO_BANCO_AQUI"
```
- MONGO_URL: Obtenha a URL de conexão do seu banco no MongoDB Atlas.

- JWT_SECRET: Defina uma chave secreta para assinatura do token JWT.

### 5. Para rodar o back-end:

```bash
npm run dev
```

### 6. Para rodar o front-end:

```bash
npm run dev
```

- O front-end estará disponível na URL http://localhost:3000.

## Endpoints da API
### 1. Cadastrar Usuário (POST)
- #### URL: ```/api/cadastro```
- #### Body:
```json
{
  "user": "Nome do Usuário",
  "email": "email@exemplo.com",
  "password": "senha123"
}
```
**Resposta:** Status 201 e dados do novo usuário.
### 2. Login de Usuário (POST)
- #### URL: /api/login
- #### Body:
```json
{
  "email": "email@exemplo.com",
  "password": "senha123"
}
```
**Resposta:** Token JWT para autenticação e dados do usuário.
### 3. Listar Todos os Usuários (GET)
- #### URL: ```/api/users```
- #### Autenticação: Requer token JWT no cabeçalho.
- **Resposta:** Lista de todos os usuários (sem a senha).
### 4. Visualizar Usuário por ID (GET)
- **Essa rota não é ultilizada**
- #### URL: ```/api/users/:id```
- **Resposta:** Dados do usuário com o ID fornecido.

### 5. Excluir Usuário (DELETE)
- #### URL: ```/api/users/:id```
- #### Autenticação: Requer token JWT no cabeçalho.
- **Resposta:** Status 200 e mensagem de sucesso.

## Licença
**Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.**
