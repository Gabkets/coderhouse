//Con correccion de console.log a return

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
    	switch( a>b || a==b){

        case true:
            if(a>b){
                return ("a");
            }else{
                return ("son iguales");
            }    
        break;
        
        case false:
            return ("b");
            
        }

}

elMayor(1, 3);
