class Producto {
    constructor(nombre, precio, cantidadStock) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidadStock = cantidadStock;
    }
  
    calcularTotal() {
      return this.precio * this.cantidadStock;
    }
  
    aplicarDescuento(porcentaje) {
      const descuento = this.precio * (porcentaje / 100);
      return this.precio - descuento;
    }
  }
  
  // Ejemplo de uso
  const producto = new Producto("Camiseta", 20, 50);
  console.log(producto.calcularTotal()); // Debería imprimir: 1000
  console.log(producto.aplicarDescuento(10)); // Debería imprimir: 18