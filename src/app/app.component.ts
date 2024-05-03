import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Listar Peliculas', url: '/pelicula-list', icon: 'mail' },
    { title: 'Agregar Peliculas', url: '/pelicula-edit', icon: 'paper-plane' }
  ];
  public labels = ['Aun no hay'];
  constructor() {}
}
