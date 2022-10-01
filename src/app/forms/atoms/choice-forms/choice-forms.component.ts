import { Component, OnDestroy, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-choice-forms',
  templateUrl: './choice-forms.component.html',
  styleUrls: ['./choice-forms.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChoiceFormsComponent),
      multi: true,
    },
  ],
})
export class ChoiceFormsComponent implements OnInit, OnDestroy, ControlValueAccessor {
  subscription = new Subscription();
  choiceForms = new FormControl<string[]>([]);

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  writeValue(params?: string[] | null): void {
    if (params == null) return;
    this.choiceForms.setValue(params);
  }

  registerOnChange(fn: any): void {
    this.subscription.add(this.choiceForms.valueChanges.subscribe(fn));
  }

  registerOnTouched(fn: any): void {}
}
