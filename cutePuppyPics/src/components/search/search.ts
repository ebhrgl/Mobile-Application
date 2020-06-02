import { Component } from '@angular/core';
import { Platform,  ViewController } from 'ionic-angular';
/**
 * Generated class for the SearchComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'search',
  templateUrl: 'search.html'
})
export class SearchComponent {

  items;

  constructor( public platform: Platform,
               public viewCtrl: ViewController) {

    this.initializeItems();
  }
  initializeItems() {
    this.items = [
      'Country Id',
      'Name',
      'ISO Code',
      'Domain Name',
      'Phone(Domain name)'
    ];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
      return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}




