import { Component } from '@angular/core';
import rates from './dummy-rates';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Monix';
  leftRate: string;
  rightRate: string;
  rates: object;
  multiplier: number;
  callbacks: object;

  ngOnInit() {
    const { onLeftChange, onRightChange, onMultiplierChange } = this;
    this.rates = rates;
    this.leftRate = 'USD';
    this.rightRate = 'CLP';
    this.multiplier = 10;
    this.callbacks = {
      onLeftChange: onLeftChange.bind(this),
      onRightChange: onRightChange.bind(this),
      onMultiplierChange: onMultiplierChange.bind(this),
    }
  }

  onLeftChange(newRate: string) {
    this.leftRate = newRate;
  }

  onRightChange(newRate: string) {
    this.rightRate = newRate;
  }

  onMultiplierChange(newMult: number) {
    this.multiplier = newMult;
  }
}
