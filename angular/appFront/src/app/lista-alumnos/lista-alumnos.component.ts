import { AlumnosService } from './../alumnos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  arrAlumnos: any[];

  constructor(private alumnosService: AlumnosService, private router: Router) {
    this.arrAlumnos = [];
  }

  ngOnInit(): void {
    this.alumnosService.getAll()
      .then(response => {
        if (response['error']) {
          this.router.navigate(['/login']);
        } else {
          this.arrAlumnos = response;
        }
      })
      .catch(err => console.log(err));
  }

}
