//Selecionando elementos
const emailInput = document.querySelector("#emailInput")
const resultMessage = document.querySelector("#resultMessage")
const emailForm = document.querySelector("#emailForm")

//  Um evento que controla/ativa dps da submissao do form

emailForm.addEventListener("submit", function (event) {
    event.preventDefault();


    const email = emailInput.value;

    //Validar email    
    const isValid = validateEmail(email);

    if (isValid) {
        resultMessage.textContent = "OK!"
        resultMessage.style.color = "green"
    } else {
        resultMessage.textContent = "email invalido"
        resultMessage.style.color = "red"
    }
});

// Função validar emauils

const validateEmail = (email) => {
    //Padrão do email: TEXTO@TEXTO.TEXTO
    const regex = /^[^\s]+@[^\s]+\.[^\s]+$/;
    return regex.test(email);
};