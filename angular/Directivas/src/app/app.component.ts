import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  estilosParrafo: any;

  constructor() {
    this.estilosParrafo = {
      color: 'red',
      fontSize: '24px'
    };
  }

  handleClick() {
    this.estilosParrafo.color = 'green';
  }

}
