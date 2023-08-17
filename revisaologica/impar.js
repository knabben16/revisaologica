function verificarParImpar(numero) {
    if (numero % 2 === 0) 
    {
      return 'par';
    } 
    else 
    {
      return 'ímpar';
    }
}
//var numero1 = 8;
//var res1 = parImpar(numero1);
//console.log(res1)
console.log(verificarParImpar(10))