import { Component, OnDestroy, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Subscription } from 'rxjs';

import { EnableInputFormType } from '@global/constant-value';

import { ColumnFormInterface, ColumnFormOptionType } from '../../interfaces/form.interface';

@Component({
  selector: 'app-column-form',
  templateUrl: './column-form.component.html',
  styleUrls: ['./column-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ColumnFormComponent),
      multi: true,
    },
  ],
})
export class ColumnFormComponent implements OnInit, OnDestroy, ControlValueAccessor {
  subscription = new Subscription();
  columnTypeForm = new FormControl<EnableInputFormType>('nonSelect');
  headerValueForm = new FormControl<string>('');
  optionForm = new FormControl<ColumnFormOptionType>(null);
  formGroup = new FormGroup({
    columnType: this.columnTypeForm,
    headerValue: this.headerValueForm,
    option: this.optionForm,
  });
  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  writeValue(params?: ColumnFormInterface | null): void {
    if (params == null) return;
    this.columnTypeForm.setValue(params.columnType);
    this.headerValueForm.setValue(params.headerValue);
    this.optionForm.setValue(params.option);
  }

  registerOnChange(fn: any): void {
    this.subscription.add(this.formGroup.valueChanges.subscribe(fn));
  }

  registerOnTouched(fn: any): void {}

  /** input form column type */
  get columnType(): EnableInputFormType {
    return this.columnTypeForm.value ?? 'nonSelect';
  }
}
