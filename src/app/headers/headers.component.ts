import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
  @Input() leftRate: String;
  @Input() rightRate: String;

  constructor() { }

  ngOnInit() {
  }

}
