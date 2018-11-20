import { Component, OnInit, Input } from '@angular/core';

const indexes: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const subindexes: Array<number> = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() multiplier: number;
  @Input() rightBase: number;
  openedIndexes: Array<number>;
  closedIndexes: Array<number>;
  opened: number;

  constructor() {
    this.openedIndexes = indexes;
  }

  ngOnInit() {
  }

  onRowClick(index: number) {
    if (this.openedIndexes) {
      this.openedIndexes = undefined;
      this.closedIndexes = subindexes;
      this.opened = index
    } else {
      this.openedIndexes = indexes;
      this.closedIndexes = undefined;
      this.opened = null;
    }
  }

}
