import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPage } from './login/login.page';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { HttpClientModule } from '@angular/common/http';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';
import {BluetoothSerial} from '@ionic-native/bluetooth-serial/ngx';
import {EmailComposer} from '@ionic-native/email-composer/ngx';
import {File} from '@ionic-native/file/ngx';
import {SocialSharing} from '@ionic-native/social-sharing/ngx'
import { IonicSelectableModule } from 'ionic-selectable';
import { DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { Uid } from '@ionic-native/uid/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Sim } from '@ionic-native/sim/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,IonicSelectableModule,
    ReactiveFormsModule,FormsModule,
    NgxDatatableModule,IonicStorageModule.forRoot({name: '_myDb',
  driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]})],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },DatePipe, UniqueDeviceID,
    Uid,Sim,
    AndroidPermissions,
    SQLite,
    BluetoothSerial,
    File,
    SocialSharing,
    EmailComposer,
    SQLitePorter,
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
