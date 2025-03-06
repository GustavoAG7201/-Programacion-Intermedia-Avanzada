import { Component } from '@angular/core';

@Component({
    selector: 'app-promociones',
    templateUrl: './promociones.component.html',
    styleUrls: ['./promociones.component.css'],
    standalone: false
})
export class PromocionesComponent {

  promociones = [
    {
      imagen: '/imagenes/producto8.png',
      nombre: "Converse Chuck Taylor 70's",
      descuento: '40% de descuento',
      precioOriginal: '150 MXN',
      precioConDescuento: '90 MXN'
    },
    {
      imagen: '/imagenes/producto9.png',
      nombre: 'VANS Old Skool',
      descuento: '30% de descuento',
      precioOriginal: '180 MXN',
      precioConDescuento: '126 MXN'
    },
    {
      imagen: '/imagenes/producto10.png',
      nombre: 'Nike Air Force Blue',
      descuento: '25% de descuento',
      precioOriginal: '120 MXN',
      precioConDescuento: '90 MXN'
    }
  ];
}
