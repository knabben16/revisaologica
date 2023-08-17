function verificarPalindromo(palavra) {

  palavra = palavra.toLowerCase().replace(/\s/g, '');

  var palavraInvertida = palavra.split('').reverse().join('');

  if (palavra === palavraInvertida) {
    return true;
  } else {
    return false;
  }
}

console.log(verificarPalindromo('ovo'));
console.log(verificarPalindromo('uva'));
