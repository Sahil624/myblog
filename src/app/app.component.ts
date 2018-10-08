import { Component } from '@angular/core';
import { RoutesInterface } from './app.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  
  routes :RoutesInterface[] = [
        {
          name:'Home',
          route: ''
        },
        {
          name:'About',
          route: 'about'
        },
        {
          name: 'Contact',
          route: 'contact'
        }
    ]
}
