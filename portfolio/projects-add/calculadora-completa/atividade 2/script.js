let display = document.getElementById("display");

// Funções principais

function pressed(value) {
    display.textContent += value;
}

function clearAll() {
    display.textContent = "";
}

function backspace() {
    display.textContent = display.textContent.slice(0, -1);
}

function calculate() {
    try {
        if (display.textContent.trim() === "") return;

        let result = eval(display.textContent);
        display.textContent = result;
    } catch (error) {
        display.textContent = "Erro";
        setTimeout(() => display.textContent = "", 1500);
    }
}


// Animação dos botões

function flashButton(button) {
    if (!button) return;

    button.style.backgroundColor = "red";

    setTimeout(() => {
        button.style.backgroundColor = "";
    }, 150); 
}



// Clique do mouse
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("mousedown", () => {
        btn.style.backgroundImage = "linear-gradient(gray, red)";
    });

    btn.addEventListener("mouseup", () => {
        btn.style.backgroundImage = "";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.backgroundImage = "";
    });
});




// Leitura do teclado

document.addEventListener("keydown", (event) => {
    const key = event.key;

    const button = [...document.querySelectorAll("button")]
        .find(btn => btn.textContent.trim() === key || 
            (key === "Enter" && btn.textContent === "=") ||
            (key === "Backspace" && btn.textContent === "<") ||
            (key === "Delete" && btn.textContent === "C")
        );

    flashButton(button);

    if (!isNaN(key)) {
        pressed(key);
    }

    if (["+","-","*","/","."].includes(key)) {
        pressed(key);
    }

    if (key === "Enter") {
        calculate();
    }

    if (key === "Backspace") {
        backspace();
    }

    if (key === "Delete") {
        clearAll();
    }
});

