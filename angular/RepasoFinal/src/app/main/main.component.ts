import { UsuariosService } from './../usuarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  usuarios: any[];
  jugadoresSeleccionados: any[];

  constructor(private usuariosService: UsuariosService) {
    this.usuarios = [
      { nombre: 'Mario', id: 1 },
      { nombre: 'Federico', id: 2 },
      { nombre: 'Rosa', id: 3 },
      { nombre: 'Marcial', id: 4 },
      { nombre: 'Mateo', id: 5 },
    ]
    this.jugadoresSeleccionados = [];
  }

  ngOnInit(): void {
  }

  agregarJugador() {
    let jugSelect = document.getElementById('jugadores');
    console.log(jugSelect['value']);
    this.jugadoresSeleccionados.push(jugSelect['value']);
    console.log(this.jugadoresSeleccionados);
  }

  pulsarBoton() {
    this.usuariosService.incrementarContador();
  }

  agregarUsuario() {
    this.usuariosService.agregarUsuario({ nombre: 'Mario', apellidos: 'Girón' });
  }

  // Método Submit del formulario
  onSubmit() {
    //formValues.jugadoresSeleccionados = this.jugadoresSeleccionados;
  }

}
