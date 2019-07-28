// O(n) função linear
function countPairs( array , k ) {

    var n = 0;
    var b = 0;
    var myMap = new Map();
    var pairs = [];
    
    // Retira os valores duplicados
    for (let index = 1; index < array.length-1; index++) {        
        myMap.set( parseInt(array[index]) , 'InLoco' );
    }
    // Percorre todo o array e encontrar os pares
    // aplica formula a + k = b onde b = a + k porem é necessario conferir se essa chave existe e verificar a diferença
    // usando a mesma formula k = b - a

    for (const a of myMap.keys()) {
        b = a + k; 
        if (k == ( b - a ) && myMap.get(b)) {
            n++;
            pairs.push([a,b]);
        }
    }

    console.log(pairs);

    return n;

}

var main = function (input){

    var array = input.split('\n'); 
    var k = parseInt(array[array.length-1]);

    return countPairs(array, k);

}

module.exports = main;