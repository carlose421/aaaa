const { calcularIdade } = require('./funcao');

const data_de_nascimento = '05-11-2004';
const idade = calcularIdade(data_de_nascimento);
console.log(` A idade da pessoa nascida no ano de ${data_de_nascimento} é: ${idade} anos.`);







