var elementosDom = document.getElementsByTagName("*");//forma un array con todos los elementos del html. Lo saque del valor * de css que refiere a todos los tags del html


//Funcion que arma un objeto a partir de todos los elementos iguales dentro del array
function omia(arry){
    
    var obj = {}; //Definimos un objeto
    
    for( var i = 0; i < arry.length ; i++ ){ //Recorremos todo el array
    
        if( typeof obj[arry[i].nodeName.toLowerCase()] != 'undefined'){ //Si el elemento ya existe, lo empujamos dentro del key correspondiente del objeto generando un array de valores iguales.
            
            obj[arry[i].nodeName.toLowerCase()].push(arry[i]);
            
        }else{ //Si el valor del array es nuevo, crea un key y empuja el valor al array de ese key 
            
            obj[arry[i].nodeName.toLowerCase()] = [];
            obj[arry[i].nodeName.toLowerCase()].push(arry[i]);
        
        }
    
    }
    return obj; //Retornamos el objeto
}

var domElements = omia(elementosDom);//Declaramos la variable domElements para hacer un objeto con todos los valores del array elementosDom

function showResult(valor){ // Creamos una funcion que imprima el resultado dependiendo del valor de los keys del objeto ejemplo> document.getElementById('p').innerHTML = 'Hay '+domElements['p'].length+' '+ 'p' ;
    
var result = document.getElementById(valor).innerHTML = 'Hay '+domElements[valor].length+' '+ valor ;

}

for (var key in domElements) { //Recorremos todos los keys del Objeto
    
    var node = document.createElement("div");//Creamos un div
    document.getElementById('resultado').appendChild(node).setAttribute("id", key); //Imprimimos el div y le damos ID = al key, entonces se forma un <div id="valor_de_key"></div>   
    showResult(key);//Imprimimos la funcion showResult y como valor le pasamos key
    
}



