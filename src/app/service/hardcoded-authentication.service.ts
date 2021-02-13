import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HardcodedAuthenticationService {
  constructor() { }

  authenticate(username: string, password: string): boolean {

    if (username === 'admin' && password === '') {
      sessionStorage.setItem('authenticatedUser', username);
      //console.log('after log in : '+this.isUserLoggedIn());
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let userLoggedIn = sessionStorage.getItem('authenticatedUser');
    return !(userLoggedIn === null);
  }

  logoutUser() {
    sessionStorage.removeItem('authenticatedUser');
  }
}
