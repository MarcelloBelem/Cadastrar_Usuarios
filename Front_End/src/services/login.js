import api from "./api.js";

document.getElementById("form-login").addEventListener("submit", async function (event) {
    event.preventDefault(); // Impede o recarregamento da página

    // Pega os valores dos inputs
    const email = document.getElementById("emailID").value;
    const password = document.getElementById("passID").value;

    try {

        //Enviando dados para a API verificar login
        const response = await api.post("/login", {
            email,
            password
        });

        //Pegando token gerado no login e email do usuário
        const token = response.data.token;
        const userEmail = response.data.user.email

        //Guarda o token no localstorage
        localStorage.setItem("token", token)

        //Guarda informações do usuário
        localStorage.setItem("userEmail", userEmail)

        //Leva para a pagina de usuários
        window.location.href = "Usuarios.html";

        
    } catch (error) {
        console.error("Erro ao logar:", error)
        alert(`${error.response ? error.response.data.msg : "Falha na conexão"}`)
    }
})