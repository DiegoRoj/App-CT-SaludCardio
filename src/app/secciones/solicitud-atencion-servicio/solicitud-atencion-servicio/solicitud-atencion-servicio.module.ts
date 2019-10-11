import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SolicitudAtencionServicioPage } from './solicitud-atencion-servicio.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitudAtencionServicioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SolicitudAtencionServicioPage]
})
export class SolicitudAtencionServicioPageModule {}
