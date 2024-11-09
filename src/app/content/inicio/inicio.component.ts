import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

    imagenes = [
      '/imagenes/sneaker1.jpg',
      '/imagenes/sneaker2.jpg',
      '/imagenes/sneaker3.jpg'
    ]

     imagenes2 = [
      {url:'/imagenes/sneaker4.jpg', texto: 'Agregar al carrito'},
      {url:'/imagenes/sneaker5.jpg', texto: 'Agregar al carrito'},
      {url:'/imagenes/sneaker6.jpg', texto: 'Agregar al carrito'},
      {url:'/imagenes/sneaker7.jpg', texto: 'Agregar al carrito'},
      {url:'/imagenes/sneaker8.jpg', texto: 'Agregar al carrito'}
    ]

    imagenes3 = [
      {url:'/imagenes/sneaker9.jpg', texto: 'Agregar al carrito'},
      {url:'/imagenes/sneaker10.jpg', texto: 'Agregar al carrito'},
      {url:'/imagenes/sneaker11.png', texto: 'Agregar al carrito'},
      {url:'/imagenes/sneaker12.png', texto: 'Agregar al carrito'},
      {url:'/imagenes/sneaker13.png', texto: 'Agregar al carrito'}
    ]
    
}
