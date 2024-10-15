const usuarios = [
    { id: 1, nombre: 'Pepe', email: 'pepe@gmail.com' },
    { id: 2, nombre: 'Pancho', email: 'pancho@gmail.com' },
    { id: 3, nombre: 'Paco', email: 'paco@gmail.com' }
  ];
  
  // Función que busca un usuario por ID con un callback
  function getUsuarioPorId(id, callback) {
    
    setTimeout(() => {
      const usuario = usuarios.find(u => u.id === id);
      if (usuario) {
        callback(null, usuario); // Si encuentra al usuario, pasa null como error y el usuario como resultado
      } else {
        callback(`Usuario con id ${id} no encontrado`, null); // Si no lo encuentra, pasa un mensaje de error
      }
    }, 2000); 
  }
  
  // Ejemplo de uso: buscar un usuario por ID
  getUsuarioPorId(2, (error, usuario) => {
    if (error) {
      console.error('Error:', error);
    } else {
      console.log('Usuario encontrado:', usuario);
    }
  });
  
  getUsuarioPorId(3, (error, usuario) => {
    if (error) {
      console.error('Error:', error);
    } else {
      console.log('Usuario encontrado:', usuario);
    }
  });
  