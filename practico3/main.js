
// ejercicio 2
function ejercicio2(numIncicio, numFinal){
    
    let resultado = "";
    for( let i = numIncicio; i <= numFinal; i ++){
        resultado = resultado + i + " ";
    }
    return resultado;
}

document.querySelector("#resultado2").innerHTML = ejercicio2(-100, 10);

// ejercicio 4
function ejercicio4(numIncicio, numFinal){
    
    let resultado = "";
    for( let i = numIncicio; i >= numFinal; i --){
        resultado = resultado + i + " ";
    }
    return resultado;
}

document.querySelector("#resultado4").innerHTML = ejercicio4(20, -30);

// ejercicio 6
function ejercicio6(numIncicio, numFinal){
    
    let resultado = "";
    for( let i = numIncicio; i <= numFinal; i ++){
        let multiplo = i%4;
        if(multiplo === 0){
            resultado = resultado + i + " ";
        }
    }
    return resultado;
}

document.querySelector("#resultado6").innerHTML = ejercicio6(-33, 230);

// ejercicio 8
document.querySelector("#btn8").addEventListener("click", ejercicio8function)
let resultado8 = "";
function ejercicio8function(){
    let num1 = document.querySelector("#num1").value;
    let num2 = document.querySelector("#num2").value;
    
    if( num1 <= num2 ){
        
        for( let i = num1; i <= num2; i ++){
            resultado8 = resultado8 + i + " ";
        }
    }else{
        for( let i = num1; i >= num2; i --){
            resultado8 = resultado8 + i + " ";
        }
    }

    document.querySelector("#resultado8").innerHTML = resultado8;
}


// ejercicio 10
document.querySelector("#btn10").addEventListener("click", ejercicio10)
let resultado10 = parseInt(1);

function ejercicio10(){
    let num1 = document.querySelector("#ej10num1").value;
    let num2 = document.querySelector("#ej10num2").value;

    for( let i = num1; i <= num2; i ++){
        resultado10 =  resultado10*i;
    }
    document.querySelector("#resultado10").innerHTML = resultado10;
}


// ejercicio 12
document.querySelector("#btn12").addEventListener("click", ejercicio12)
let resultado12 = parseInt(0);

function factorial(n) {
    if (n < 0) {
      return 'Factorial no definido para números negativos';
    }
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }

function ejercicio12(){
    let num1 = document.querySelector("#ej12num1").value;
    document.querySelector("#resultado12").innerHTML = factorial(num1);
}



// ejercicio 14
document.querySelector("#btn14").addEventListener("click", ejercicio14);
let resultado14 = parseInt(0);

function ejercicio14(){
    let num1 = parseInt(document.querySelector("#ej14num1").value);

    while(num1 > 1){
        num1 = num1/10;
        resultado14 ++;
    }
    document.querySelector("#resultado14").innerHTML = resultado14;
}

// ejercicio 16
document.querySelector("#btn16").addEventListener("click", ejercicio16);

function ejercicio16() {
    let numInicio = parseInt(document.querySelector("#ej16num1").value);
    let numFinal = parseInt(document.querySelector("#ej16num2").value);

    function ejercicio16funcion(numInicio, numFinal) {
        while (numInicio <= numFinal) {
            if (numInicio % 4 === 0 && numInicio % 6 === 0) {
                return numInicio;
            }
            numInicio++;
        }
        return numInicio;
    }

    document.querySelector("#resultado16").innerHTML = ejercicio16funcion(numInicio, numFinal);
}


// ejercicio 18
document.querySelector("#btn18").addEventListener("click", ejercicio18);

function ejercicio18() {
        let numero = parseInt(document.querySelector("#ej18num1").value);
    
        if (isNaN(numero) || numero <= 0) {
            document.getElementById("resultado18").innerHTML = "Por favor, ingresa un número válido mayor que 0";
            return;
        }
    
        let resultado = "";
    
        for (let i = 31; i < 200; i++) {
            if (i % numero === 0 && i % 2 === 0) {
                resultado += i + " ";
            }
        }
    
        // Mostramos los resultados en el párrafo con ID 'resultado'
        document.querySelector("#resultado18").innerHTML = resultado;
    
}

// ejercicio 19
document.querySelector("#btn19").addEventListener("click", ejercicio19);

    function ejercicio19() {


        let diaComienzo = parseInt(document.getElementById("dias").value);
        let mes = parseInt(document.getElementById("mes").value);
        let mesAnterior;
        let mesesTodos = [31, 29, 30, 31, 30, 30, 31, 31, 30, 31, 30, 31];
        
        if( mes === 0 ){
            mesAnterior = 11;
        }
        else{
            mesAnterior = parseInt(mes -1);
        }

        let mesDias = parseInt(mesesTodos[mes]);
        let mesAnteriorDias = parseInt(mesesTodos[mesAnterior]);
        
        let diasMesAntriorCal = [];

        if(diaComienzo > 0){
            let primeroDiasPrevios = mesAnteriorDias - diaComienzo;
            console.log(primeroDiasPrevios + " " + mesAnteriorDias)
            for (let i = primeroDiasPrevios; i <= mesAnteriorDias; i++){
                diasMesAntriorCal.push(i);
            }
         console.log(diasMesAntriorCal);
        }
        else{
            diasMesAntriorCal = [];
        }

        let contador7 = 1;

            for(let a = 0; a < diasMesAntriorCal.length; a++){
                if(contador7 < 7){
                    contador7++;
                    var element = document.createElement("span");
                    element.classList.add("anterior")
                    element.innerHTML = diasMesAntriorCal[a];
                    document.getElementById('calendario').appendChild(element);
                }
            }

            for(y = 1; y <= mesDias; y++){
                var element = document.createElement("span");
                element.innerHTML = y;
                document.getElementById('calendario').appendChild(element);
                contador7++;
                if(contador7 === 7){
                    var br = document.createElement("br");
                    document.getElementById('calendario').appendChild(br);
                    contador7 = 1;
                }   
            }
    }

// ejercicio 20
let a = parseInt(2366);
let b = parseInt(273);
let r = parseInt(1);
let c = parseInt(0);
let mcd;

let repeticion = 0;

function fmcd(dividendo, divisor, resto){
    while( resto > 0 ){
        repeticion ++;
        c = parseInt(dividendo / divisor);
        resto = parseInt(dividendo % divisor);

        mcd = divisor;
    
        if (resto > 0){
            dividendo = parseInt(divisor);
            divisor = parseInt(resto);
        }
    
    }
}

fmcd( a, b, r);








