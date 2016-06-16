//Con correccion de console.log a return
/*
function elMayor(a, b){   
    
    //Con if
    if(a > b){
        return a;
    }else if( a < b){
        return b;
    }else{
        return a;
    }
    
    //Con switch 
    	switch( a>b ){

        case true:
            return a; 
        break;
        
        case false:
            return b;
            
        }
}

elMayor(1, 3);

*/
/*
function miPar(a){
    var elPar = a % 2;
    
    console.log(elPar);
    
    if(elPar == 0 ){
        console.log("verdadero");
        return false;
    }else{
        console.log("falso");
        return true;
    }
}
miPar(3);

*/

function miPrimo(a){
    
    var numero = (a + 1)%2;
    
    if(a == 2){
        
      console.log("es primo");
        
    }else if(numero != 0){
        console.log("no es primo")
    }
}

miPrimo(3);