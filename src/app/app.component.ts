import { Component } from '@angular/core';
import rates from './dummy-rates';

const key = 'rates';

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
    const { onLeftChange, onRightChange, onMultiplierChange, onRatesChange } = this;
    this.rates = rates;
    this.leftRate = 'USD';
    this.rightRate = 'MXN';
    this.multiplier = 10;
    this.callbacks = {
      onLeftChange: onLeftChange.bind(this),
      onRightChange: onRightChange.bind(this),
      onMultiplierChange: onMultiplierChange.bind(this),
      onRatesChange: onRatesChange.bind(this),
    }
    this.setRates();

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

  onRatesChange(rates) {
    this.rates = rates;
  }

  async setRates() {
    const saved = localStorage.getItem(key);
    let rates;
    if (saved) {
      rates = JSON.parse(saved);
      this.onRatesChange(rates);
    }
    const response = await fetch("https://api.exchangeratesapi.io/latest");
    if (response.status === 200) {
      const json = await response.json();
      rates = json.rates;
      localStorage.setItem(key, JSON.stringify(rates));
      this.onRatesChange(rates);
    }
  }
}
