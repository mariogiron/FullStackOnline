import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-usuario-perfil',
  templateUrl: './menu-usuario-perfil.component.html',
  styleUrls: ['./menu-usuario-perfil.component.scss']
})
export class MenuUsuarioPerfilComponent implements OnInit {



  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {


  }

}
