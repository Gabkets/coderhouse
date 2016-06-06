//Tomamos los valores de los inputs
function getValues(){

    var num1 = document.getElementById('numero1').value;
    var num2 = document.getElementById('numero2').value;
    return[num1, num2];

}

//Definimos el contenedor donde se muestra el resultadi
function showResult(value){
    
    var result = document.getElementById('resultado').innerHTML = value;

}

//Realizamos la suma
function suma(){
    
    var values = getValues();
    
    showResult(sum(values[0], values[1]));

}

//Definimos la suma
function sum(a, b){
    
    return parseInt(a) + parseInt(b);
    
}

//Realizamos la resta
function resta(){
    
    var values = getValues();
    
    showResult(res(values[0], values[1]));

}

//Definimos la resta
function res(a, b){
    
    return parseInt(a) - parseInt(b);
    
}

//Realizamos la division
function division(){
    
    var values = getValues();
    
    showResult(div(values[0], values[1]));

}

//Definimos la division
function div(a, b){
    
    return parseInt(a) / parseInt(b);
    
}

//Realizamos el producto
function producto(){
    
    var values = getValues();
    
    showResult(prod(values[0], values[1]));

}

//Definimos el producto
function prod(a, b){
    
    return parseInt(a) * parseInt(b);
    
}




