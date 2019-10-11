import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GuiasCalculadorasPage } from './guias-calculadoras.page';

const routes: Routes = [
  {
    path: '',
    component: GuiasCalculadorasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GuiasCalculadorasPage]
})
export class GuiasCalculadorasPageModule {}
