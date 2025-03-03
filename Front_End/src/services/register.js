import api from "./api.js"

document.getElementById("form-register").addEventListener("submit", async function (event) {
    event.preventDefault(); // Impede o recarregamento da página

    // Pega os valores dos inputs
    const user = document.getElementById("userID").value;
    const email = document.getElementById("emailID").value;
    const password = document.getElementById("passID").value;

    try {

        // Enviando dados para a API
        const response = await api.post("/cadastro", {
            user,
            email,
            password
        });

        alert("Cadastro realizado com sucesso!")
        window.location.href = "src/pages/login.html";
        
        
    } catch (error) {
        console.error("Erro ao cadastrar:", error)
        alert(`${error.response ? error.response.data.msg : "Falha na conexão"}`)
    }
})