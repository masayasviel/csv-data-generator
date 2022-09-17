import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-datetime-form',
  templateUrl: './datetime-form.component.html',
  styleUrls: ['./datetime-form.component.scss'],
})
export class DatetimeFormComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  fromDataTimeForm = new FormControl<Date | null>(null);
  toDataTimeForm = new FormControl<Date | null>(null);
  formGroup = new FormGroup({
    from: this.fromDataTimeForm,
    to: this.toDataTimeForm,
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
