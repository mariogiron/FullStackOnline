import { UsuariosService } from './../usuarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
  }

  pulsarBoton() {
    this.usuariosService.incrementarContador();
  }

  agregarUsuario() {
    this.usuariosService.agregarUsuario({ nombre: 'Mario', apellidos: 'Girón' });
  }

}
