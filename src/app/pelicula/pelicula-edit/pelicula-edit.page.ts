import { Component, OnInit } from '@angular/core';
import {
  Firestore,
  Timestamp,
  addDoc,
  collection,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
} from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';


import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-pelicula-edit',
  templateUrl: './pelicula-edit.page.html',
  styleUrls: ['./pelicula-edit.page.scss'],
})
export class PeliculaEditPage implements OnInit {

  registroForm = new FormGroup({
    id: new FormControl(''),
    titulo: new FormControl(''),
    director: new FormControl(''),
    pais: new FormControl(''),
    lanzamiento: new FormControl(''),
    puntuacion: new FormControl(''),
    recomendada: new FormControl(false),
  });

  peliculaId: string | null = null;


  pelicula: any = {};

  constructor(
    private readonly firestore: Firestore,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      console.log(params);
      this.peliculaId = params.id;
    });
    if (this.peliculaId) {
      this.obtenerPelicula(this.peliculaId);
    } else {
    }
  }

  incluirPelicula = () => {
    console.log('Aqui incluir en firebase');
    let peliculaRef = collection(this.firestore, 'pelicula');
    const formValue = {
      ...this.registroForm.value,
    };
 
 
    addDoc(peliculaRef, formValue)
      .then((doc) => {
        console.log('Registro hecho');
        this.router.navigate(['/pelicula-list']);
      })
      .catch((error) => {
        console.error('Error al crear el Pelicula:', error);
      });
  };
 
 
  editarPelicula = (id: string) => {
    console.log('Aqui editar en firebase');
    let document = doc(this.firestore, 'pelicula', id);
    const formValue = {
      ...this.registroForm.value,
    };
 
 
    updateDoc(document, formValue)
      .then((doc) => {
        console.log('Registro editado');
        this.router.navigate(['/pelicula-list']);
      })
 
 
      .catch((error) => {
        console.error('Error al editar el Pelicula:', error);
      });
  };
 
 
  obtenerPelicula = (id: string) => {
    console.log('Listar pelicula');
    let documentRef = doc(this.firestore, 'pelicula', id);
 
 
    getDoc(documentRef)
      .then((doc) => {
        if (doc.exists()) {
          console.log('Detalle del pelicula:', doc.data());
          this.pelicula = doc.data();
          this.registroForm.setValue({
            id: this.peliculaId || '',
            titulo: this.pelicula['titulo'] || '',
            director: this.pelicula['director'] || '',
            pais: this.pelicula['pais'] || '',
            lanzamiento: this.pelicula['lanzamiento'] || '',
            puntuacion: this.pelicula['puntuacion'] || '',
            recomendada: this.pelicula['recomendada'] || false,
          });
        } else {
          console.log('No se encontró el pelicula con el ID proporcionado.');
        }
      })
      .catch((error) => {
        console.error('Error al consultar el alumno:', error);
      });
  };
 
 
  incluirOEditarPelicula() {
    if (this.peliculaId) {
      this.editarPelicula(this.peliculaId);
    } else {
      this.incluirPelicula();
    }
  }

}
