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

        let mesDias = mesesTodos[mes];
        let mesAnteriorDias = mesesTodos[mesAnterior];
        
        if(diaComienzo > 0){
            let primeroDiasPrevios = mesAnteriorDias - diaComienzo;

            for (let i = primeroDiasPrevios; i >= mesAnteriorDias; i++){

                casillero = ´\\\\\´;
                casillero.innerHTML = i;
                document.getElementById('calendario').appendChild(casillero);
            }
        
        }


    }




