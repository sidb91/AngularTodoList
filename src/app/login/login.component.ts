import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = 'admin';
  password = '';
  loginErrorMessage = 'Invalid credentials!';
  inValidLogin = false;

  constructor(
    private router: Router,
    private authService: HardcodedAuthenticationService
  ) {}

  ngOnInit(): void {}

  handleLogin() {
    if (this.authService.authenticate(this.username, this.password)) {
      this.inValidLogin = false;
      this.router.navigate(['/todo', this.username]);
    } else {
      this.inValidLogin = true;
    }
  }
}
