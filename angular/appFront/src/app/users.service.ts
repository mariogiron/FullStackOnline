import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/users';
  }

  register(formValue): Promise<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, formValue).toPromise();
  }

  login(formValue): Promise<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, formValue).toPromise();
  }

  isAdmin() {
    const httpOptions = {
      headers: new HttpHeaders({
        'user-token': localStorage.getItem('token')
      })
    };

    return this.http.get(`${this.baseUrl}/admin`, httpOptions).toPromise();
  }

}
