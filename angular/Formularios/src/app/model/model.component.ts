import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required
      ]),
      apellidos: new FormControl(),
      email: new FormControl(),
      edad: new FormControl(),
      password: new FormControl(),
      repite_password: new FormControl()
    });
  }

  onSubmit() {
    console.log(this.formulario.value);
  }

  ngOnInit() {
  }

}
