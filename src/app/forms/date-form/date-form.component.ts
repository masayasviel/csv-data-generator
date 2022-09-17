import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-date-form',
  templateUrl: './date-form.component.html',
  styleUrls: ['./date-form.component.scss'],
})
export class DateFormComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  fromDataForm = new FormControl<Date | null>(null);
  toDataForm = new FormControl<Date | null>(null);
  formGroup = new FormGroup({
    from: this.fromDataForm,
    to: this.toDataForm,
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
