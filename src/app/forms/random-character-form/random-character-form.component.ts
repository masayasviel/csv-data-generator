import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-random-character-form',
  templateUrl: './random-character-form.component.html',
  styleUrls: ['./random-character-form.component.scss'],
})
export class RandomCharacterFormComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  fromNumberTimeForm = new FormControl<number>(1);
  toNumberTimeForm = new FormControl<number>(1);
  optionForm = new FormControl<string[]>([]);
  formGroup = new FormGroup({
    from: this.fromNumberTimeForm,
    to: this.toNumberTimeForm,
    options: this.optionForm,
  });

  constructor() {}

  ngOnInit(): void {
    this.subscription.add(
      this.formGroup.valueChanges.subscribe((elm) => {
        console.log(elm);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
