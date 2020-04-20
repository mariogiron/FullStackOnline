import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


//Para saber si el usuario esta loquedo o no

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  estaLogueado: boolean = false;

  constructor(private http: HttpClient) { }

  Login(username: string, password: string) {
    //llamada POST a mi API 
    this.http.post("http://localhost:3000/login",
      {
        "username": username,
        "password": password
      })
      .subscribe((responseAPI) => {
        console.log(responseAPI);
      })
    //Si la API responde con un OK

    //cambiar la variable estaLogueado


  }



}
