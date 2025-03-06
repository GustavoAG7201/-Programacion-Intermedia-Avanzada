import { Component } from '@angular/core';

@Component({
    selector: 'app-favoritos',
    templateUrl: './favoritos.component.html',
    styleUrls: ['./favoritos.component.css'],
    standalone: false
})
export class FavoritosComponent {

  introduccion = {
    titulo: 'Selección Favorita por Tavo Sneakers',
    descripcion: 'Descubre los productos que Tavo Sneakers ha seleccionado especialmente para ti. ¡Solo los mejores para nuestros clientes más exigentes!'
  };

  favoritos = [
    {
      imagen: '/imagenes/favorito1.jpeg',
      nombre: 'NIKE Be Yourself',
      descripcion: 'Inspirados en el traje de Miles Morales en Marvel’s Spider-Man 2',
      precio: '$1,200',
      tallas: 'Tallas: 8, 9, 10'
    },
    {
      imagen: '/imagenes/favorito2.jpeg',
      nombre: 'NIKE SMASHER',
      descripcion: 'Aplasta como Hulk con este par de running!',
      precio: '$1,500',
      tallas: 'Tallas: 7, 8, 9'
    }
  ];
}
