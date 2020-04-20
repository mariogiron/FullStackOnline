import { Component, OnInit, Input } from '@angular/core';
import { UsuarioModule } from 'src/app/models/usuario.module';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-usuario-perfil',
  templateUrl: './usuario-perfil.component.html',
  styleUrls: ['./usuario-perfil.component.scss']
})
export class UsuarioPerfilComponent implements OnInit {

  /* @Input() arrUsuario: any = {};
  @Input() id: number;

  usuario: UsuarioModule[]; */
  arrUsuario: UsuarioModule[];
  id: number;

  constructor(private usuarioService: UsuarioService) {
    this.id = 0;
    this.arrUsuario = [];

  }

  async ngOnInit(): Promise<any> {
    this.arrUsuario = await this.usuarioService.UsuarioCompleto();
    /*  this.usuario = this.arrUsuario; */
    /* this.usuario = this.usuarioComponent.usuario */

  }

}
