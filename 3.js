function somaMultiplos5e7(limite) {
    let soma = 0;

    for (let i = 0; i < limite; i++) {
        if (i % 5 === 0 || i % 7 === 0) {
            soma += i;
        }
    }

    return soma;
}

console.log(somaMultiplos5e7(100));