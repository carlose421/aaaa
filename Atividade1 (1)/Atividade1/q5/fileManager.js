const fs = require('fs');


function readJsonFile(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data); // Converte a string JSON em objeto
    } catch (error) {
        console.error(`Erro ao ler o arquivo JSON: ${error.message}`);
        return null; 
    }
}


function writeJsonFile(filePath, data) {
    try {
        const jsonData = JSON.stringify(data, null, 2); 
        fs.writeFileSync(filePath, jsonData, 'utf-8');
        console.log(`Arquivo JSON escrito com sucesso em: ${filePath}`);
    } catch (error) {
        console.error(`Erro ao escrever no arquivo JSON: ${error.message}`);
    }
}

module.exports = {
    readJsonFile,
    writeJsonFile
};