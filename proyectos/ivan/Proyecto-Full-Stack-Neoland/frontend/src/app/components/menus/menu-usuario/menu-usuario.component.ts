import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-usuario',
  templateUrl: './menu-usuario.component.html',
  styleUrls: ['./menu-usuario.component.scss']
})
export class MenuUsuarioComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  menuNav(ruta) {
    console.log('entro');
    this.router.navigate([ruta]);




  }

}
