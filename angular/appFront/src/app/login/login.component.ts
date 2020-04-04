import { UsersService } from './../users.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  errorMessage: string;

  constructor(private usersService: UsersService) {
    this.formulario = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
    this.errorMessage = null;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.usersService.login(this.formulario.value)
      .then(response => {
        if (response['error']) {
          this.errorMessage = response['error'];
        } else {
          this.errorMessage = null;
          localStorage.setItem('token', response['token']);
        }
      })
      .catch(err => console.log(err));
  }

}
