import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { FilePage } from '../pages/file/file';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage= HelloIonicPage;
  icons: string[];

  pages: Array<{
    title: string,
    component: any ,
    icon: string,

  }>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,

  ) {

    this.initializeApp();
    this.icons = ['flask'];

    // used for an example of ngFor and navigation
    this.pages = [
      {
        title: 'MENU 1',
        component: FilePage,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]

      },
      {
        title: 'MENU 2',
        component: ListPage ,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]

      },
      {
        title: 'MENU 3',
        component: HelloIonicPage ,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]

      },
      {
        title: 'MENU 4',
        component: HelloIonicPage ,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]

      }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}


