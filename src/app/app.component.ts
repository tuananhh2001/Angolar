import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular13.';
  items : NbMenuItem[] = [
    {
      title: 'Profile',
      expanded: true,
      children: [
        {
          title: 'HOME',
          link:'./home'
        },
        {
          title: 'SHOP',
          link:'./shop'
          
        },
        {
          title: 'Logout',
        },
      ],
    },
    {
      title: 'Shopping Bag',
    },
    {
      title: 'Orders',
    },
  ];
}
