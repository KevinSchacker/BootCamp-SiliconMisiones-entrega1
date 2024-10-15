Trabajo Práctico – Módulo Nº 1
1. Repetición: Escriba un algoritmo que recorra los números del 1 al 20. Para cada
número, dicho algoritmo debe imprimir por consola si el número es par o impar.
2. Invertir una Cadena: Escribe una función que reciba una cadena de texto y devuelva
la cadena invertida. Por ejemplo, si la entrada es "JavaScript", la salida debe ser "tpircSavaJ".
3. Verificar si una palabra existe en un Array: Programar una función que reciba un
array de strings y una palabra. La función debe verificar si la palabra existe en el array y
devuelve true si es así, o false en caso contrario.
4. Suma de Números en un Rango: Escribe una función que reciba dos números como
parámetros, “start” y “end”, y devuelva la suma de todos los números en ese rango (inclusive).
5. Validar y Formatear Fecha: Definir una función que reciba una cadena de texto que
represente una fecha en formato "YYYY-MM-DD". La función debe intentar crear un objeto
Date con esa cadena. Si la fecha es válida, debe devolver la fecha formateada como
"DD/MM/YYYY". Si la fecha es inválida, debe lanzar un error y capturarlo con try...catch,
devolviendo un mensaje que indique que la fecha es inválida.
6. Diferencia de Días entre Fechas: Definir una función que reciba dos cadenas de texto
que representan fechas en formato "YYYY-MM-DD". Ésta debe calcular la diferencia en días
entre ambas fechas. Si alguna de las fechas es inválida, debe lanzar un error y capturarlo con
try...catch, devolviendo un mensaje que indique que una o ambas fechas son inválidas.
7. Clases: Crear una clase llamada Producto con las propiedades “nombre”, “precio” y
“cantidadStock”. Además, implementar dos métodos calcularTotal() que calcule el valor
total de los productos en stock y aplicarDescuento() que reciba un porcentaje y devuelva
como resultado el nuevo precio de un producto aplicando dicho descuento.
8. Callbacks: Dado el siguiente arreglo de usuarios
const usuarios = [
{ id: 1, nombre: 'Pepe', email: 'pepe@gmail.com' },
{ id: 2, nombre: 'Pancho', email: 'pancho@gmail.com' },
{ id: 3, nombre: 'Paco', email: 'paco@gmail.com' }
];
Crea una función getUsuarioPorId(id, callback) que reciba un id y una función
callback. Esta función debe simular un pequeño retraso en la búsqueda del usuario por su id
en el array. Si encuentra el usuario, debe pasarlo a la callback; si no, debe pasar un error.
Asegurarse de que la callback maneje correctamente tanto el éxito (el usuario encontrado)
como el error (usuario no encontrado) mostrando por consola el mensaje correspondiente.
