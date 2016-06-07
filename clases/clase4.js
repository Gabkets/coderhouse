function elMayor(a, b){   
    
    
    //Con if
    if(a > b){
        console.log(a);
    }else if( a < b){
        console.log(b);
    }else{
        console.log(a);
    }
    
    
    //Con switch 
    	switch( a>b || a==b){

        case true:
            if(a>b){
                console.log("a");
            }else{
                console.log("son iguales");
            }    
        break;
        
        case false:
            console.log("b");
        break;
            
        }

}

elMayor(3, 1);
