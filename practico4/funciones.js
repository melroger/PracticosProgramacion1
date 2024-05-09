// Ejercicio 2
function esBisiesto(anio){
    if( anio%4 === 0 && anio%100 !== 0 || anio%400 === 0){
        return true
    }else{
        return false
    }
}

// Ejercicio 4
function f4(temp){
    let fahrenheit = temp*1.8 + 32;
    return fahrenheit
}

// Ejercicio 6
function f6(base, exponente){
    let resultado = parseInt(base);
    for(let i = 1; i < exponente; i++){
        resultado = resultado*base;
    }
    return resultado
}

// Ejercicio 8
function f8(sueldo, hijos){
    let resultado = sueldo - sueldo*0.15 - sueldo*0.001 - sueldo*hijos;
    return resultado
}

// Ejercicio 10
function esNumero(valor){
    if(!isNaN(valor) && valor > 0) {
        return true
    }else{
        return false
    }
}

function salarioEmpleado(dias, horas, empleado){
    return dias*horas*empleado
}
function trabajadores(asistente, dias, horas){
    if(asistente === "true"){
        console.log("asistente si")
        return salarioEmpleado(dias, horas, 200) + salarioEmpleado(dias, horas, 150)
    }else{
        console.log("asistente no")
        return salarioEmpleado(dias, horas, 200)
    }
}
    
function costo(dias, horas, materiales, asistente){
    let costo = parseInt(0);
    costo = materiales + materiales*0.1 + trabajadores(asistente, dias, horas)

    return costo
}