import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DiabetesPage } from './diabetes.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '',
    component: DiabetesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentesModule,
    NgbAccordionModule
  ],
  declarations: [DiabetesPage]
})
export class DiabetesPageModule {}
