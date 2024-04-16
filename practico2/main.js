// Ejercicio 2

document.querySelector("#btn2").addEventListener("click", ejercicio2);

    function ejercicio2() {

        let input2 = Number(document.querySelector("#input2").value);

        if( input2 > 10 )
        {
            document.querySelector("#resultado2").innerHTML = "Es mayor a 10!!!";
        }

    }



// Ejercicio 4

document.querySelector("#btn4").addEventListener("click", ejercicio4);

    function ejercicio4() {

        let input4 = Number(document.querySelector("#input4").value);

        if( input4 < 0 )
        {
            input4 = input4 * -1;
            document.querySelector("#resultado4").innerHTML = input4;
        }else{
            document.querySelector("#resultado4").innerHTML = input4;
        }

    }



// Ejercicio 6

document.querySelector("#btn6").addEventListener("click", ejercicio6);

    function ejercicio6() {

        let input6 = Number(document.querySelector("#input6").value);
        let multiplo7 = input6 % 7;
        let multiplo3 = input6 % 3;

        if( multiplo7 === 0 && multiplo3 === 0 )
        {
            document.querySelector("#resultado6").innerHTML = "Es multiplo de 7 y de 3";
        }else{
            document.querySelector("#resultado6").innerHTML = "NO es multiplo de 7 y de 3";
        }

    }


// Ejercicio 8

document.querySelector("#btn8").addEventListener("click", ejercicio8);

    function ejercicio8() {

        let input8 = Number(document.querySelector("#input8").value);

        if( input8 > 30)
        {
            document.querySelector("#resultado8").innerHTML = "Es mayor que treinta";
        }else if( input8 <= 30 && input8 >= 10)
        {
            document.querySelector("#resultado8").innerHTML = "Entre diez y treinta";
        }else
        {
            document.querySelector("#resultado8").innerHTML = "menor que 10";
        }  

    }



// Ejercicio 10

document.querySelector("#btn10").addEventListener("click", ejercicio10);

    function ejercicio10() {

        let input10numero1 = Number(document.querySelector("#input10numero1").value);
        let input10numero2 = Number(document.querySelector("#input10numero2").value);
        let resultado10 = Number(0);

        if( input10numero1 >= input10numero2)
        {
            resultado10 = input10numero1 - input10numero2;
        }else
        {
            resultado10 = input10numero2 - input10numero1;
        }  

        document.querySelector("#resultado10").innerHTML = resultado10;

    }



// Ejercicio 12

document.querySelector("#btn12").addEventListener("click", ejercicio12);

    function ejercicio12() {

        let input12 = document.querySelector("#input12").value;

        if( input12 === "a" || input12 === "e" || input12 === "i" || input12 === "o" || input12 === "u")
        {
              document.querySelector("#resultado12").innerHTML = "Es vocal";
        }else
        {
            document.querySelector("#resultado12").innerHTML = "No es vocal";
        }  

    }



// Ejercicio 14

document.querySelector("#btn14").addEventListener("click", ejercicio14);

    function ejercicio14() {

        let input14 = Number(document.querySelector("#input14").value);

        let clientePlus = document.querySelector( 'input[name="clientePlus"]:checked');

        if(clientePlus){
            input14 = input14*2;
        }

        if( input14 >= 60000 )
        {
              document.querySelector("#resultado14").innerHTML = "Europa (destino lejano)";
              console.log("millas" + input14)
        }
        else if( input14 >= 30000 )
        {
              document.querySelector("#resultado14").innerHTML = "América del Norte (destino intermedio)";
        }else if( input14 >= 15000 )
        {
              document.querySelector("#resultado14").innerHTML = "América del Sur (destino cercano)";
        }else
        {
              document.querySelector("#resultado14").innerHTML = "No tienes las millas suficientes :(";
        }

        

    }

// Ejercicio 16

document.querySelector("#btn16").addEventListener("click", ejercicio16);

    function ejercicio16() {

        let input16a = Number(document.querySelector("#input16a").value);
        let input16b = Number(document.querySelector("#input16b").value);
        let input16c = Number(document.querySelector("#input16c").value);

        if( input16a > input16b &&  input16a > input16c )
        {
              document.querySelector("#resultado16").innerHTML = "SI!";
        }
        else{
            document.querySelector("#resultado16").innerHTML = "NO";
        }


    }


// Ejercicio 18
let contador18 = Number(0);

let value18numero1 = Number(0);
let value18numero2 = Number(0);
let value18numero3 = Number(0);
let value18numero4 = Number(0);
let value18numero5 = Number(0);
let value18numero6 = Number(0);

