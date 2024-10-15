//El usuario ingresa la palabra y verificamos que sea un string 

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function invertirCadena(texto) {
  return texto.split('').reverse().join('');
}

function esValido(texto) {
  return /^[a-zA-Z]+$/.test(texto); //esto tuve que googlear un poco 
}

function solicitarPalabra() {
  rl.question('Por favor, ingrese una palabra: ', (respuesta) => {
    if (esValido(respuesta)) {
      const palabraInvertida = invertirCadena(respuesta);
      console.log(`La palabra invertida es: ${palabraInvertida}`);
      rl.close();
    } else {
      console.log('Error: Por favor, ingrese solo una palabra (sin números ni caracteres especiales).');
      solicitarPalabra();
    }
  });
}

solicitarPalabra();