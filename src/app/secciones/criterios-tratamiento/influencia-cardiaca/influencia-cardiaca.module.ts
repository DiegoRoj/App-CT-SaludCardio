import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InfluenciaCardiacaPage } from './influencia-cardiaca.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { PopmenuComponent } from 'src/app/componentes/popmenu/popmenu.component';

const routes: Routes = [
  {
    path: '',
    component: InfluenciaCardiacaPage
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
    ComponentesModule,
    NgbAccordionModule
  ],
  declarations: [InfluenciaCardiacaPage]
})
export class InfluenciaCardiacaPageModule {}
