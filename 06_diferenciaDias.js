// diferenciaDias.js

function diferenciaDias(fecha1, fecha2) {
    try {
      const date1 = new Date(fecha1);
      const date2 = new Date(fecha2);
  
      if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
        throw new Error("Una o ambas fechas son inválidas");
      }
  
      const diferencia = Math.abs(date2 - date1);
      const dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
      return dias;
    } catch (error) {
      return error.message;
    }
  }
  
  // Ejemplos de uso
  console.log(diferenciaDias("2023-05-15", "2023-05-20")); // Debería imprimir: 5
  console.log(diferenciaDias("2023-05-15", "2023-13-45")); // Debería imprimir: Una o ambas fechas son inválidas