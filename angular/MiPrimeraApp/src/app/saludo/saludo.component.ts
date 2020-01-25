import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  @Input() mensaje: string;
  identif: string;

  constructor() {
    console.log(this.mensaje);

    // this.mensaje = 'Hola, buenos días';
    this.identif = 'parrafoPpal';

    setTimeout(() => {
      // this.mensaje = 'Otro mensaje';
      this.identif = 'parrafoOtroIdentif';
    }, 2000);
  }

  ngOnInit() {
  }

  mostrarCadena() {
    const cadena = 'Esta es la nueva cadena';
    return cadena;
  }

  pulsarBoton() {
    console.log('He pulsado el botón');
  }

  cambioValor($event) {
    console.log($event.target.value);
    $event.target.style.backgroundColor = 'red';
    console.log('Se ha modificado el valor');
  }

}
