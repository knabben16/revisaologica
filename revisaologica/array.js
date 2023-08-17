function retornaNNumerosPares(n) {
    let numerosPares = [];
    for (let i = 0; numerosPares.length < n; i += 2) {
        numerosPares.push(i);
    }
    return numerosPares;
}

console.log(retornaNNumerosPares(5));