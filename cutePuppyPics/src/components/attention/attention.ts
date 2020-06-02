import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
/**
 * Generated class for the TestComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'attention',
  templateUrl: 'attention.html'
})

export class AttentionComponent {
  character;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public attentionCtrl: ModalController
  ) {

  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
