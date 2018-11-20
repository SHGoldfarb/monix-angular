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
  @Input() callbacks: object;

  constructor() { }

  ngOnInit() {
  }

  get rightBase() {
    const { leftRate, rightRate, rates } = this;
    return rates[rightRate] / rates[leftRate];
  }


}
