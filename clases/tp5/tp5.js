var myArry = function max(n) {
	var arryRandom = [];
	for(var i=0; i< n; i++) {
		arryRandom.push(Math.floor((Math.random() * 100) + 1));
	}
	return arryRandom;
}

function swap(myArr, indexOne, indexTwo){
  var tmpVal = myArr[indexOne];
  myArr[indexOne] = myArr[indexTwo];
  myArr[indexTwo] = tmpVal;
  return myArr;
}

function bubbleSort(myArr, sorteo){
  var size = myArr.length;
 
  for( var pass = 1; pass < size; pass++ ){ // outer loop
    for( var left = 0; left < (size - pass); left++){ // inner loop
      var right = left + 1;
     if(sorteo == 1){
     	if( myArr[left] > myArr[right]){
        	swap(myArr, left, right);
      	}
     }
      if(sorteo == 2){
     	if( myArr[left] < myArr[right]){
        	swap(myArr, right, left);
      	}
     }
      
     
    }
  }
 console.log(sorteo);
  return myArr;
}

//1 sortea menor a mayor
//2 sortea mayor a menor

bubbleSort(myArry(5), 2);