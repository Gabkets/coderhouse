var all = document.getElementsByTagName("*");
var array_element = [];

for (var i=0, max=all.length; i < max; i++) {
   
}

console.log(all.length);


function omia(arry){
    
    var obj = {};
    
    for( var i = 0; i < arry.length ; i++){
    
        if( typeof obj[arry[i].nodeName.toLowerCase()] != 'undefined'){
            
            obj[arry[i].nodeName.toLowerCase()].push(arry[i]);
            
        }else{
            
            obj[arry[i].nodeName.toLowerCase()] = [];
            obj[arry[i].nodeName.toLowerCase()].push(arry[i]);
        
        }
    
    }
    return obj;
}

var domElements = omia(all);

//console.log(Object.size(domElements));



function showResult(valor){
    
var result = document.getElementById(valor).innerHTML = 'Hay '+domElements[valor].length+' '+ valor ;

}

for (var key in domElements) {
var node = document.createElement("div");     
document.getElementById('resultado').appendChild(node).setAttribute("id", key);   
showResult(key);
}



