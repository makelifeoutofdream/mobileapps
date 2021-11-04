import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import {  QueryList, ViewChildren } from '@angular/core';

import { Platform, NavController, IonRouterOutlet } from '@ionic/angular';

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
    private navCtrl: NavController) {
      this.backButtonEvent();
  }

  backButtonEvent() {
    this.platform.backButton.subscribe(async () => {

        this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
            if (outlet && outlet.canGoBack()) {
                outlet.pop();
            } else  {
                 navigator['app'].exitApp();
            }
        });
    });
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
