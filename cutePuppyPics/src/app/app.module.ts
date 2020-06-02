import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TestComponent } from '../components/test/test';
import { PopoverComponent } from '../components/popover/popover';
import { AttentionComponent } from '../components/attention/attention';
import { UpdateComponent } from '../components/update/update';
import { Popover2Component } from '../components/popover2/popover2';
import { Popover3Component } from '../components/popover3/popover3';
import { StateComponent } from '../components/state/state';
import {FilePage} from "../pages/file/file";
import { SearchComponent } from '../components/search/search';
import { Popover4Component } from '../components/popover4/popover4';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import {HttpModule} from "@angular/http";


@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ListPage,
    TestComponent,
    PopoverComponent,
    AttentionComponent,
    UpdateComponent,
    Popover2Component,
    Popover3Component,
    StateComponent,
    FilePage,
    SearchComponent,
    Popover4Component
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ListPage,
    TestComponent,
    PopoverComponent,
    AttentionComponent,
    UpdateComponent,
    Popover2Component,
    Popover3Component,
    StateComponent,
    FilePage,
    SearchComponent,
    Popover4Component
  ],

  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,

  ]

})
export class AppModule {}




