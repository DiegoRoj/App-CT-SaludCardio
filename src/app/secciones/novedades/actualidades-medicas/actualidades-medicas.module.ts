import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ActualidadesMedicasPage } from './actualidades-medicas.page';

const routes: Routes = [
  {
    path: '',
    component: ActualidadesMedicasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ActualidadesMedicasPage]
})
export class ActualidadesMedicasPageModule {}
