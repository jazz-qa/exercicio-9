function mdc(a, b) {
    while (b !== 0) {
        let temporario = b;
        b = a % b;
        a = temporario;
    }
    return a;
}

console.log(mdc(36, 60));
