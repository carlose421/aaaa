const fileManager = require('./fileManager');

const dadosClientes = [
    { id: 1, nome: 'João Silva', campanha: 'Promoção de Verão' },
    { id: 2, nome: 'Maria Oliveira', campanha: 'Campanha de Natal' }
];

fileManager.writeJsonFile('clientes.json', dadosClientes);

const clientesLidos = fileManager.readJsonFile('clientes.json');
console.log('Dados dos clientes lidos do arquivo:', clientesLidos);