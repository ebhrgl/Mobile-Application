import {Component, OnInit} from '@angular/core';
import { PopoverController } from 'ionic-angular';

import {NavController, NavParams, ViewController} from 'ionic-angular';


import {ModalController ,Platform, ActionSheetController } from 'ionic-angular';
import {TestComponent} from "../../components/test/test";
import {PopoverComponent} from "../../components/popover/popover";
import {AttentionComponent} from "../../components/attention/attention";
import {UpdateComponent} from "../../components/update/update";
import {Popover2Component} from "../../components/popover2/popover2";
import {Popover3Component} from "../../components/popover3/popover3";
import {StateComponent} from "../../components/state/state";
import { SearchComponent } from '../../components/search/search';
import {Popover4Component} from "../../components/popover4/popover4";
import {Http} from "@angular/http";

export class Country {
  id: number;
  name: string;
  iso: string;
  domain: string;
  phone: string;
}

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage implements OnInit{
  countries: Array<Country> = [];

  constructor(public modalCtrl: ModalController, public navCtrl: NavController,
              public navParams: NavParams, public platform: Platform,
              public actionsheetCtrl: ActionSheetController,
              public viewCtrl: ViewController,
              public popoverCtrl: PopoverController,
              private http: Http
              ) {

 }
  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('assets/mockups/country-mockup.json')
      .map((res) => res.json())
      .subscribe(data => {
        console.log(data);
      this.countries = data;
    });
  }

  presentPopover() {
    let popover = this.popoverCtrl.create(PopoverComponent);
    popover.present();
  }

  presentPopover2() {
    let popover = this.popoverCtrl.create(Popover2Component);
    popover.present();
  }

  presentPopover3() {
    let popover = this.popoverCtrl.create(Popover3Component);
    popover.present();
  }
  presentPopover4() {
    let popover = this.popoverCtrl.create(Popover4Component);
    popover.present();
  }

  openModal(characterNum) {

  let modal = this.modalCtrl.create(TestComponent,characterNum);
  modal.present();
}

  presentAttention() {
    let modal = this.modalCtrl.create(AttentionComponent);
    modal.present();
  }


  presentUpdate(object) {
    let modal = this.modalCtrl.create(UpdateComponent, object);
    modal.present();
  }

  presentState() {
    let modal = this.modalCtrl.create(StateComponent);
    modal.present();
  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }


  presentSearch(characterNum) {
    let modal = this.modalCtrl.create(SearchComponent);
    modal.present();
  }


 openMenu() {
   let actionSheet = this.actionsheetCtrl.create({
    buttons: [
       {
         text: 'Profile',
         icon: !this.platform.is('ios') ? 'person' : null,
         handler: () => {
           console.log('Profile clicked');
         }
       },
       {
         text: 'Settings',
         icon: !this.platform.is('ios') ? 'settings' : null,
         handler: () => {
           console.log('Settings clicked');
         }
       },
       {
         text: 'Log out',
         icon: !this.platform.is('ios') ? 'log-out' : null,
         handler: () => {
           console.log('Play clicked');
         }
       },
     ]
   });
   actionSheet.present();
 }
}
