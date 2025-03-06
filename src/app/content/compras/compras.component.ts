import { Component } from '@angular/core';

@Component({
    selector: 'app-compras',
    templateUrl: './compras.component.html',
    styleUrls: ['./compras.component.css'],
    standalone: false
})
export class ComprasComponent {

  carritoVacio = true;

  // productosEnCarrito = [
  //   {
  //     imagen: '/assets/producto1.png',
  //     nombre: 'Producto Ejemplo 1',
  //     descripcion: 'Descripción breve del producto',
  //     precio: '$500',
  //     cantidad: 1
  //   },
  //   {
  //     imagen: '/assets/producto2.png',
  //     nombre: 'Producto Ejemplo 2',
  //     descripcion: 'Descripción breve del producto',
  //     precio: '$800',
  //     cantidad: 2
  //   }
  // ];

}

