function verificaPrimo(numero) {
  if (numero <= 1) {
    return false;
  }

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(verificaPrimo(7));
console.log(verificaPrimo(10));
