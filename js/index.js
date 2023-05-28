
function limpiar(){
    document.getElementById('miFormulario').remove;
}

let num1, num2, r;

function suma(){
    num1 = parseFloat(document.getElementById('valor1').value);
    num2 = parseFloat(document.getElementById('valor2').value);
    r = num1+num2
    document.getElementById('resultado').innerHTML = r;
}

function resta(){
    num1 = parseFloat(document.getElementById('valor1').value);
    num2 = parseFloat(document.getElementById('valor2').value);
    r = num1-num2
    document.getElementById('resultado').innerHTML = r;
}

function multiplicacion(){
    num1 = parseFloat(document.getElementById('valor1').value);
    num2 = parseFloat(document.getElementById('valor2').value);
    r = num1*num2
    document.getElementById('resultado').innerHTML = r;
}

function division(){
    num1 = parseFloat(document.getElementById('valor1').value);
    num2 = parseFloat(document.getElementById('valor2').value);
    r = num1/num2
    document.getElementById('resultado').innerHTML = r;
}

