import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InformacionPacientesPage } from './informacion-pacientes.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { PopmenuComponent } from 'src/app/componentes/popmenu/popmenu.component';

const routes: Routes = [
  {
    path: '',
    component: InformacionPacientesPage
  }
];

@NgModule({
  entryComponents: [
    PopmenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentesModule
  ],
  declarations: [InformacionPacientesPage]
})
export class InformacionPacientesPageModule {}
