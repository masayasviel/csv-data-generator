import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-time-form',
  templateUrl: './time-form.component.html',
  styleUrls: ['./time-form.component.scss'],
})
export class TimeFormComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  fromTimeForm = new FormControl<Date | null>(null);
  toTimeForm = new FormControl<Date | null>(null);
  formGroup = new FormGroup({
    from: this.fromTimeForm,
    to: this.toTimeForm,
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
