

function verificarPalabra(array, palabra) {
    return array.includes(palabra);
  }
  
  // Ejemplos
  const palabras = ["hola", "mundo", "JavaScript", "programación"];
  console.log(verificarPalabra(palabras, "hola")); // true
  console.log(verificarPalabra(palabras, "clase")); // false