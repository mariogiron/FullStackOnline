import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formulario: FormGroup;

  constructor(private usersService: UsersService, private router: Router) {
    this.formulario = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.usersService.register(this.formulario.value)
      .then(response => {
        if (response['affectedRows'] === 1) {
          alert('Registro correcto');
          this.router.navigate(['/login']);
        } else {
          alert('Error en el registro. Inténtalo más tarde');
        }
      })
      .catch(err => console.log(err));
  }

}
