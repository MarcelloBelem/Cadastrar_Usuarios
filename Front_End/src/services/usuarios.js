import api from "./api.js";


// Função para pegar todos os usuários da api
async function getAllUsers() {

    //Token salvo no localStorage
    const token = localStorage.getItem("token")

    const response = await api.get("/users", {

        headers: {Authorization: `Bearer ${token}`} //Envia o token para a validação

    })

    console.log(response)

// Verifica o user atual

    //Email salvo no localStorage
    const userEmail = localStorage.getItem("userEmail")

    // Ver o email do localStoragem e compara com o da requisição, se for igual não chama a função de gerar os usuarios e chama a função para mostrar o usuário atual
    response.data.forEach(userData => {
        if (userEmail !== userData.email) {
            renderUserData(userData)
        } else {
            rendercurrentUser(userData.user)
        }
    });

}

function renderUserData(userData) {
    //Manipulando o DOM

    const userId = userData._id
    const userName = userData.user
    const userEmail = userData.email

    //Pega a div em usuarios
    const usersList = document.getElementById("usersList");

    //Criando a div user
    const userDiv = document.createElement("div");
    userDiv.className = "user";

    //Criando a div user-info
    const userInfoDiv = document.createElement("div");
    userInfoDiv.className = "user-info";

    //Cria os elementos de user-info
    //ID
    const idParagraph = document.createElement("P")
    idParagraph.textContent = `ID: ${userId}`

    //Nome
    const nameParagraph = document.createElement('p');
    nameParagraph.textContent = `User: ${userName}`;
    
    //Email
    const emailParagraph = document.createElement('p');
    emailParagraph.textContent = `Email: ${userEmail}`;

    // Adiciona os parágrafos à div user-info
    userInfoDiv.appendChild(idParagraph);
    userInfoDiv.appendChild(nameParagraph);
    userInfoDiv.appendChild(emailParagraph);

    // Cria o ícone de apagar
    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'fa-solid fa-trash'; // Adiciona a classe do ícone
    deleteIcon.style.cursor = 'pointer' // Adiciona o curso de clique

    // Adiciona o evento de clique no ícone de apagar
    deleteIcon.addEventListener('click', async () => {
        const confirmDelete = confirm(`Tem certeza que deseja excluir o usuário ${userName}`);
        if(confirmDelete) {
            await deleteUser(userId, userDiv);
        }
    });

    // Adiciona a div user-info e o ícone de apagar à div principal do usuário
    userDiv.appendChild(userInfoDiv);
    userDiv.appendChild(deleteIcon);

    // Adiciona a div do usuário à lista de usuários
    usersList.appendChild(userDiv);
}

function rendercurrentUser(user) {
    const currentUser = document.getElementById("currentUser");

    currentUser.innerText = `Usúario Atual: ${user}`;
};

getAllUsers();

//Deleta Usuário

async function deleteUser(userId, userDiv) {
    try {

        const token = localStorage.getItem("token");

        const response = await api.delete(`/users/${userId}`, {

            headers: { Authorization: `Bearer ${token}` }

        });

        if(response.status === 200) {
            alert("Usuário deletado com sucesso!");
            userDiv.remove();// Remove elemento do DOM
        } else {
            alert("Erro ao deletar usuário")
        };

    } catch (error) {
        console.error("Erro ao deletar usuário", error)
        alert("Não foi possivel excluir o usuário")
    }
}