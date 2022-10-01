import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';

import { ColumnFormInterface } from '../../interfaces/form.interface';

@Component({
  selector: 'app-table-define',
  templateUrl: './table-define.component.html',
  styleUrls: ['./table-define.component.scss'],
})
export class TableDefineComponent implements OnInit {
  formList = new FormArray([new FormControl<ColumnFormInterface | null>(null)]);

  constructor() {}

  ngOnInit() {
    this.formList.valueChanges.subscribe(console.log);
  }

  /** forms in formArray */
  get formsInFormList(): FormControl[] {
    return this.formList.controls;
  }

  /** add new form */
  onClickAddForm(): void {
    this.formList.push(new FormControl<ColumnFormInterface | null>(null));
  }

  /** delete form at index */
  onClickDeleteForm(idx: number): void {
    this.formList.removeAt(idx);
  }
}
