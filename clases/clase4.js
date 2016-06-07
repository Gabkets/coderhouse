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
            console.log("a");
        break;
        
        case false:
            console.log("b");
        break;
            
        }

}

elMayor(3, 3);
