import { Component, OnInit } from '@angular/core';
import {
 Firestore,
 collection,
 collectionData,
 deleteDoc,
 doc,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pelicula-list',
  templateUrl: './pelicula-list.page.html',
  styleUrls: ['./pelicula-list.page.scss'],
})
export class PeliculaListPage implements OnInit {

  constructor(
    private readonly firestore: Firestore,
    private alertCtrl: AlertController,
    private router: Router
  ) { }

  peliculaArray: any[] = [];

  ngOnInit() {
    this.listarPelicula();
  }

  listarPelicula = () => {
    console.log('Listar peliculas');
    const peliculaRef = collection(this.firestore, 'pelicula');
    collectionData(peliculaRef, { idField: 'id' }).subscribe((respuesta) => {
      this.peliculaArray = respuesta.map((pelicula) => ({
        ...pelicula,
      }));
      console.log('estos son las peliculas', respuesta);
    });
  };
 
 
  eliminarPelicula = (id: string) => {
    console.log('Eliminando pelicula con ID:', id);
    const documentRef = doc(this.firestore, 'pelicula', id);
 
 
    deleteDoc(documentRef)
      .then(() => {
        console.log('Pelicula eliminada correctamente');
        this.router.navigate(['/pelicula-list']);
      })
      .catch((error) => {
        console.error('Error al eliminar la pelicula:', error);
      });
  };
}
