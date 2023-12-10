import { Component } from '@angular/core';

@Component({
  selector: 'app-xbox-games',
  templateUrl: './xbox-games.component.html',
  styleUrls: ['./xbox-games.component.css']
})
export class XboxGamesComponent {
  juegos = [
    { nombre: 'The Witcher 3: Wild Hunt', genero: 'RPG', precio: 29.99, ranking: 5, imagen: './assets/img/game-11.jpg' },
    { nombre: 'Cyberpunk 2077', genero: 'Acción/Aventura', precio: 49.99, ranking: 4, imagen: './assets/img/game-12.jpg' },
    { nombre: 'DOOM Eternal', genero: 'FPS', precio: 39.99, ranking: 4, imagen: 'url_imagen_3' },
    { nombre: 'Assassin\'s Creed Valhalla', genero: 'Acción/Aventura', precio: 59.99, ranking: 4, imagen: 'url_imagen_4' },
    { nombre: 'Red Dead Redemption 2', genero: 'Acción/Aventura', precio: 49.99, ranking: 5, imagen: 'url_imagen_5' },
    { nombre: 'Star Wars Jedi: Fallen Order', genero: 'Acción/Aventura', precio: 44.99, ranking: 4, imagen: 'url_imagen_6' },
    { nombre: 'Counter-Strike: Global Offensive', genero: 'FPS', precio: 14.99, ranking: 5, imagen: 'url_imagen_7' },
    { nombre: 'Rainbow Six Siege', genero: 'FPS', precio: 29.99, ranking: 4, imagen: 'url_imagen_8' },
    { nombre: 'The Elder Scrolls V: Skyrim', genero: 'RPG', precio: 19.99, ranking: 5, imagen: 'url_imagen_9' },
    { nombre: 'Minecraft', genero: 'Sandbox', precio: 24.99, ranking: 5, imagen: 'url_imagen_10' }
  ];
}
