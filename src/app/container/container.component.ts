import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  @Input() rates: Array<number>;
  @Input() leftRate: string;
  @Input() rightRate: string;
  @Input() multiplier: number;
  @Input() callbacks: {
    onMultiplierChange: Function,
    onRightChange: Function,
    onLeftChange: Function
  };

  constructor() { }

  ngOnInit() {
  }

  get rightBase() {
    const { leftRate, rightRate, rates } = this;
    return rates[rightRate] / rates[leftRate];
  }

  onSwipeLeft() {
    this.callbacks.onMultiplierChange(this.multiplier * 10)
  }

  onSwipeRight() {
    this.callbacks.onMultiplierChange(this.multiplier / 10)
  }


}
