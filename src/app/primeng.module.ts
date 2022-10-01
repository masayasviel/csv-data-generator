import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { OrderListModule } from 'primeng/orderlist';
import { RippleModule } from 'primeng/ripple';

const prime = [
  ButtonModule,
  CheckboxModule,
  ChipsModule,
  DropdownModule,
  InputNumberModule,
  InputTextModule,
  OrderListModule,
  RippleModule,
];

@NgModule({
  declarations: [],
  imports: prime,
  exports: prime,
  providers: [MessageService],
})
export class PrimengModule {}
