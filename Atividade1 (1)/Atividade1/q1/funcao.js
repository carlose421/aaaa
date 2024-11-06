function calcularIdade(dn)  {
    const hoje = new Date();
    const dataNascimento = new Date(dn);
    
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const Diferenca_mes = hoje.getMonth() - dataNascimento.getMonth();
    
    if (Diferenca_mes < 0 || (Diferenca_mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
        idade--;
    }
    return idade;
}
module.exports = {
       calcularIdade,
};












