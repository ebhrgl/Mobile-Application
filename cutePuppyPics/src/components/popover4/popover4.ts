import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import {HelloIonicPage} from "../../pages/hello-ionic/hello-ionic";

import {ModalController ,Platform, ActionSheetController } from 'ionic-angular';
/**
 * Generated class for the Popover4Component component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'popover4',
  templateUrl: 'popover4.html'
})
export class Popover4Component {

  text: string;

  constructor(public modalCtrl: ModalController,public viewCtrl: ViewController) {
    console.log('Hello Popover4Component Component');
    this.text = 'Hello World';
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  newOpen() {
    let modal = this.modalCtrl.create(HelloIonicPage);
    modal.present();
  }
}
