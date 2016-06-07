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
    	switch( a>b ){

        case true:
            return a; 
        break;
        
        case false:
            return b;
            
        }
}

elMayor(1, 3);
