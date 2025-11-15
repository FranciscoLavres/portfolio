const emailInput = document.getElementById("emailInput");
const enviarBtn = document.getElementById("enviarBtn");
const resultMessage = document.getElementById("resultMessage");

// Função mínima de validação de email
function validateEmail(email) {
    return /^[^\s]+@[^\s]+\.[^\s]+$/.test(email);
}

// Evento de clique
enviarBtn.addEventListener("click", () => {

    console.log("Botão clicado!");
    
    const email = emailInput.value.trim();

    

    if (validateEmail(email)) {
        resultMessage.textContent = "E-mail válido ✓";
        resultMessage.style.color = "green";
        emailInput.style.borderColor = "green"
    } else {
        resultMessage.textContent = "E-mail inválido!";
        resultMessage.style.color = "red";
        emailInput.style.borderColor = "red"
    }
});