import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeliculaEditPage } from './pelicula-edit.page';

const routes: Routes = [
  {
    path: '',
    component: PeliculaEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeliculaEditPageRoutingModule {}
