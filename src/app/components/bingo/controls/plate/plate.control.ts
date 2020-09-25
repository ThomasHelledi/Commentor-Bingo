import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface IPlate {
  name: string;
  key: number;

  grid: number[][];
}

@Component({
  selector: 'bingo-plate',
  templateUrl: './plate.control.html'
})
export class BingoPlateControl {

  private _plate: IPlate;

  @Input()
  get plate(): IPlate {
    return this._plate;
  }
  set plate(value: IPlate) {
    this._plate = value;
  }

  @Input() selected: number[];
  @Output() selectedChange = new EventEmitter<number[]>();

  updateSelected(selected) {
    this.selected = selected;
    this.selectedChange.emit(selected);
  }

  select(value: number) {
    if (value == null) return;

    let indexOf = this.selected.indexOf(value);
    if (indexOf != -1)
      this.selected.splice(indexOf, 1);
    else
      this.selected.push(value);
  }

}
