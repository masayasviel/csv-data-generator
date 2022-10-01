import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { EnableInputFormType } from '../../../global/constant-value';

@Component({
  selector: 'app-column-form',
  templateUrl: './column-form.component.html',
  styleUrls: ['./column-form.component.scss'],
})
export class ColumnFormComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  columnTypeForm = new FormControl<EnableInputFormType>('nonSelect');
  headerValueForm = new FormControl<string>('');
  optionForm = new FormControl<string | string[] | null>(null);
  formGroup = new FormGroup({
    columnType: this.columnTypeForm,
    headerValue: this.headerValueForm,
    option: this.optionForm,
  });
  constructor() {}

  ngOnInit(): void {
    this.subscription.add(this.formGroup.valueChanges.subscribe(console.log));
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  get columnType(): EnableInputFormType {
    return this.columnTypeForm.value ?? 'nonSelect';
  }
}
