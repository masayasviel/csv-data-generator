import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-fix-form',
  templateUrl: './fix-form.component.html',
  styleUrls: ['./fix-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FixFormComponent),
      multi: true,
    },
  ],
})
export class FixFormComponent
  implements OnInit, OnDestroy, ControlValueAccessor
{
  subscription = new Subscription();
  fixValueForm = new FormControl<string>('');

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  writeValue(param?: string | null): void {
    if (param == null) return;
    this.fixValueForm.setValue(param);
  }

  registerOnChange(fn: any): void {
    this.subscription.add(this.fixValueForm.valueChanges.subscribe(fn));
  }

  registerOnTouched(fn: any): void {}
}
