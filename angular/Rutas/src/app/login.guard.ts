import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    console.log('Ejecuta el GUARD Login');
    const randomNum = Math.random();
    console.log(randomNum);
    if (randomNum > 0.4) {
      return true;
    } else {
      this.router.navigate(['hola']);
      return false;
    }
  }
}
