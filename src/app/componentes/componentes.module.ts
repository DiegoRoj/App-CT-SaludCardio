import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NavigationHeaderComponent } from './navigation-header/navigation-header.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavigationHeaderComponent
  ],
  exports:[
    HeaderComponent,
    NavigationHeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentesModule { }
