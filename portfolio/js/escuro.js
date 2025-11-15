document.addEventListener("DOMContentLoaded", () => {
    const botao = document.getElementById("escuro");
    const body = document.body;

    const temaSalvo = localStorage.getItem("tema");
    if (temaSalvo === "escuro") {
        body.classList.add("escuro");
    }

    // alternar tema ao clicar
    botao.addEventListener("click", () => {
        body.classList.toggle("escuro");

        if (body.classList.contains("escuro")) {
            localStorage.setItem("tema", "escuro");
        } else {
            localStorage.setItem("tema", "claro");
        }
    });
});
