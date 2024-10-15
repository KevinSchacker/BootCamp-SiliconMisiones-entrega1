function validarFormatearFecha(fechaString) {
    // Expresión regular para validar el formato YYYY-MM-DD
    const formatoValido = /^\d{4}-\d{2}-\d{2}$/.test(fechaString);
    
    if (!formatoValido) {
      return "La fecha es inválida";
    }
  
    try {
      const [year, month, day] = fechaString.split('-').map(Number);
      const fecha = new Date(year, month - 1, day);
      
      // Verificar si la fecha es válida comparando con los valores originales
      if (fecha.getFullYear() !== year || fecha.getMonth() !== month - 1 || fecha.getDate() !== day) {
        throw new Error("Fecha inválida");
      }
      
      return fecha.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
    } catch (error) {
      return "La fecha es inválida";
    }
  }
  
  console.log(validarFormatearFecha("2024-10-02")); // Debería imprimir: 02/10/2024
  console.log(validarFormatearFecha("2023-13-45")); // Debería imprimir: La fecha es inválida