import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/alumnos'
  }

  getAll(): Promise<any[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'user-token': localStorage.getItem('token')
      })
    }
    return this.http.get<any[]>(this.baseUrl, httpOptions).toPromise();
  }

}
