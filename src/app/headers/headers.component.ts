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


  onSwapClick() {
    const { leftRate, rightRate } = this;
    this.onRightChange(leftRate);
    this.onLeftChange(rightRate);
  }

  constructor() { }

  ngOnInit() {
  }

}
