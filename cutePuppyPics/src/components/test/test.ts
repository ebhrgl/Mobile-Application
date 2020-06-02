import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
/**
 * Generated class for the TestComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'test',
  templateUrl: 'test.html'
})

export class TestComponent {
  character;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
     public attentionCtrl: ModalController
  ) {

  }
  saveMethod(obj) {
    alert(' saved! the obj  - ' + JSON.stringify(obj));
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
