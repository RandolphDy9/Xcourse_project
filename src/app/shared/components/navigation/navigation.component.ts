import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  user: string;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    console.log(this.authService.isAuthenticated());
    // console.log('isAdmin check: ' + this.authService.isAdmin());
    console.log("admin flag is: " + this.authService.AdminFlag);
  }

  onLogout() {
    this.authService.logoutUser();
  }

}
