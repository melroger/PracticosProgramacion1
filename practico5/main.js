// Ejercicio 4
document.querySelector("#btnA4").addEventListener("click", ejercicioA4);


const userList = document.getElementById('users');
const userAliases = [];

function ejercicioA4() {

    let alias = String(document.querySelector("#alias").value.trim());

    if (alias && !userAliases.includes(alias)) {
        userAliases.push(alias);
        displayUsers();
    } else if (!alias) {
        alert('El alias no puede estar vacío');
    } else {
        alert('El alias ya existe');
    }

    function displayUsers() {
        userList.innerHTML = `${userAliases}`;
    }
}


// Ejercicio 5
document.querySelector("#btnFib").addEventListener("click",fibonacci);
function fibonacci()
{
    let cantidad = parseInt(document.querySelector("#txtCant").value);
    let listaFib = calcularFibonacci(cantidad);
    document.querySelector("#divFib").innerHTML = listaFib;
}


function calcularFibonacci(pos){
    let lista = [1,1];
    let indice = 2;
    while( indice <= pos)
    {
        lista.push( lista[indice-1] + lista[indice-2] );
        indice++;
    }
    return lista;
}

// Ejercicio 6

let arrayA6 = [];
const listaA6 = document.getElementById('listaA6');

document.querySelector("#agreagarA6").addEventListener("click",addToArray);
function addToArray() {
    const input = String(document.querySelector("#inputTextA6").value.trim());
    arrayA6.push(input);
    displayArray();
}

document.querySelector("#eliminarA6").addEventListener("click",removeFromArray);
function removeFromArray() {
    const input = String(document.querySelector("#inputTextA6").value.trim());
    const index = arrayA6.indexOf(input);
    if (index > -1) {
        arrayA6.splice(index, 1);
        displayArray();
    } else {
        alert('El texto no se encuentra en el array.');
    }
}

function displayArray() {
    listaA6.innerHTML = arrayA6;
}