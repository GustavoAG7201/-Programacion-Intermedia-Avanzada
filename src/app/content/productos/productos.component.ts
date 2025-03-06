import { Component } from '@angular/core';

@Component({
    selector: 'app-productos',
    templateUrl: './productos.component.html',
    styleUrl: './productos.component.css',
    standalone: false
})
export class ProductosComponent {

    productos = [
      {imagen: '/imagenes/producto1.png', descripcion: 'Ofrecen un diseño elegante con una parte superior de cuero y malla!', precio: '$2,500 MXN', tallas: 'Tallas: 6,7,8,9,10,11'},
      {imagen: '/imagenes/producto2.png', descripcion: 'Diseño moderno, con suela de goma, perfectas para un estilo deportivo y diario! ', precio: '$2,500 MXN', tallas: 'Tallas: 6,7,8,9,10,11'},
      {imagen: '/imagenes/producto3.png', descripcion: 'Diseño robusto con elegancia, su suela blanca resalta tu estilo!', precio: '$2,100 MXN', tallas: 'Tallas: 6,7,8,9,10,11'},
      {imagen: '/imagenes/producto4.png', descripcion: 'Diseño ultra vibrante y detalles llamativos contrastando con el logotipo azul!', precio: '$3,000 MXN', tallas: 'Tallas: 6,7,8,9,10,11'},
      {imagen: '/imagenes/producto5.png', descripcion: 'Si no sabes que color elegir, llevatelos todos, este es el sneaker perfecto para ti!', precio: '$3,500 MXN', tallas: 'Tallas: 6,7,8,9,10,11'},
      {imagen: '/imagenes/producto6.png', descripcion: 'No lleves un solo color, lleva 3!', precio: '$3,200 MXN' ,tallas: 'Tallas: 6,7,8,9,10,11'},
      {imagen: '/imagenes/producto7.png', descripcion: 'Verdes como el Shrek a un excelente precio! ', precio: '$999 MXN', tallas: 'Tallas: 6,7,8,9,10,11'},
      {imagen: '/imagenes/producto8.png', descripcion: 'Fan de Barbie?, lleva este sneaker rosa es el ideal para ti!', precio: '$1,500 MXN', tallas: 'Tallas: 6,7,8,9,10,11'},
      {imagen: '/imagenes/producto9.png', descripcion: 'Los clasicos de VANS a un super precio!', precio: '$1,200 MXN', tallas: 'Tallas: 6,7,8,9,10,11'},
      {imagen: '/imagenes/producto10.png', descripcion: 'Los Air Force que nunca pasan de moda!', precio: '$3,000 MXN', tallas: 'Tallas: 6,7,8,9,10,11'}
    ]
}
