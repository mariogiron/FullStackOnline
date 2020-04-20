import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //Formualrio Template-driven

  username: string;
  password: string;

  constructor(private user: LoginService) { }

  ngOnInit(): void {
  }


  SendForm() {
    this.user.Login(this.username, this.password);
  }

}
