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
}
