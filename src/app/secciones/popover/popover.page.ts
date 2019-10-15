import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopmenuComponent } from 'src/app/componentes/popmenu/popmenu.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor( private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async mostrarPop() {
    const popover = await this.popoverCtrl.create({
      component: PopmenuComponent,
      event: event,
      mode: 'ios'
    });

    await popover.present();
  }

}