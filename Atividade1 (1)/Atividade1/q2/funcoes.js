export function media(vetor) {
    var soma = 0;
    for (var i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    }
    return soma / vetor.length;
}

export function menor(vetor) {
    var menor = vetor[0];
    for (var i = 1; i < vetor.length; i++) {
        if (vetor[i] < menor) {
            menor = vetor[i];
        }
    }
    return menor;
}

export function maior(vetor) {
    var maior = vetor[0];
    for (var i = 1; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i];
        }
    }
    return maior;
}
