import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  @Input() rates: Array<Number>;
  @Input() leftRate: String;
  @Input() rightRate: String;

  constructor() { }

  ngOnInit() {
  }

}
