//  alert('hola');




function getValues(){

    var num1 = document.getElementById('numero1').value;
    var num2 = document.getElementById('numero2').value;
    return[num1, num2];

}

function showResult(value){
    
    var result = document.getElementById('resultado').innerHTML = value;

}

function suma(){
    
    var values = getValues();
    
    showResult(sum(values[0], values[1]));

}

function sum(a, b){
    
    return parseInt(a) + parseInt(b);
    
}

function resta(){
    
    var values = getValues();
    
    showResult(res(values[0], values[1]));

}

function res(a, b){
        
    return parseInt(a) - parseInt(b);
    
}

function division(){
    
    var values = getValues();
    
    showResult(div(values[0], values[1]));

}

function div(a, b){
    
    return parseInt(a) / parseInt(b);
    
}

function producto(){
    
    var values = getValues();
    
    showResult(prod(values[0], values[1]));

}

function prod(a, b){
    console.log( parseInt(a) * parseInt(b) );
    return parseInt(a) * parseInt(b);
    
}




