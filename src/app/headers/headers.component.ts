import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
  @Input() leftRate: String;
  @Input() rightRate: String;
  @Input() onRightChange: Function;
  @Input() onLeftChange: Function;
  @Input() rates: object;

  get rateNames() {
    return Object.keys(this.rates);
  }

  onSwapClick() {
    const { leftRate, rightRate } = this;
    this.onRightChange(leftRate);
    this.onLeftChange(rightRate);
  }

  onLeftSelect(rate) {
    this.onLeftChange(rate);
  }

  onRightSelect(rate) {
    this.onRightChange(rate);
  }

  constructor() { }

  ngOnInit() {
  }

}
