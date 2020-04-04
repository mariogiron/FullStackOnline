import { UsersService } from './users.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {

  constructor(private usersService: UsersService, private router: Router) { }

  async canActivate() {
    const response = await this.usersService.isAdmin();
    if (response['admin']) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
