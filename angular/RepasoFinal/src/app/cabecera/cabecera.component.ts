import { Observable } from 'rxjs';
import { UsuariosService } from './../usuarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  usuariosOb: Observable<any[]>;

  constructor(public usuariosService: UsuariosService) {
    // this.usuariosService.usuariosOb().subscribe((usuarios) => {
    //   console.log(usuarios);
    // });

    this.usuariosOb = this.usuariosService.usuariosOb();
  }

  ngOnInit(): void {
  }

}
