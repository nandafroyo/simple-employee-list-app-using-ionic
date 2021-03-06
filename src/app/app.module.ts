import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CallNumber } from '@ionic-native/call-number';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailItemPage } from '../pages/detail-item/detail-item';
import { PeopleService } from '../services/people.service';
import { HttpModule } from '@angular/http';
import { AddPage } from '../pages/add/add';
import { EditPage } from '../pages/edit/edit';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailItemPage,
    AddPage,
    EditPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailItemPage,
    AddPage,
    EditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PeopleService,
    CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
