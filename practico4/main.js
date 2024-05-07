// Ejercicio 2
document.querySelector("#btnS2").addEventListener("click", ejercicioS2);
function ejercicioS2() {
    let inputS2 = String(document.querySelector("#inputS2").value.trim());
    let bocalesContador = parseInt(0);

    for(let i = 0; i <= inputS2.length; i ++){
        if( inputS2[i] === "a" || inputS2[i] === "e" || inputS2[i] === "i"  || inputS2[i] === "o"  || inputS2[i] === "u" ){
            bocalesContador ++;
        }
    }
    document.querySelector("#resultado2").innerHTML = bocalesContador;
}


// Ejercicio 4
document.querySelector("#btnS4").addEventListener("click", ejercicioS4);

function ejercicioS4() {
    let inputS4 = String(document.querySelector("#inputS4").value.trim());
    let inputS4segundo = String(document.querySelector("#inputS4segundo").value.trim());
    let incluyeS4 = inputS4.includes(inputS4segundo);

    if(incluyeS4){
        document.querySelector("#resultado4").innerHTML = "Incluye";
    }else{
        document.querySelector("#resultado4").innerHTML = "No incluye";
    }
    
}


// Ejercicio 6
document.querySelector("#btnS6").addEventListener("click", ejercicioS6);

function ejercicioS6() {
    let inputS6 = String(document.querySelector("#inputS6").value.trim());
    let contadorLetrasS6 = inputS6.length;
    let bocalesContadorS6 = parseInt(0);
    let consonantesContadorS6 = parseInt(0);

    if(contadorLetrasS6 >= 10){
        document.querySelector("#resultado6").innerHTML = "ok";
        for(let i = 0; i < inputS6.length; i ++){
            if( inputS6[i] === "a" || inputS6[i] === "e" || inputS6[i] === "i"  || inputS6[i] === "o"  || inputS6[i] === "u" ){
                bocalesContadorS6 ++;
            }else{
                consonantesContadorS6 ++;
            }
        }
        if(bocalesContadorS6 >= consonantesContadorS6){
            document.querySelector("#resultado6").innerHTML = bocalesContadorS6 - consonantesContadorS6;
        }else{
            document.querySelector("#resultado6").innerHTML = consonantesContadorS6 - bocalesContadorS6;
        }

        
    }else{
        document.querySelector("#resultado6").innerHTML = "No es suficiente texto";
    }
   
}

// Ejercicio 8
document.querySelector("#btnS8").addEventListener("click", ejercicioS8);

function ejercicioS8() {

   
}


// Ejercicio 10
document.querySelector("#btnS10").addEventListener("click", ejercicioS10);

function ejercicioS10() {
    let inputS10 = document.querySelector("#inputS10").value.trim();
    let resutadoS10 = parseInt(0);
    let letraS10;

    for(let i = 0; i < inputS10.length; i ++){
        letraS10 = inputS10[i];
        if (!isNaN(letraS10)){
            resutadoS10 = resutadoS10 + parseInt(letraS10);
        }
    }
    document.querySelector("#resultado10").innerHTML = resutadoS10;
}


// Ejercicio 12
document.querySelector("#btnS12").addEventListener("click", ejercicioS12);

function ejercicioS12() {
    let inputS12 = String(document.querySelector("#inputS12").value);
    let resultado12 = "";

    for(let i = inputS12.length - 1; i >= 0; i--) {
        resultado12 = resultado12 + inputS12[i];
    }
    document.querySelector("#resultado12").innerHTML = resultado12;
}

// Ejercicio 14
document.querySelector("#btnS14").addEventListener("click", ejercicioS14);

function ejercicioS14() {
    let inputS14 = document.querySelector("#inputS14").value.trim();

    let resultado14 ="";

    if(inputS14.length !== 7){
        resultado14 = "matricula invalida";
    }else{
        if( inputS14[0] !== NaN){
            console.log("es un numero");
            console.log(inputS14[0]);
        }else{
            console.log("NO es un numero");
            console.log(inputS14[0]);
        }

    }

    document.querySelector("#resultado14").innerHTML = resultado14;
}

// Ejercicio 16

document.querySelector("#btnS16").addEventListener("click", ejercicioS16);

    function ejercicioS16() {

        let inputS16 = document.querySelector("#inputS16").value;
        let textS16 = String(inputS16).toLowerCase();

        let textS16Sanetized = String();
        let textS16SanetizedInverted = String();


        for(let i = 0; i < textS16.length; i++){
            let newCharacter = String();
            switch(textS16[i]) {
                case "á":
                    newCharacter = "a";
                    textS16Sanetized = textS16Sanetized + newCharacter;
                  break;
                  case "é":
                    newCharacter = "e";
                    textS16Sanetized = textS16Sanetized + newCharacter;
                  break;
                  case " ":
                    newCharacter = "";
                    textS16Sanetized = textS16Sanetized + newCharacter;
                  break;
                default:
                    textS16Sanetized = textS16Sanetized + textS16[i];
              }
        }

        let lenghtinvertedStart = textS16Sanetized.length -1;

        for(let y = lenghtinvertedStart; y >= 0; y--){
           
            textS16SanetizedInverted = textS16SanetizedInverted + textS16Sanetized[y];

        }

        console.log(textS16SanetizedInverted);

        if(textS16Sanetized === textS16SanetizedInverted){
            
            document.querySelector("#resultadoS16").innerHTML = "SI!"
        }else{
            document.querySelector("#resultadoS16").innerHTML = "Nooo"
        }

    }



// Ejercicio 10 funciones

document.querySelector("#btnF10").addEventListener("click", ejercicioF10);

function ejercicioF10() {
    let horas = document.querySelector("#horas").value;
    let materiales = document.querySelector("#materiales").value;


    /////////////// esto evalua si es un numero y ademas positivo
    function esNumero(valor){
        if(!isNaN(valor) && valor >= 0) {
            return true
        }else{
            return false
        }
    }
    let valorNumricoHoras = esNumero(horas);
    let valorNumricoMateriales = esNumero(materiales);
    console.log("valorNumricoHoras: " + valorNumricoHoras + " valorNumricoMateriales: " + valorNumricoMateriales);
    
}