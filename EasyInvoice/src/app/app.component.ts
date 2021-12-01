import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import {  QueryList, ViewChildren } from '@angular/core';

import { Platform, NavController, IonRouterOutlet, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  

  closed$ = new Subject<any>();
  showTabs=true;
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;
  constructor(public router :Router, private platform: Platform,
    private navCtrl: NavController,public alertController: AlertController) {
      this.backButtonEvent();
  }

  backButtonEvent() {
    this.platform.backButton.subscribe(async () => {

        this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
            if (outlet && outlet.canGoBack()) {
                outlet.pop();
            } else  {
                this.presentAlertConfirm();
            }
        });
    });
}

async presentAlertConfirm() {
  const alert = await this.alertController.create({
   // cssClass: 'my-custom-class',
    header: 'Confirm!',
    message: '<strong>Are you sure to exit the app?</strong>!!!',
    buttons: [
      {
        text: 'No',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Yes',
        handler: () => {
          navigator['app'].exitApp();
        }
      }
    ]
  });

  await alert.present();
}


  ngOnInit(){
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      takeUntil(this.closed$)
    ).subscribe(event => {
      
      if (event['url'] === '/login' || event['url'] == '') {
        this.showTabs = false; // <-- hide tabs on specific pages
      }
    });
  }
    
  ngOnDestroy() {
    this.closed$.next(); // <-- close subscription when component is destroyed
  }

  
}
