// Ejercicio 1
document.querySelector("#btnShowName").addEventListener("click", fullName);

    function fullName() {
        
        const valueName = document.querySelector("#nameField").value;
        const valueLastName = document.querySelector("#lastnameField").value;

        let showResult = `${valueLastName}, ${valueName}`;
        document.querySelector("#showName").innerHTML = showResult;

    }

// Ejercicio 2
document.querySelector("#btnShowSum").addEventListener("click", sumNumbers);

    function sumNumbers() {
        
        let firstNum = document.querySelector("#firstNum").value;
        let secondNum = document.querySelector("#secondNum").value;

        firstNum = parseInt(firstNum);
        secondNum = parseInt(secondNum);

        let applySum = firstNum + secondNum;
        document.querySelector("#showSum").innerHTML = applySum;

    }

// Ejercicio 3
document.querySelector("#showSumNumbers").addEventListener("click", sumNumbers);

function sumNumbers() {
    
    let firstNum = document.querySelector("#firstNumber").value;
    let secondNum = document.querySelector("#secondNumber").value;
    let thirdNum = document.querySelector("#thirdNumber").value;

    firstNum = parseInt(firstNum);
    secondNum = parseInt(secondNum);
    thirdNum = parseInt(thirdNum);

    let applySum = firstNum + secondNum + thirdNum;
    document.querySelector("#btnShowNumbers").innerHTML = applySum;

}

// Ejercicio 4
document.querySelector("#applyOperation").addEventListener("click", applyOperation);

function applyOperation() {
    
    let firstValue = document.querySelector("#firstValue").value;
    let secondValue = document.querySelector("#secondValue").value;

    firstValue = parseInt(firstValue);
    secondValue = parseInt(secondValue);

    let applySum = firstValue + secondValue;
    let applyMultiplication = firstValue * secondValue;

    document.querySelector("#btnSum").innerHTML = applySum;
    document.querySelector("#btnMultiply").innerHTML = applyMultiplication;

}

// Ejercicio 5
document.querySelector("#btnMath").addEventListener("click", cuadradoArea);

function cuadradoArea() {

    let valor = document.querySelector("#txtValor").value;
    valor = parseFloat(valor);
    let potencia = Math.pow(valor,2);
    let resultado = `Valor al cuadrado es  ${potencia}<br>`;
    document.querySelector("#divMath").innerHTML = resultado;
    
}


// Ejercicio 6
document.querySelector("#applyChange").addEventListener("click", applyChange);

function applyChange() {
    
    let valuePesos = document.querySelector("#valuePesos").value;
    valuePesos = parseInt(valuePesos);

    let dolarValue = document.querySelector("#dollarValue").textContent;
    let valueInDollar = valuePesos / dolarValue;
    valueInDollar = parseFloat(valueInDollar)

    document.querySelector("#valueInDollars").innerHTML = valueInDollar;

}

// Ejercicio 7
document.querySelector("#calcResto").addEventListener("click", calcResto);

function calcResto() {
    
    let dividendo = document.querySelector("#dividendo").value;
    dividendo = parseInt(dividendo);

    let divisor = document.querySelector("#divisor").value;
    divisor = parseInt(divisor);

    let cociente = dividendo / divisor;
    cociente = parseInt(cociente);

    let resto = divisor * cociente - dividendo;

    document.querySelector("#resto").innerHTML = - resto;

}
// Ejercicio 8
document.querySelector("#calc8").addEventListener("click", calcResult);

function calcResult() {

    let value1 = document.querySelector("#value1").value;
    value1 = parseInt(value1);

    let value2 = document.querySelector("#value2").value;
    value2 = parseInt(value2);

    let value3 = document.querySelector("#value3").value;
    value3 = parseInt(value3);

    let result = value1 + value2 - value3;

    document.querySelector("#result8").innerHTML = result;

}
// Ejercicio 9
document.querySelector("#calc9").addEventListener("click", calcResult9);

