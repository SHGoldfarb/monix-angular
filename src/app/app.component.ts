import { Component } from '@angular/core';
import rates from './dummy-rates';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Monix';
  leftRate;
  rightRate;
  rates;
  ngOnInit() {
    this.rates = rates;
    this.leftRate = 'USD';
    this.rightRate = 'CLP';
  }
}
