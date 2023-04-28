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
      key: 37,
      name: "Casper Reetz-Engell",
      grid: [
        [null,null,21,31,null,52,65,null,83],
        [null,15,null,34,null,54,null,77,84],
        [4, null,null,37, 42,58, null,null,88]
      ]
    },
    {
      key: 38,
      name: "Daniel Tidemann Jensen",
      grid: [
        [null,10,null,null,43,56,null,75,90],
        [1,14,20,null,45,null,66,null,null],
        [null, 18, 28, 33, 48, null, null,76, null]
      ]
    },
    {
      key: 39,
      name: "Greg Gomes",
      grid: [
        [2,11,22, null, null, null, 67, null, 80],
        [5, null,null,32,44,55,69, null,null],
        [9,13,null,35,null,null,null,70,85]
      ]
    },
    {
      key: 40,
      name: "Nicolai Rasmussen",
      grid: [
        [3, 12,23,30, null,null,null,71,null],
        [null,17,24,36, null,50,60,null,null],
        [8, null,27,null,40,null,68,null,82]
      ]
    },
    {
      key: 41,
      name: "Thomas Helledi Thomsen",
      grid: [
        [7, null, null, null, 47,null, 61, 73, 81],
        [null, null, 26, 38, null, null, 63, 78, 86],
        [null, 19, null, null, 49, 57, 64, null, 87]
      ]
    },


    {
      key: 71,
      name: "Torben",
      grid: [
        [null,null,26,30,null,51,62,null,86],
        [null,12,28,33,null,52,null,76,null],
        [4,null,null,34,48, null,69, null,89]
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
