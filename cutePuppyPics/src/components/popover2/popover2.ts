import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
/**
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'popover2',
  templateUrl: 'popover2.html'
})
export class Popover2Component {

  text: string;

  constructor( public viewCtrl: ViewController) {
    console.log('Hello PopoverComponent Component');
    this.text = 'Hello World';
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
