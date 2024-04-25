
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




