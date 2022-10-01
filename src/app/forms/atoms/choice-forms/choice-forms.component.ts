import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormArray,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { maxChoiceValueCount } from '../../../global/constant-value';
import { ToastService } from '../../../global/services/toast.service';
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
export class ChoiceFormsComponent
  implements OnInit, OnDestroy, ControlValueAccessor
{
  subscription = new Subscription();
  choiceForms = new FormArray([new FormControl<string>('')]);

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  writeValue(params?: string[] | null): void {
    if (params == null) return;
    this.choiceForms.clear();
    params.forEach((param, idx) => {
      if (idx < maxChoiceValueCount) {
        this.choiceForms.push(new FormControl<string>(param));
      }
    });
  }

  registerOnChange(fn: any): void {
    this.subscription.add(this.choiceForms.valueChanges.subscribe(fn));
  }

  registerOnTouched(fn: any): void {}

  get choiceListControls(): FormControl<string | null>[] {
    return this.choiceForms.controls;
  }

  /** フォームの追加 */
  addNewForm(): void {
    if (this.choiceForms.length > maxChoiceValueCount) {
      this.toastService.openWarnToast(
        `選択肢は最大${maxChoiceValueCount}個まで`
      );
      return;
    }
    this.choiceForms.push(new FormControl<string>(''));
  }

  /** 指定フォームを削除 */
  removeForm(i: number): void {
    this.choiceForms.removeAt(i);
  }
}
