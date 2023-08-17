function contarVogais(palavra) {

    let contadorVogais = 0;

    const palavraMinuscula = palavra.toLowerCase();
    

    for (let i = 0; i < palavraMinuscula.length; i++) {

      if (palavraMinuscula[i] === 'a' || palavraMinuscula[i] === 'e' || palavraMinuscula[i] === 'i' || palavraMinuscula[i] === 'o' || palavraMinuscula[i] === 'u') {

        contadorVogais++;
      }
    }

    return contadorVogais;
  }

  console.log(contarVogais('maçã'));
  console.log(contarVogais('banana'));
  