import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  

  closed$ = new Subject<any>();
  showTabs=true;
  constructor(public router :Router) {
    
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
