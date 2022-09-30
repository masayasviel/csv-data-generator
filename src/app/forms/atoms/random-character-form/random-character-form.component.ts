import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-random-character-form',
  templateUrl: './random-character-form.component.html',
  styleUrls: ['./random-character-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RandomCharacterFormComponent),
      multi: true,
    },
  ],
})
export class RandomCharacterFormComponent
  implements OnInit, OnDestroy, ControlValueAccessor
{
  subscription = new Subscription();
  optionForm = new FormControl<string[]>([]);

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  writeValue(param: string[]): void {
    this.optionForm.setValue(param);
  }

  registerOnChange(fn: any): void {
    this.subscription.add(this.optionForm.valueChanges.subscribe(fn));
  }

  registerOnTouched(fn: any): void {}
}
