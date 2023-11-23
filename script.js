function somatorioDivisiveis3e5(n) {

    if (!Number.isInteger(n) || n <= 0) {
        console.log("Por favor, insira um número inteiro positivo válido.");
        return;
    }

    let somatorio = 0;
    for (let i = 0; i < n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            somatorio += i;
        }
    }

    return somatorio;
}

console.log(somatorioDivisiveis3e5(10));
console.log(somatorioDivisiveis3e5(11));
