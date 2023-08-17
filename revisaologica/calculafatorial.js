function calcularFatorial(numero) {
    if (numero <= 1) {
      return 1;
    } else {
      return numero * calcularFatorial(numero - 1);
    }
  }
  console.log(calcularFatorial(5));