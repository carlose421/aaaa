const _ = require('lodash');
const numeros = [5, 3, 8, 1, 2, 3, 7, 4, 8, 5];


const numerosOrdenados = _.sortBy(numeros);
console.log('Array ordenado:', numerosOrdenados);


const numerosUnicos = _.uniq(numeros);
console.log('Array sem duplicatas:', numerosUnicos);


const numerosPares = _.filter(numeros, num => num % 2 === 0);
console.log('Números pares:', numerosPares);


const numerosDobrados = _.map(numeros, num => num * 2);
console.log('Números dobrados:', numerosDobrados);


const somaTotal = _.sum(numeros);
console.log('Soma total dos números:', somaTotal);