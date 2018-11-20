import { Component, OnInit, Input } from '@angular/core';

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

  get rightBase(): number {
    const { rates, leftRate, rightRate } = this;
    return rates[rightRate] / rates[leftRate];
  }

  constructor() { }

  ngOnInit() {
  }

}
