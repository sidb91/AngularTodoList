import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HardcodedAuthenticationService {
  constructor() {}

  authenticate(username: string, password: string): boolean {
    if (username === 'admin' && password === '') {
      return true;
    } else {
      return false;
    }
  }
}
