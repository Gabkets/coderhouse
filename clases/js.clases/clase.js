var a = 1;

for(var i = 0; a < 10 ; i++){
    
    a++
    
}

console.log("esta variable es el valor %s", a);

var arry = ["A", "B", "C"];

for(i = 0; i < arry.length; i++){

    console.log(arry[i]);
    
}

while(a < 10){

    a++;
    
}


while(true){

    a++;
    
    if( a > 10){
    
        console.log("listo");
        break;
    
    }
    
}


function test(a, con){

    console.log(a);
    
    if( a == con ){
    
        return 0;
        
    }else{
    
        return test(a - 1, con);
    
    }

}


test(100, 55);



var a = 'pepe';

switch(a){

        case 'pepe':
        console.log('soy yo %s', a);
        break;
        
        case 'jose':
        console.log('soy yo %s', a);
        break;
        
        case 'maria':
        console.log('soy yo %s', a);
        break;
        
        default:
        console.log('soy yo uno de ellos');
        break;
        
}