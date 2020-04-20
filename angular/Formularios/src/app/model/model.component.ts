import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

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
        Validators.required,
        Validators.maxLength(8)
      ]),
      apellidos: new FormControl('', [
        Validators.minLength(3)
      ]),
      email: new FormControl('', [
        Validators.pattern(/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/)
      ]),
      edad: new FormControl('', [
        this.validatorEdad
      ]),
      password: new FormControl(),
      repite_password: new FormControl()
    }, [this.validatorPasswords]);
  }

  onSubmit() {
    console.log(this.formulario.value);
  }

  ngOnInit() {
    const nombreControl = this.formulario.controls.nombre;
    nombreControl.valueChanges.pipe(debounceTime(500)).subscribe((value) => {
      console.log(value);
      // Lanzar una petición al back para que mire si el email ya está registrado
    });
  }

  validatorEdad(control) {
    const edadValue = control.value;
    const min = 12;
    const max = 65;
    if (edadValue >= min && edadValue <= max) {
      return null;
    } else {
      return { validatorEdad: { min, max } };
    }
  }

  validatorPasswords(form) {
    const password = form.controls.password.value;
    const repitePassword = form.controls.repite_password.value;

    if (password === repitePassword) {
      return null;
    } else {
      return { validatorPassword: false };
    }
  }

}
