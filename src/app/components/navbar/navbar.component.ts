import { Component } from '@angular/core';
import { navItems } from './navbar-items';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navItems = navItems
}
