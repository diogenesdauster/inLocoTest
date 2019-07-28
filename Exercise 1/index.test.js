var fs = require('fs');
const test = require('tape');
const index = require('./index');


test('Teste 1', (t) => {
    var input   = fs.readFileSync('input001.txt').toString().trim(); 
    var output  = fs.readFileSync('output001.txt').toString(); 
    t.assert(index(input) === output, "Teste 1 Ok");
    t.end();  
});
test('Teste 2', (t) => {
    var input   = fs.readFileSync('input002.txt').toString(); 
    var output  = fs.readFileSync('output002.txt').toString().trim(); 
    t.assert(index(input) === output, "Teste 2 Ok");
    t.end();  
});


