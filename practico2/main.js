// Ejercicio 29

let contadorPersonaje= Number(0);
let jugador1Personaje = "&#128520";
let jugador2Personaje = "&#128520";

document.querySelectorAll(".iconos li").forEach( function (seleccionarPersonaje){

    seleccionarPersonaje.addEventListener("click", function (){
        
        contadorPersonaje ++;
        let iconoSeleccionado = this.textContent;

        this.classList.add("disable");

        if( contadorPersonaje === 1 ){
            jugador1Personaje = iconoSeleccionado;
            console.log("jugador1Personaje: " + jugador1Personaje);
            document.querySelector(".selecionar-jugador").innerHTML = "Jugador 2";
            
        }else if( contadorPersonaje >= 2 ){
            jugador2Personaje = iconoSeleccionado;
            console.log("jugador2Personaje: " + jugador2Personaje);
            document.querySelector(".iconos").classList.add("disable");
        }

    });
});




let finalizado = false;

function evaluarPosiciones(jugador){


    let casillerosTodos = [];

    for (let i = 1; i <=9; i++) {
        let casillero = document.querySelector("#cas" + i).textContent;

        casillerosTodos.push(casillero); 
    }


    if( (casillerosTodos[0] === jugador && casillerosTodos[1] === jugador && casillerosTodos[2] === jugador ) || 
        (casillerosTodos[3] === jugador && casillerosTodos[4] === jugador && casillerosTodos[5] === jugador ) || 
        (casillerosTodos[6] === jugador && casillerosTodos[7] === jugador && casillerosTodos[8] === jugador ) || 

        (casillerosTodos[0] === jugador  && casillerosTodos[3] === jugador  && casillerosTodos[6] === jugador ) || 
        (casillerosTodos[1] === jugador  && casillerosTodos[4] === jugador  && casillerosTodos[7] === jugador ) || 
        (casillerosTodos[2] === jugador  && casillerosTodos[5] === jugador  && casillerosTodos[8] === jugador ) || 

        (casillerosTodos[0] === jugador && casillerosTodos[4] === jugador  && casillerosTodos[8] === jugador ) || 
        (casillerosTodos[2] === jugador && casillerosTodos[4] === jugador  && casillerosTodos[6] === jugador ) ){ 
            document.querySelector("#ganador").innerHTML = `ganador: ${jugador}`;
            finalizado = true;
            document.querySelector(".resetgame").classList.add("show");
    }

}



let contador= Number(0);

document.querySelectorAll(".casillero").forEach( function (seleccionarCasillero){
    seleccionarCasillero.addEventListener("click", function (){

        contador ++;
        let yaTieneClase = this.textContent;

        if(contador % 2 == 0){

            if(yaTieneClase === "" ){
                this.innerHTML = jugador2Personaje;
            }
            
            evaluarPosiciones(jugador2Personaje);
        }else{

            if(yaTieneClase === "" ){
                this.innerHTML = jugador1Personaje;
            }
            evaluarPosiciones(jugador1Personaje);
        }


    });
});

let reset = document.querySelectorAll(".resetgame");
