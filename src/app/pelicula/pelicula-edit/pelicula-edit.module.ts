import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeliculaEditPageRoutingModule } from './pelicula-edit-routing.module';

import { PeliculaEditPage } from './pelicula-edit.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PeliculaEditPageRoutingModule
  ],
  declarations: [PeliculaEditPage]
})
export class PeliculaEditPageModule {}
