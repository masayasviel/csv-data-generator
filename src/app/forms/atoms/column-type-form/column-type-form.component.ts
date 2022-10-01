import { Component, OnDestroy, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Subscription } from 'rxjs';

import { EnableInputFormType, enableInputFormNameMap } from '@global/constant-value';

@Component({
  selector: 'app-column-type-form',
  templateUrl: './column-type-form.component.html',
  styleUrls: ['./column-type-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ColumnTypeFormComponent),
      multi: true,
    },
  ],
})
export class ColumnTypeFormComponent implements OnInit, OnDestroy, ControlValueAccessor {
  subscription = new Subscription();
  /** 入力フォームの種類 */
  enableInputForm = enableInputFormNameMap;
  selectedInputType = new FormControl<EnableInputFormType>('nonSelect');

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  writeValue(param?: EnableInputFormType | null): void {
    if (param == null) return;
    this.selectedInputType.setValue(param);
  }

  registerOnChange(fn: any): void {
    this.subscription.add(this.selectedInputType.valueChanges.subscribe(fn));
  }

  registerOnTouched(fn: any): void {}
}
