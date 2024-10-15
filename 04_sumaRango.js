function sumaR(inicio, fin) {
    let suma = 0;
    for (let i = inicio; i <= fin; i++) {
      suma += i;
    }
    return suma;
  }
  
 
  console.log(sumaR(1, 5)); 