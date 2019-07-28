// O(n) função linear
function isPossible( a, b, c, d ) {

    var myMap = new Map();
    myMap.set('inLoco',[a,b]);
    var nextA = a;
    var nextB = b;
    var isOdd = true;
    
    // verifica se a interação alcançou o resultado final ou ultrapassou
    while (nextA < c || nextB < d) {

        console.log(myMap.values());

        // muda o tipo de interação a cada laço do loop
        if (isOdd){
            myMap.set('inLoco',[nextA+nextB, nextB]);
        }else{
            myMap.set('inLoco',[nextA, nextA+nextB]);
        }

       // incrementa os novos valores
       nextA = myMap.get('inLoco')[0];
       nextB = myMap.get('inLoco')[1];
       isOdd = !isOdd;

       // verifica se a interação ultrapassou o resultado final
        if (nextA > c || nextB > d){
            return "No";
        }

    }

    return "Yes";

}

var main = function (input){
    var array = input.split('\n'); 

    return isPossible(parseInt(array[0]),
     parseInt(array[1]), 
     parseInt(array[2]), 
     parseInt(array[3]));

}



module.exports = main;