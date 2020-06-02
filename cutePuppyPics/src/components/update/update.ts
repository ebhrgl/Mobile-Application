
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';

import { Component } from '@angular/core';

/**
 * Generated class for the TestComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'update',
  templateUrl: 'update.html'
})

export class UpdateComponent {

  items: any;

  constructor(public platform: Platform, public params: NavParams,  public viewCtrl: ViewController){
    this.items = params.data;
  }

  dismiss() {
    let data = { };
    this.viewCtrl.dismiss(data);
  }
}

