import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-footer',
  templateUrl: './menu-footer.component.html',
  styleUrls: ['./menu-footer.component.scss']
})
export class MenuFooterComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }


}
