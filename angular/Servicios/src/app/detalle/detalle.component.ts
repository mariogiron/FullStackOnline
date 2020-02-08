import { Escritor } from './../models/escritor.model';
import { EscritoresService } from '../services/escritores.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  escritor: Escritor;

  constructor(
    private activatedRoute: ActivatedRoute,
    private escritoresService: EscritoresService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      console.log(params.idEscritor);
      this.escritor = await this.escritoresService.getById(params.idEscritor);
    });
  }

}
