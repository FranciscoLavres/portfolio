//DECLARAÇÃO DE VARIÁVEIS

var result = document.getElementById("result");   //campo que vai exibir a or
var btns = document.getElementsByClassName("btn"); //Botões de controle
var btn_reset = document.getElementById("resetar")
var btn_acelerar = document.getElementById("acelerar")
var btn_desacelerar = document.getElementById("desacelerar")

var car_red = document.getElementById("red"); // chama o carro vermelho
var btn_red = document.getElementById("vermelho"); // botão circular vermelho
//var carro_vermelho = 

var car_white = document.getElementById("white"); // chama o carro branco
var btn_white = document.getElementById("branco"); // botão circular branco
//var carro_branco = 





//  BOTÃO DE RESETAR
btn_reset.addEventListener("click", function () {
    result.textContent = "?"  // Envia a cor para a interface
    document.body.style.backgroundColor = "black" // Cor de fundo
    document.body.style.color = "white"

    car_red.style.top = "60px";
    car_red.style.right = "205px"
    car_red.style.height = "50px"



    //O FOR PERCORRE OS BOTOES MUDANDO O DISPLAY DE NONE(OCULTO) PARA BLOCK(MOSTRAR).
    for (i = 0; i <= 2; i++) {
        console.log(i)
        btns[i].style.display = "none";
    }
}
)



//  CARRO VERMELHO!!!

function alt_red() {
    result.textContent = "Vemelho"  // Envia a cor para a interface
    document.body.style.backgroundColor = "red" // Cor de fundo

    //O FOR PERCORRE OS BOTOES MUDANDO O DISPLAY DE NONE(OCULTO) PARA BLOCK(MOSTRAR).
    for (i = 0; i <= 2; i++) {
        console.log(i)
        btns[i].style.display = "block";
    }
    //MOVENDO CARRO
    document.addEventListener("keydown", function (event) {
        console.log(event.key)
        if (event.key == "ArrowUp") {
            console.log("Pressionou a tecla para cima")
            var top = parseInt(window.getComputedStyle(car_red).top);
            console.log(top);
            car_red.style.top = (top - 1) + "px";

            var height = parseInt(window.getComputedStyle(car_red).height);
            console.log(height);
            car_red.style.height = (height - 1) + "px";
        }
        if (event.key == "ArrowDown") {
            console.log("Pressionou a tecla para baixo")
            var top = parseInt(window.getComputedStyle(car_red).top);
            console.log(top);
            car_red.style.top = (top + 1) + "px"
            var height = parseInt(window.getComputedStyle(car_red).height);
            console.log(height);
            car_red.style.height = (height + 1) + "px";
        }
        if (event.key == "ArrowRight") {
            console.log("Pressionou a tecla para direita")

            var right = parseInt(window.getComputedStyle(car_red).right);
            console.log(right);
            car_red.style.right = (right - 1) + "px";
        }
        if (event.key == "ArrowLeft") {
            console.log("Pressionou a tecla para esquerda")

            var right = parseInt(window.getComputedStyle(car_red).right);
            console.log(right);
            car_red.style.right = (right + 1) + "px"
        }
    }
    )
    btn_acelerar.addEventListener("click", function () {
        console.log("Pressionou a tecla para cima")
        var top = parseInt(window.getComputedStyle(car_red).top);
        console.log(top);
        car_red.style.top = (top - 1) + "px";
        var height = parseInt(window.getComputedStyle(car_red).height);
        console.log(height);
        car_red.style.height = (height - 1) + "px";
    })

    btn_desacelerar.addEventListener("click", function () {
        console.log("Pressionou a tecla para baixo")
        var top = parseInt(window.getComputedStyle(car_red).top);
        console.log(top);
        car_red.style.top = (top + 1) + "px"
        var height = parseInt(window.getComputedStyle(car_red).height);
        console.log(height);
        car_red.style.height = (height + 1) + "px";
    })

}

car_red.addEventListener("click", function () {
    alt_red()
})

btn_red.addEventListener("click", function () {
    alt_red()
})




//  CARRO BRANCO!!!

function alt_white() {
    result.textContent = "Branco"  // Envia a cor para a interface
    document.body.style.backgroundColor = "lightgrey" // Cor de fundo
    document.body.style.color = "black" // Cor de fundo

    //O FOR PERCORRE OS BOTOES MUDANDO O DISPLAY DE NONE(OCULTO) PARA BLOCK(MOSTRAR).
    for (i = 0; i <= 2; i++) {
        console.log(i)
        btns[i].style.display = "block";
    }
    
    document.addEventListener("keydown", function (event) {
        console.log(event.key)
        if (event.key == "ArrowUp") {
            console.log("Pressionou a tecla para cima")
            var top = parseInt(window.getComputedStyle(car_white).top);
            console.log(top);
            car_white.style.top = (top - 1) + "px";

            var height = parseInt(window.getComputedStyle(car_white).height);
            console.log(height);
            car_white.style.height = (height - 1) + "px";
        }
        if (event.key == "ArrowDown") {
            console.log("Pressionou a tecla para baixo")
            var top = parseInt(window.getComputedStyle(car_white).top);
            console.log(top);
            car_white.style.top = (top + 1) + "px"
            var height = parseInt(window.getComputedStyle(car_white).height);
            console.log(height);
            car_white.style.height = (height + 1) + "px";
        }
        if (event.key == "ArrowRight") {
            console.log("Pressionou a tecla para direita")

            var left = parseInt(window.getComputedStyle(car_white).left);
            console.log(left);
            car_white.style.left = (left + 1) + "px";
        }
        if (event.key == "ArrowLeft") {
            console.log("Pressionou a tecla para esquerda")

            var left = parseInt(window.getComputedStyle(car_white).left);
            console.log(left);
            car_white.style.left = (left - 1) + "px"
        }
    }
    )

    btn_acelerar.addEventListener("click", function () {
        console.log("Pressionou acelerar")
        var top = parseInt(window.getComputedStyle(car_white).top);
        console.log(top);
        car_white.style.top = (top - 1) + "px";
        var height = parseInt(window.getComputedStyle(car_white).height);
        console.log(height);
        car_white.style.height = (height - 1) + "px";
    })

    btn_desacelerar.addEventListener("click", function () {
        console.log("Pressionou desacelerar")
        var top = parseInt(window.getComputedStyle(car_white).top);
        console.log(top);
        car_white.style.top = (top + 1) + "px"
        var height = parseInt(window.getComputedStyle(car_white).height);
        console.log(height);
        car_white.style.height = (height + 1) + "px";
    })

    
}

car_white.addEventListener("click", function () {
    alt_white()
})

btn_white.addEventListener("click", function () {
    alt_white()
})
