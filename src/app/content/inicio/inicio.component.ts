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
      {url:'/imagenes/sneaker4.jpg', texto: 'Sneaker1'},
      {url:'/imagenes/sneaker5.jpg', texto: 'Sneaker2'},
      {url:'/imagenes/sneaker6.jpg', texto: 'Sneaker3'},
      {url:'/imagenes/sneaker7.jpg', texto: 'Sneaker4'},
      {url:'/imagenes/sneaker8.jpg', texto: 'Sneaker5'}
    ]

    imagenes3 = [
      {url:'/imagenes/sneaker9.jpg', texto: 'Sneaker9'},
      {url:'/imagenes/sneaker10.jpg', texto: 'Sneaker10'},
      {url:'/imagenes/sneaker11.png', texto: 'Sneaker11'},
      {url:'/imagenes/sneaker12.jpeg', texto: 'Sneaker12'},
      {url:'/imagenes/sneaker13.png', texto: 'Sneaker13'}
    ]
    
}