function calcResult9() {

    let value1 = document.querySelector("#value1-ex9").value;
    value1 = parseInt(value1);

    let value2 = document.querySelector("#value2-ex9").value;
    value2 = parseInt(value2);

    let value3 = document.querySelector("#value3-ex9").value;
    value3 = parseInt(value3);

    let result = Math.pow(value1, 2) - (value2 + value3);

    document.querySelector("#result9").innerHTML = result;

}

// Ejercicio 10
document.querySelector("#calc10").addEventListener("click", calcTotalPorcentaje);

function calcTotalPorcentaje() {
    
    let subTotal = document.querySelector("#subTotal-ex10").value;
    subTotal = parseInt(subTotal);

    let porcentaje = document.querySelector("#porcentaje-ex10").value;
    porcentaje = "1." + porcentaje;
    porcentaje = Number(porcentaje);

    let totalAmount = subTotal * porcentaje;

    document.querySelector("#totalPorcentaje").innerHTML = totalAmount;

}


// Ejercicio 11
document.querySelector("#ivaCalculation").addEventListener("click", ivaCalculation);

function ivaCalculation() {
    
    let subTotal = document.querySelector("#subTotal").value;
    subTotal = parseInt(subTotal);

    let totalAmount = subTotal * 1.22;

    document.querySelector("#totalAmount").innerHTML = totalAmount;

}

// Ejercicio 12
document.querySelector("#sumValue12").addEventListener("click", valueIMC);

function valueIMC() {
    
    let valueKg = document.querySelector("#valueKg").value;
    let valueAltura = document.querySelector("#valueAltura").value;

    valueKg = parseFloat(valueKg);
    valueAltura = parseFloat(valueAltura);

    let alturaAlCuadrado = Math.pow(valueAltura, 2)

    let totalIMC = valueKg / alturaAlCuadrado;

    document.querySelector("#showIMC").innerHTML = totalIMC;
 
} 

// Ejercicio 13
document.querySelector("#sum13").addEventListener("click", sumOne);

let total13 = 0;

function sumOne() {
    
    total13 = total13 + 1;

    document.querySelector("#show13").innerHTML = total13;
 
} 

// Ejercicio 14
document.querySelector("#sum14").addEventListener("click", sum3);

let total14 =  0;
total14 = parseInt(total14)

function sum3() {
    
    total14 = total14 + 3; 

    document.querySelector("#show14").innerHTML = total14;
 
} 

// Ejercicio 15
document.querySelector("#sumValues").addEventListener("click", totalPoints);

let totalSum =  0;

function totalPoints() {
    
    let numCounter = document.querySelector("#numCounter").value;
    numCounter = parseInt(numCounter);

    totalSum = totalSum + numCounter; 

    document.querySelector("#showResult").innerHTML = totalSum;
 
} 

// Ejercicio 16
document.querySelector("#calcular").addEventListener("click", totalTeam);

function totalTeam() {
    
    let ganados = document.querySelector("#ganados").value;
    ganados = parseInt(ganados);

    let empatados = document.querySelector("#empatados").value;
    empatados = parseInt(empatados);

    let totalGames = ganados * 3 + empatados;

    document.querySelector("#showTeamResult").innerHTML = totalGames;
 
} 

// Ejercicio 17
document.querySelector("#tempCalculation").addEventListener("click", calculateTemp);

function calculateTemp() {
    
    let chirridos = document.querySelector("#numChirridos").value;
    chirridos = parseInt(chirridos);
    let chirridosMin = (chirridos) - 40;
    chirridosMin = parseInt(chirridosMin);

    let tempF = (chirridosMin / 4) + 50;
    let tempC = (tempF - 32) / 1.8;

    document.querySelector("#tempF").innerHTML = tempF;
    document.querySelector("#tempC").innerHTML = tempC.toFixed(2);
    
} 