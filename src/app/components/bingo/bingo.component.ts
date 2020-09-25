import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { IPlate } from './controls/plate/plate.control';

@Component({
  selector: 'bingo',
  templateUrl: './bingo.component.html'
})
export class BingoComponent {

  selected: number[] = [];
  inputControl = new FormControl(null);

  plates: IPlate[] = [
    // Template
    {
      key: 0,
      name: "navn",
      grid: [
        [null, null, null, 80, 99, 45, 23, 55, null],
        [null, 12, null, 31, null, null, 24, 16, 40],
        [3, 14, 28, 36, null, null, null, 98, null]
      ]
    },
  ];

  mouseDown(event: KeyboardEvent) {
    if (event.code != "Enter") return;

    let value = parseInt(this.inputControl.value);

    let indexOf = this.selected.indexOf(value);
    if (indexOf != -1)
      this.selected.splice(indexOf, 1);
    else
      this.selected.push(value);

    this.inputControl.setValue("");
  }

  clear() {
    this.selected = [];
  }
}
