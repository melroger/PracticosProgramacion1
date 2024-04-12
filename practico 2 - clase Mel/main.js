// Ejercicio 28
document.querySelector("#btn28").addEventListener("click", reservar);

    function reservar() {
        
        let cantidadNoches = Number(document.querySelector("#noches").value);
        let tarjeta = document.querySelector( 'input[name="pago"]:checked');
        let tarjetaValue = tarjeta.value;

        let nochesRegalo = Number(0);
        let montoTotal = Number(0);

        if( cantidadNoches >= 7 ){
            nochesRegalo = 2;
            cantidadNoches = cantidadNoches + nochesRegalo;

        }else if( cantidadNoches >= 3 ){
            nochesRegalo = 1;
            cantidadNoches = cantidadNoches + nochesRegalo;
        }

        montoTotal = cantidadNoches * 40;

        if( tarjetaValue === "tarjeta" && cantidadNoches >= 3 ){
            montoTotal = montoTotal - 40;
            console.log(tarjetaValue);
        }

        document.querySelector("#nochesRegalo").innerHTML = `${nochesRegalo}`;
        document.querySelector("#diasAlojamiento").innerHTML = `${cantidadNoches}`;
        document.querySelector("#montoTotal").innerHTML = `${montoTotal}`;

    }







// Ejercicio 29 y 30

let contadorPersonaje= Number(0);
let jugador1Personaje = "";
let jugador2Personaje = "";

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
            document.querySelector(".tateti-wrapper").classList.add("show-tateti");
            document.querySelector(".seleccionar-personaje").innerHTML = `Turno del jugador 1`;
        }

    });
});



function evaluarPosiciones(jugador){

    let casillerosTodos = [];

    for (let i = 1; i <=9; i++) {
        let casillero = document.querySelector("#cas" + i).textContent;

        casillerosTodos.push(casillero); 
    }
    console.log(casillerosTodos);

    if( (casillerosTodos[0] === jugador && casillerosTodos[1] === jugador && casillerosTodos[2] === jugador ) || 
        (casillerosTodos[3] === jugador && casillerosTodos[4] === jugador && casillerosTodos[5] === jugador ) || 
        (casillerosTodos[6] === jugador && casillerosTodos[7] === jugador && casillerosTodos[8] === jugador ) || 

        (casillerosTodos[0] === jugador  && casillerosTodos[3] === jugador  && casillerosTodos[6] === jugador ) || 
        (casillerosTodos[1] === jugador  && casillerosTodos[4] === jugador  && casillerosTodos[7] === jugador ) || 
        (casillerosTodos[2] === jugador  && casillerosTodos[5] === jugador  && casillerosTodos[8] === jugador ) || 

        (casillerosTodos[0] === jugador && casillerosTodos[4] === jugador  && casillerosTodos[8] === jugador ) || 
        (casillerosTodos[2] === jugador && casillerosTodos[4] === jugador  && casillerosTodos[6] === jugador ) ){ 
            document.querySelector("#ganador").innerHTML = `✨GANADOR: ${jugador}✨`;
            document.querySelector(".resetgame").classList.add("show");
            document.querySelector(".tateti-wrapper").classList.remove("show-tateti");
            document.querySelector(".seleccionar-personaje").classList.add("hide");
    }else if( 
        casillerosTodos[0] !== "" && 
        casillerosTodos[1] !== "" && 
        casillerosTodos[2] !== "" && 
        casillerosTodos[3] !== "" && 
        casillerosTodos[4] !== "" && 
        casillerosTodos[5] !== "" && 
        casillerosTodos[6] !== "" && 
        casillerosTodos[7] !== "" && 
        casillerosTodos[8] !== "" ){
            console.log("no hay ganador");
            document.querySelector("#ganador").innerHTML = `No hay ganador :(`;
            document.querySelector(".resetgame").classList.add("show");
            document.querySelector(".tateti-wrapper").classList.remove("show-tateti");
            document.querySelector(".seleccionar-personaje").classList.add("hide");
    }
}



let contador = Number(0);

document.querySelectorAll(".casillero").forEach( function (seleccionarCasillero){
    seleccionarCasillero.addEventListener("click", function (){

        contador ++;
        let yaTieneClase = this.textContent;

        if(contador % 2 == 0){

            if(yaTieneClase === "" ){
                this.innerHTML = jugador2Personaje;
                document.querySelector(".seleccionar-personaje").innerHTML = `Turno del jugador 1`;
            }
            
            evaluarPosiciones(jugador2Personaje);
        }else{

            if(yaTieneClase === "" ){
                this.innerHTML = jugador1Personaje;
                document.querySelector(".seleccionar-personaje").innerHTML = `Turno del jugador 2`;
            }
            evaluarPosiciones(jugador1Personaje);
        }


    });
});

let reset = document.querySelector(".resetgame");

    reset.addEventListener("click", function (){
        resetGameFunction();
    });


    function resetGameFunction(){

        document.querySelector(".seleccionar-personaje").classList.remove("hide");
        document.querySelector(".seleccionar-personaje").innerHTML = `Selecciona tu personaje<br/> <span class="selecionar-jugador">Jugador 1</span> `;
        contadorPersonaje= 0;
        document.querySelector(".iconos").classList.remove("disable");
        document.querySelector("#ganador").innerHTML = ``;
        document.querySelector(".resetgame").classList.remove("show");

        document.querySelectorAll(".casillero").forEach( function (casilleros){
            casilleros.innerHTML = "";
        });

        document.querySelectorAll(".iconos li").forEach( function (seleccionarPersonaje){
            seleccionarPersonaje.classList.remove("disable");
        });

    }