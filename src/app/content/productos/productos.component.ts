import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

    productos = [
      {imagen: '/imagenes/sneaker9.jpg', descripcion: 'eta tu no la tiene, nah', precio: '$mil ocho mil'},
      {imagen: '/imagenes/sneaker10.jpg', descripcion: 'eta tu no la tiene, nah', precio: '$mil ocho mil'},
      {imagen: '/imagenes/sneaker11.png', descripcion: 'eta tu no la tiene, nah', precio: '$mil ocho mil'},
      {imagen: '/imagenes/sneaker12.png', descripcion: 'eta tu no la tiene, nah', precio: '$mil ocho mil'},
      {imagen: '/imagenes/sneaker13.png', descripcion: 'toyota', precio: '$mil ocho mil'},
      {imagen: '/imagenes/sneaker4.jpg', descripcion: 'eta tu no la tiene, nah', precio: '$mil ocho mil'},
      {imagen: '/imagenes/sneaker5.jpg', descripcion: 'eta tu no la tiene, nah', precio: '$mil ocho mil'},
      {imagen: '/imagenes/sneaker6.jpg', descripcion: 'eta tu no la tiene, nah', precio: '$mil ocho mil'},
      {imagen: '/imagenes/sneaker7.jpg', descripcion: 'eta tu no la tiene, nah', precio: '$mil ocho mil'},
      {imagen: '/imagenes/sneaker8.jpg', descripcion: 'eta tu no la tiene, nah', precio: '$mil ocho mil'}
    ]
}
