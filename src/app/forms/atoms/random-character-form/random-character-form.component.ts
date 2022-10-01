import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { RandomCharacterFormInterface } from '../../interfaces/form.interface';

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
  characterLength = new FormControl<number>(1);
  optionForm = new FormControl<string[]>([]);
  formGroup = new FormGroup({
    characterLength: this.characterLength,
    optionForm: this.optionForm,
  });

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  writeValue(params?: RandomCharacterFormInterface | null): void {
    if (params == null) return;
    this.optionForm.setValue(params.options);
    this.characterLength.setValue(params.characterLength);
  }

  registerOnChange(fn: any): void {
    this.subscription.add(this.formGroup.valueChanges.subscribe(fn));
  }

  registerOnTouched(fn: any): void {}
}
