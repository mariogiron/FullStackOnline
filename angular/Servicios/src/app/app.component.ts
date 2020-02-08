import { RandomService } from './services/random.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private randomService: RandomService) { }

  ngOnInit() {
    this.randomService.getRandomNum()
      .then(response => {
        console.log(response);
      });
  }

}