document.querySelector("#sumar18").addEventListener("click", ejercicio18);

    function ejercicio18() {

        contador18++;
        let value18 = Number(document.querySelector("#input18").value);

        if(contador18 === 1){
            value18numero1 = value18;
            document.querySelector("#v1").innerHTML = `${value18numero1}`;
        }else if(contador18 === 2){
            value18numero2 = value18;
            document.querySelector("#v2").innerHTML = `${value18numero2}`;
        }else if(contador18 === 3){
            value18numero3 = value18;
            document.querySelector("#v3").innerHTML = `${value18numero3}`;
        }else if(contador18 === 4){
            value18numero4 = value18;
            document.querySelector("#v4").innerHTML = `${value18numero4}`;
        }else if(contador18 === 5){
            value18numero5 = value18;
            document.querySelector("#v5").innerHTML = `${value18numero5}`;
        }else if(contador18 === 6){
            value18numero6 = value18;
            document.querySelector("#v6").innerHTML = `${value18numero6}`;
            document.querySelector("#sumar18").disabled = true;
            document.querySelector("#btn18").disabled = false;
            let resultado = value18numero1 + value18numero2 + value18numero3 + value18numero4 + value18numero5 + value18numero6;
            document.querySelector("#resultado18").innerHTML = `${resultado}`;
        }


    }

// Ejercicio 20
document.querySelector("#btn20").addEventListener("click", ejercicio20);

    function ejercicio20() {
        
        let azucar = Number(document.querySelector("#azucar").value);
        let harina = Number(document.querySelector("#harina").value);
        let aceite = Number(document.querySelector("#aceite").value);
        let agua = Number(document.querySelector("#agua").value);
        let harinaCantidad = parseInt(harina/100);
        let recetas = Number.POSITIVE_INFINITY;

        console.log(harinaCantidad)

        if( azucar >= harinaCantidad){
            recetas = harinaCantidad;
        }else{
            recetas = azucar;
        }

        if( recetas >= aceite){
            recetas = aceite;
        }

        if( recetas >= agua){
            recetas = agua;
        }

        document.querySelector("#resultado20").innerHTML = `${recetas}`;

    }


// Ejercicio 22
document.querySelector("#btn22").addEventListener("click", ejercicio22);

    function ejercicio22() {
        
        let input22 = Number(document.querySelector("#input22").value);
        let tarjeta22 = document.querySelector( 'input[name="pago22"]:checked');

        if( input22 < 10000 && tarjeta22 ){
            input22 = input22 - input22*0.04;
        }

        document.querySelector("#resultado22").innerHTML = `${input22}`;

    }

// Ejercicio 24      

let totalSueldo = Number(0);
let aCobrar = Number(0);
let sueldoMasBajo = Number.POSITIVE_INFINITY;

document.querySelector("#btn24").addEventListener("click", ejercicio24);

    function ejercicio24() {
        
        aCobrar ++;
        let sueldo = Number(document.querySelector("#sueldos").value);

        totalSueldo = totalSueldo + sueldo;

        if( sueldo <= sueldoMasBajo){
            console.log("entor");
            sueldoMasBajo = sueldo;
        }
        
        document.querySelector("#totalSueldos").innerHTML = `${totalSueldo}`;
        document.querySelector("#aCobrar").innerHTML = `${aCobrar}`;
        document.querySelector("#suldoMasBajo").innerHTML = `${sueldoMasBajo}`;


    }



// Ejercicio 26
document.querySelector("#btn26").addEventListener("click", reservar);

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



// Ejercicio 28      

let totalEquipo1 = Number(0);
let totalEquipo2 = Number(0);
let ronda = Number(0);
document.querySelector("#btn28").addEventListener("click", ejercicio28);

    function ejercicio28() {
        
        ronda ++;
        let equipo1 = Number(document.querySelector("#equipo1").value);
        let equipo2 = Number(document.querySelector("#equipo2").value);

        totalEquipo1 = totalEquipo1 + equipo1;
        totalEquipo2 = totalEquipo2 + equipo2;

        console.log("totalEquipo1: " + totalEquipo1 + " totalEquipo2: " + totalEquipo2)
        
        document.querySelector("#nRonda").innerHTML = `${ronda}`;

        if( totalEquipo1 >= 30 ||  totalEquipo2 >= 30){
            document.querySelector("#resultado").innerHTML = `Partida finalizada <br> Equipo 1: ${totalEquipo1} <br> Equipo 2: ${totalEquipo2}`;
            document.querySelector("#btn28").disabled = true;

        }else{
            document.querySelector("#equipo1").value = 0;
            document.querySelector("#equipo2").value = 0;
        }


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