// Ejercicio 29



let finalizado = false;

function evaluarPosiciones(jugador){


    let casillerosTodos = [];


    for (let i = 1; i <=9; i++) {
        let casillero = document.querySelector("#cas" + i).classList.contains(jugador);
        casillerosTodos.push(casillero); 
    }


    if( (casillerosTodos[0] && casillerosTodos[1] && casillerosTodos[2]) || 
        (casillerosTodos[3] && casillerosTodos[4] && casillerosTodos[5]) || 
        (casillerosTodos[6] && casillerosTodos[7] && casillerosTodos[8]) || 

        (casillerosTodos[0] && casillerosTodos[3] && casillerosTodos[6]) || 
        (casillerosTodos[1] && casillerosTodos[4] && casillerosTodos[7]) || 
        (casillerosTodos[2] && casillerosTodos[5] && casillerosTodos[8]) || 

        (casillerosTodos[0] && casillerosTodos[4] && casillerosTodos[8]) || 
        (casillerosTodos[2] && casillerosTodos[4] && casillerosTodos[6]) ){ 
            document.querySelector("#ganador").innerHTML= `ganador: ${jugador}`;
            finalizado = true;
            document.querySelector(".resetgame").classList.add("show");
    }

}



let contador= Number(0);

document.querySelectorAll(".casillero").forEach( function (seleccionarCasillero){
    seleccionarCasillero.addEventListener("click", function (){
        contador ++;

        if(contador % 2 == 0){
            let yaTieneClase = this.classList.contains("jugador1")
            if(yaTieneClase){

            }else{
                this.classList.add("jugador2");
            }
            
            evaluarPosiciones("jugador2");
        }else{
            let yaTieneClase = this.classList.contains("jugador2")
            if(yaTieneClase){
            }else{
                this.classList.add("jugador1");
            }
            evaluarPosiciones("jugador1");
        }


    });
});

let reset = document.querySelectorAll(".resetgame");

reset.addEventListener("click", function (){

});
