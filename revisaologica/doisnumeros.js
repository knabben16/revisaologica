function multiplicacaoSemMultiplicar(num1, num2) {
    let resultado = 0;
    let multiplicador = Math.abs(num2); 
    for (let i = 0; i < multiplicador; i++) {
      resultado += Math.abs(num1); 
    }

    if ((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)) {
      resultado = -resultado;
    }
    
    return resultado;
  }
  
  console.log(multiplicacaoSemMultiplicar(5, 5)); // Output: 25
  