import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InformacionPacientesPage } from './informacion-pacientes.page';

const routes: Routes = [
  {
    path: '',
    component: InformacionPacientesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InformacionPacientesPage]
})
export class InformacionPacientesPageModule {}
