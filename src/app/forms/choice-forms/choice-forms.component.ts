import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { maxChoiceValueCount } from '../../global/constant-value';
import { ToastService } from '../../global/services/toast.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-choice-forms',
  templateUrl: './choice-forms.component.html',
  styleUrls: ['./choice-forms.component.scss'],
})
export class ChoiceFormsComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  choiceForms = new FormArray([new FormControl<string>('')]);

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.choiceForms.valueChanges.subscribe((elm) => {
        console.log(elm);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

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
