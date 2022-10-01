import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';

const prime = [
  ButtonModule,
  CheckboxModule,
  ChipsModule,
  DropdownModule,
  InputNumberModule,
  InputTextModule,
  RippleModule,
];

@NgModule({
  declarations: [],
  imports: prime,
  exports: prime,
  providers: [],
})
export class PrimengModule {}
