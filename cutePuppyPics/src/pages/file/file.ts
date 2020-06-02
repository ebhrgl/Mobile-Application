import { Component } from '@angular/core';
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
import {SearchComponent} from "../../components/search/search";
import {Popover4Component} from "../../components/popover4/popover4";

@Component({
  selector: 'page-file',
  templateUrl: 'file.html'
})
export class FilePage {
  gaming: string = "n64";
  icons: string[];

  constructor(public modalCtrl: ModalController, public navCtrl: NavController,
              public navParams: NavParams, public platform: Platform,
              public actionsheetCtrl: ActionSheetController,
              public viewCtrl: ViewController,
              public popoverCtrl: PopoverController) {

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


  presentUpdate(characterNum) {
    let modal = this.modalCtrl.create(UpdateComponent, characterNum);
    modal.present();
  }

  presentState() {
    let modal = this.modalCtrl.create(StateComponent);
    modal.present();
  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  presentSearch() {
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


