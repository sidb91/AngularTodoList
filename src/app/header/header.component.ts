import { Component, OnInit, ViewChild } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = 'TODO PLANNER BOARD';
  //isUserLoggedIn:boolean = false;

  constructor(public authService: HardcodedAuthenticationService) {}

  ngOnInit(): void {

    //this.isUserLoggedIn = this.authService.isUserLoggedIn();

  }

  logOutUser(){
    this.authService.logoutUser();
  }


}
