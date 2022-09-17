import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-fix-form',
  templateUrl: './fix-form.component.html',
  styleUrls: ['./fix-form.component.scss'],
})
export class FixFormComponent implements OnInit {
  fixValueForm = new FormControl<string>('');

  constructor() {}

  ngOnInit(): void {}
}
