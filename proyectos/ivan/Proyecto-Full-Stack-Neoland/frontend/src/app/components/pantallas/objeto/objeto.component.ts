import { Component, OnInit } from '@angular/core';
import { ObjetoService } from 'src/app/services/objeto.service';
import { ObjetoModule } from 'src/app/models/objeto.module';

@Component({
  selector: 'app-objeto',
  templateUrl: './objeto.component.html',
  styleUrls: ['./objeto.component.scss']
})
export class ObjetoComponent implements OnInit {


  arrObjeto: ObjetoModule[];

  constructor(private objetoService: ObjetoService) {
    this.arrObjeto = [];
  }

  async ngOnInit(): Promise<any> {

    this.arrObjeto = await this.objetoService.ObjetoCompleto();

  }



}
