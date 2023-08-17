function calcularFibonacci(n) {
  var fibonacci = [0, 1];

  for (var i = 2; i < n; i++) {
    var proximoNumero = fibonacci[i - 1] + fibonacci[i - 2];
    fibonacci.push(proximoNumero);
  }

  return fibonacci;
}

var sequencia = calcularFibonacci(10);
console.log(sequencia);
