import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { enableInputFormNameMap, EnableInputFormType } from '../constant-value';

@Component({
  selector: 'app-column-type-form',
  templateUrl: './column-type-form.component.html',
  styleUrls: ['./column-type-form.component.scss'],
})
export class ColumnTypeFormComponent implements OnInit {
  /** 入力フォームの種類 */
  enableInputForm = enableInputFormNameMap;
  selectedInputType = new FormControl<EnableInputFormType>('nonSelect');

  constructor() {}

  ngOnInit(): void {}
}
