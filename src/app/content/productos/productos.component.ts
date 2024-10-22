import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

    productos = [
      {imagen: '/imagenes/producto1.png', descripcion: 'eta tu no la tiene, nah', precio: '$mil ocho mil', tallas: 'Tallas: 6,7,8,9,10,11'},
      {imagen: '/imagenes/producto2.png', descripcion: 'eta tu no la tiene, nah', precio: '$mil ocho mil', tallas: 'Tallas: 6,7,8,9,10,11'},
      {imagen: '/imagenes/producto3.png', descripcion: 'eta tu no la tiene, nah', precio: '$mil ocho mil', tallas: 'Tallas: 6,7,8,9,10,11'},
      {imagen: '/imagenes/producto4.png', descripcion: 'eta tu no la tiene, nah', precio: '$mil ocho mil', tallas: 'Tallas: 6,7,8,9,10,11'},
      {imagen: '/imagenes/producto5.png', descripcion: 'toyota', precio: '$mil ocho mil', tallas: 'Tallas: 6,7,8,9,10,11'},
      {imagen: '/imagenes/producto6.png', descripcion: 'eta tu no la tiene, nah', precio: '$mil ocho mil'},
      {imagen: '/imagenes/producto7.png', descripcion: 'eta tu no la tiene, nah', precio: '$mil ocho mil', tallas: 'Tallas: 6,7,8,9,10,11'},
      {imagen: '/imagenes/producto8.png', descripcion: 'eta tu no la tiene, nah', precio: '$mil ocho mil', tallas: 'Tallas: 6,7,8,9,10,11'},
      {imagen: '/imagenes/producto9.png', descripcion: 'eta tu no la tiene, nah', precio: '$mil ocho mil', tallas: 'Tallas: 6,7,8,9,10,11'},
      {imagen: '/imagenes/producto10.png', descripcion: 'eta tu no la tiene, nah', precio: '$mil ocho mil', tallas: 'Tallas: 6,7,8,9,10,11'}
    ]
}
