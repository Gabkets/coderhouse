//declaramos función esPrimo y le asiganmos una variable num
function esPrimo(num){
    
    //Definimos si es num es 1 o 2 que son primos.
    if(num == 2 || num == 1){
        return ("primo");
    }else{ //Si no es 1 o 2 seguímos
        //Generamos un bucle que recorre todos los números del 2 al num
        for(i=2; i<num; i++){
            if(num%i === 0){ //Si la división de alguno de los números entre 2 y num da resto cero significa que no es primo
                var primo = "no primo";
                break;
            }else{//Si ningún número da raesto cero entre 2 y num significa que num es primo
                var primo = "primo";
            }
        }
        return primo; //Retornamos el valor de la variable primo
    }
}

//Llamamos la funcion esPrimo
esPrimo(100);


//Se definió una variable primo ya que al hacer directamente return cortabamos el loop de for. Asignando una variable recorre todos los números. Si ya hay un caso en que num%i === 0 le hacemos break y este es el último valor que tomó, o sea,  no primo. Si el loop recorre hasta el final singnifica que es no primo.