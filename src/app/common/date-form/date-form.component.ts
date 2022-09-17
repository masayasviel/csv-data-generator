import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'app-date-form',
  templateUrl: './date-form.component.html',
  styleUrls: ['./date-form.component.scss'],
})
export class DateFormComponent implements OnInit {
  rangeDataForm = new FormControl<[Date | null, Date | null] | null>(null);

  constructor() {}

  ngOnInit(): void {
    this.rangeDataForm.valueChanges
      .pipe(filter((elm) => elm != null))
      .subscribe((elm) => {
        console.log(elm);
      });
  }
}
