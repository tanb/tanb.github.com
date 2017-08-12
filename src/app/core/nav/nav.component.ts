import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { NotificationService } from '../services/notification.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit, OnDestroy {

  constructor(private notification: NotificationService,
              private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof RoutesRecognized) {
        console.log(event.url);
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  onClickNavbarBrand() {
    this.router.navigateByUrl('/');
  }

  onRouteChanged(userInfo) {
    console.log(userInfo);
  }
}