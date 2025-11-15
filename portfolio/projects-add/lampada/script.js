const lamp = document.getElementById("lamp");
const body = document.body;

lamp.addEventListener("click", function (){
    
    if (lamp.src.includes("lamp_off.png")){
        lamp.src = "assets/lamp_on.png";
        body.classList.add("ligado");
    }
    
    else {
        lamp.src = "assets/lamp_off.png";
        body.classList.remove("ligado");
    }
})
