import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContactoAlfarmaPage } from './contacto-alfarma.page';

const routes: Routes = [
  {
    path: '',
    component: ContactoAlfarmaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContactoAlfarmaPage]
})
export class ContactoAlfarmaPageModule {}
